const fs = require("fs");
const path = require("path");

const identity = JSON.parse(fs.readFileSync(path.join(__dirname, "../core/identity.json"), "utf-8"));
const skills = JSON.parse(fs.readFileSync(path.join(__dirname, "../core/skills.json"), "utf-8"));
const projects = JSON.parse(fs.readFileSync(path.join(__dirname, "../core/projects.json"), "utf-8"));

const readme = `
# ${identity.name}

## ${identity.role}

> ${identity.tagline}

---

# 🧠 SYSTEM OVERVIEW
I operate as a technical writer focused on translating **high-complexity systems into production-ready documentation** across cybersecurity, APIs, and AI systems.

---

# 🎯 MISSION
${identity.mission}

---

# ⚙️ CORE SKILL ARCHITECTURE

${skills.map(s => `- ✔ ${s}`).join("\n")}

---

# 🚀 FLAGSHIP SYSTEMS (CASE STUDIES)

${projects.map(p => `
## 🔹 ${p.name}

**Description:** ${p.description}

**Focus Area:** ${p.focus}

---
`).join("\n")}

---

# 🧠 WRITING ENGINE PHILOSOPHY
${identity.style}

I don’t just write documentation — I design **understanding systems** for developers, security engineers, and AI practitioners.

---

# 📊 PROFESSIONAL SIGNALS
- Technical Writing (Production-Level)
- Cybersecurity + API System Knowledge
- AI System Interpretation
- Developer Education Content Design

---

# 📫 CONTACT
Generated via Portfolio OS (CLI-driven technical identity system)

GitHub Portfolio System: ACTIVE
`;

fs.writeFileSync(path.join(__dirname, "../README.md"), readme);

console.log("✅ Portfolio OS upgraded successfully");