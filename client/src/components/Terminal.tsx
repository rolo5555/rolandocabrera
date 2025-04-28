export default function Terminal() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="relative mx-auto w-full overflow-hidden">
        <div className="bg-dark-mid/40 backdrop-blur-sm border border-white/10 rounded-xl p-5 shadow-xl">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <div className="w-3 h-3 rounded-full bg-success"></div>
            </div>
            <div className="ml-4 text-sm text-gray-400">bash ~ terminal</div>
          </div>
          <div className="font-mono text-sm">
            <div className="mb-1"><span className="text-green-400">user@server</span>:<span className="text-blue-400">~/projects</span>$ kubectl get pods</div>
            <div className="mb-1 text-gray-300">NAME                     READY   STATUS    RESTARTS   AGE</div>
            <div className="mb-1 text-gray-300">frontend-5d4b8b9f4-x7zq9 1/1     Running   0          3h</div>
            <div className="mb-1 text-gray-300">backend-7c6b8d9f7-j2qx7  1/1     Running   0          3h</div>
            <div className="mb-1 text-gray-300">database-0               1/1     Running   0          3h</div>
            <div className="mb-1"><span className="text-green-400">user@server</span>:<span className="text-blue-400">~/projects</span>$ <span className="animate-pulse">_</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
