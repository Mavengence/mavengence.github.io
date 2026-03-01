import React from 'react';
import styled from 'styled-components';
import Terminal from '../ui/Terminal';
import RetroSection from '../ui/RetroSection';
import { COLORS } from '../ui/Theme';

const TerminalContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  /* Subtle glow border */
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg,
      ${COLORS.primary}30,
      ${COLORS.accent}30,
      ${COLORS.secondary}30
    );
    z-index: -1;
    opacity: 0.5;
    border-radius: 20px;
  }

  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const commandsData = [
    {
      command: 'whoami',
      result: 'Tim Loehr, Data Engineer @ Meta'
    },
    {
      command: 'cat skills.json | jq',
      result: `{
  "Programming": ["Python", "SQL", "R", "JavaScript"],
  "ML & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
  "Data": ["Spark", "Hadoop", "MongoDB", "PostgreSQL", "Data Visualization"],
  "Cloud": ["AWS", "GCP", "Azure", "Docker", "Kubernetes"]
}`
    },
    {
      command: 'ls -la education/',
      result: `drwxr-xr-x  5 timloehr  staff  160 Mar 1 10:24 .
drwxr-xr-x 18 timloehr  staff  576 Mar 1 10:24 ..
-rw-r--r--  1 timloehr  staff  302 Mar 1 10:24 MS_Computer_Science.md
-rw-r--r--  1 timloehr  staff  286 Mar 1 10:24 BS_Computer_Science.md
drwxr-xr-x  7 timloehr  staff  224 Mar 1 10:24 certificates/`
    },
    {
      command: 'cat experience.json | jq | bat -l json',
      result: `───────┬──────────────────────────────────────────────────────────
       │ File: experience.json
───────┼──────────────────────────────────────────────────────────
   1   │ {
   2   │   "Meta": {
   3   │     "role": "Data Engineer",
   4   │     "period": "2025-Present",
   5   │     "projects": ["Enterprise Infrastructure", "Security Analytics"]
   6   │   },
   7   │   "Red Bull": {
   8   │     "role": "Data Scientist",
   9   │     "period": "2024-2025",
  10   │     "projects": ["Supply Chain Analytics", "MLOps"]
  11   │   },
  12   │   "Apple": {
  13   │     "role": "Data Scientist",
  14   │     "period": "2022-2024",
  15   │     "projects": ["Supply Chain Optimization", "Anomaly Detection"]
  16   │   },
  17   │   "Amazon": {
  18   │     "role": "BI Engineer",
  19   │     "period": "2021",
  20   │     "projects": ["Data Pipelines", "Sales Forecasting"]
  21   │   }
  22   │ }`
    },
    {
      command: 'contact --format=pretty',
      result: `┌─────────────────────────────────────────────────────┐
│ LinkedIn : linkedin.com/in/tim-loehr-821ba8188      │
│ GitHub   : github.com/mavengence                    │
│ Medium   : medium.com/@mavengence                   │
│ Scholar  : scholar.google.com/citations?user=DLV... │
└─────────────────────────────────────────────────────┘`
    },
    {
      command: 'echo "Machine Loehrning is my passion 🧠" | figlet',
      result: `  __  __            _     _              _                _             _             
 |  \\/  | __ _  ___| |__ (_)_ __   ___  | |    ___   ___| |__  _ __ _ __ (_)_ __   __ _ 
 | |\\/| |/ _\` |/ __| '_ \\| | '_ \\ / _ \\ | |   / _ \\ / __| '_ \\| '__| '_ \\| | '_ \\ / _\` |
 | |  | | (_| | (__| | | | | | | |  __/ | |__| (_) | (__| | | | |  | | | | | | | | (_| |
 |_|  |_|\\__,_|\\___|_| |_|_|_| |_|\\___| |_____\\___/ \\___|_| |_|_|  |_| |_|_|_| |_|\\__, |
                                                                                   |___/`
    },
    {
      command: 'neofetch',
      result: `            .-/+oossssoo+/-.               tim@machine-loehrning
        \`:+ssssssssssssssssss+:\`           -------------------
      -+ssssssssssssssssssyyssss+-         OS: Data Science Pro
    .ossssssssssssssssss/   /ossssso.      Host: Portfolio v2.0
   /sssssssssssssssssso/     /sssssss/     Kernel: Brain 5.0
  +sssssssssssssssssss/       /ssssssso    Uptime: 28 years
 :ssssssssssssssssssss\\       /sssssssss:  Packages: Python, R, SQL, JS
 +ssssssssssssssssssssso\\     /sssssssss+  Shell: ZSH 5.9
 +sssssssssssssssssssssssooosssssssssss+  Resolution: 2560x1600
 /ssssssssssssssssssssssssssssssssssssso  DE: Machine Learning
 .osssssssssssssssssssssssssssssssssssso  WM: Neural Networks
  -+sssssssssssssssssssssssssssssssss+-   Terminal: Data Science
   \\\\ossssssssssssssssssssssssssssso/     CPU: Cortex ML-9000
    \`.+ossssssssssssssssssssssssso+.'      Memory: 1TB ML Models
      \`-/+oossssssssssssssssoo+/-\`         Skills: [█████████▒] 95%
        `
    }
  ];

const Console = () => {
  return (
    <RetroSection 
      id="console"
      title="TERMINAL"
      titleColor={COLORS.hivePrimary}
      background={COLORS.hiveDarkBg}
      gridColor={COLORS.hivePrimary}
      gridOpacity="0.05"
    >
      <TerminalContainer>
        <Terminal 
          commands={commandsData}
          title="timloehr@machine-loehrning ~ $"
        />
      </TerminalContainer>
    </RetroSection>
  );
};

export default Console;