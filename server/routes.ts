import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertMessageSchema, insertUserSchema, insertProjectSchema, insertTechnologySchema } from "@shared/schema";

// Contact form validation schema
const contactSchema = insertMessageSchema;

// Custom error handler for API routes
const handleApiError = (error: unknown, res: Response) => {
  console.error('API Error:', error);
  
  if (error instanceof z.ZodError) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid data format', 
      errors: error.errors 
    });
  }
  
  return res.status(500).json({ 
    success: false, 
    message: 'An unexpected error occurred' 
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // ==== PROJECTS ENDPOINTS ====
  
  // Get all projects
  app.get('/api/projects', async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      return res.status(200).json(projects);
    } catch (error) {
      return handleApiError(error, res);
    }
  });
  
  // Get a specific project by ID
  app.get('/api/projects/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProjectById(id);
      
      if (!project) {
        return res.status(404).json({ 
          success: false, 
          message: 'Project not found' 
        });
      }
      
      return res.status(200).json(project);
    } catch (error) {
      return handleApiError(error, res);
    }
  });
  
  // ==== TECHNOLOGIES ENDPOINTS ====
  
  // Get all technologies
  app.get('/api/technologies', async (_req, res) => {
    try {
      const technologies = await storage.getTechnologies();
      return res.status(200).json(technologies);
    } catch (error) {
      return handleApiError(error, res);
    }
  });
  
  // Get technologies for a specific project
  app.get('/api/projects/:id/technologies', async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      const technologies = await storage.getProjectTechnologies(projectId);
      return res.status(200).json(technologies);
    } catch (error) {
      return handleApiError(error, res);
    }
  });
  
  // ==== CONTACT MESSAGE ENDPOINTS ====
  
  // Submit a contact form message
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const data = contactSchema.parse(req.body);
      
      // Save message to database
      const savedMessage = await storage.createMessage(data);
      
      return res.status(201).json({ 
        success: true, 
        message: 'Message received successfully',
        data: savedMessage
      });
    } catch (error) {
      return handleApiError(error, res);
    }
  });
  
  // ==== ADMIN ENDPOINTS ====
  // These would typically be protected with authentication
  
  // Get all contact messages (admin only)
  app.get('/api/admin/messages', async (_req, res) => {
    try {
      const messages = await storage.getMessages();
      return res.status(200).json(messages);
    } catch (error) {
      return handleApiError(error, res);
    }
  });
  
  // Mark a message as read (admin only)
  app.patch('/api/admin/messages/:id/read', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedMessage = await storage.markMessageAsRead(id);
      
      if (!updatedMessage) {
        return res.status(404).json({ 
          success: false, 
          message: 'Message not found' 
        });
      }
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message marked as read',
        data: updatedMessage
      });
    } catch (error) {
      return handleApiError(error, res);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
