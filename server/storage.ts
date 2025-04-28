import { 
  users, type User, type InsertUser,
  projects, type Project, type InsertProject,
  technologies, type Technology, type InsertTechnology,
  projectTechnologies, type ProjectTechnology, type InsertProjectTechnology,
  messages, type Message, type InsertMessage
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

// Expanded interface with CRUD methods for all our models
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByUserId(userId: number): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Technology methods
  getTechnologies(): Promise<Technology[]>;
  getTechnologyById(id: number): Promise<Technology | undefined>;
  createTechnology(technology: InsertTechnology): Promise<Technology>;
  
  // Project Technology methods
  getProjectTechnologies(projectId: number): Promise<Technology[]>;
  addTechnologyToProject(projectId: number, technologyId: number): Promise<void>;
  removeTechnologyFromProject(projectId: number, technologyId: number): Promise<void>;
  
  // Message methods
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  markMessageAsRead(id: number): Promise<Message | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Project methods
  async getProjects(): Promise<Project[]> {
    return db.select().from(projects);
  }
  
  async getProjectById(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }
  
  async getProjectsByUserId(userId: number): Promise<Project[]> {
    return db.select().from(projects).where(eq(projects.userId, userId));
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }
  
  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db
      .update(projects)
      .set(project)
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    await db.delete(projects).where(eq(projects.id, id));
    return true;
  }
  
  // Technology methods
  async getTechnologies(): Promise<Technology[]> {
    return db.select().from(technologies);
  }
  
  async getTechnologyById(id: number): Promise<Technology | undefined> {
    const [technology] = await db.select().from(technologies).where(eq(technologies.id, id));
    return technology;
  }
  
  async createTechnology(technology: InsertTechnology): Promise<Technology> {
    const [newTechnology] = await db.insert(technologies).values(technology).returning();
    return newTechnology;
  }
  
  // Project Technology methods
  async getProjectTechnologies(projectId: number): Promise<Technology[]> {
    const results = await db
      .select({
        technology: technologies
      })
      .from(projectTechnologies)
      .innerJoin(technologies, eq(projectTechnologies.technologyId, technologies.id))
      .where(eq(projectTechnologies.projectId, projectId));
    
    return results.map(result => result.technology);
  }
  
  async addTechnologyToProject(projectId: number, technologyId: number): Promise<void> {
    await db.insert(projectTechnologies).values({
      projectId,
      technologyId
    });
  }
  
  async removeTechnologyFromProject(projectId: number, technologyId: number): Promise<void> {
    await db
      .delete(projectTechnologies)
      .where(
        and(
          eq(projectTechnologies.projectId, projectId),
          eq(projectTechnologies.technologyId, technologyId)
        )
      );
  }
  
  // Message methods
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
  
  async getMessages(): Promise<Message[]> {
    return db.select().from(messages);
  }
  
  async markMessageAsRead(id: number): Promise<Message | undefined> {
    const [updatedMessage] = await db
      .update(messages)
      .set({ isRead: true })
      .where(eq(messages.id, id))
      .returning();
    return updatedMessage;
  }
}

export const storage = new DatabaseStorage();
