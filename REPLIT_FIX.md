# Replit Configuration Fix

## Проблем
`.replit` файлът все още търси папката `pravda-final-nextjs`, но файловете са преместени в root.

## Как да оправите .replit файла

### Променете тези редове:

**От:**
```
run = "cd pravda-final-nextjs && npm run dev"
build = ["cd pravda-final-nextjs && npm run build"]
run = ["cd pravda-final-nextjs && npm run start"]
args = "cd pravda-final-nextjs && npm run dev"
```

**На:**
```
run = "npm run dev"
build = ["npm run build"]
run = ["npm run start"]
args = "npm run dev"
```

### Пълен поправен .replit файл:

```
modules = ["nodejs-20", "web", "postgresql-16"]
run = "npm run dev"
hidden = [".config", ".git", "generated-icon.png", "node_modules", "dist"]

[nix]
channel = "stable-24_05"

[deployment]
deploymentTarget = "autoscale"
build = ["npm run build"]
run = ["npm run start"]

[[ports]]
localPort = 80
externalPort = 3000

[[ports]]
localPort = 3000
externalPort = 3001

[[ports]]
localPort = 5000
externalPort = 80

[workflows]
runButton = "Project"

[[workflows.workflow]]
name = "Project"
mode = "parallel"
author = "agent"

[[workflows.workflow.tasks]]
task = "workflow.run"
args = "Start application"

[[workflows.workflow]]
name = "Start application"
author = "agent"

[[workflows.workflow.tasks]]
task = "shell.exec"
args = "npm run dev"
waitForPort = 3000
```

## След промяната

1. Запишете .replit файла
2. Restart workflow-а
3. Next.js ще стартира успешно от root директорията

## Статус
✅ Файловете са правилно в root
✅ Структурата е готова за GitHub upload
✅ Структурата е готова за Vercel deployment
⚠️ Трябва да поправите .replit файла за локално development