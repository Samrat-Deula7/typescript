import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './tutorial.ts'
import './function.ts'
import './Challenge1.ts'
import './Challenge2.ts'
import './Challenge3.ts'
import './Challenge4.ts'
import './Challenge5.ts'
import "./Challenge6.ts";
import './typeAlias.ts'
import './Interface.ts'
import './Touple.ts'
import './Enum.ts'
import './Type-Assertion.ts'
import './Type-unknown.ts'
import './Type-Never.ts'
import './modulesInTS.ts'
import './importingMoudles.ts'
import './Type-Guarding.ts'
import './DiscriminatedUnions.ts'
import './Generic.ts'
import './fetchData.ts'
import './Zod.ts'
import './DeclarationFile.ts'
import './Class.ts'
import './ClassGetSet.ts'
import './ClassInterface.ts'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
