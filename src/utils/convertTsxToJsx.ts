import ts from "typescript";
import { format } from "prettier/standalone";
import babel from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";

export async function convertTsxToJsx(code: string) {
  const transpiled = ts.transpileModule(code, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      allowJs: true,
    },
    fileName: "component.tsx",
  }).outputText;

  return await format(transpiled, {
    parser: "babel",
    plugins: [babel, estree],
    singleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 2,
    printWidth: 80,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: "always",
    endOfLine: "lf",
    bracketSameLine: true,
  });
}
