import {IInputs, IOutputs} from "./generated/ManifestTypes";
import {marked} from "marked";
declare const MathJax: any;

export class MarkdownControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
    private _markdownContainer: HTMLDivElement;
    private _value: string;

    constructor() {
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this._container = document.createElement("div");
        this._markdownContainer = document.createElement("div");
        this._markdownContainer.className = "markdown-container"; // クラスを追加
        this._container.appendChild(this._markdownContainer);
        container.appendChild(this._container);

        const mathjaxScript = document.createElement("script");
        mathjaxScript.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.1.4/es5/tex-chtml.js";
        mathjaxScript.onload = () => {
            MathJax.init({
                loader: { load: ['input/tex', 'output/chtml'] }
            });
        };
        document.head.appendChild(mathjaxScript);

    }

    public async updateView(context: ComponentFramework.Context<IInputs>): Promise<void> {
        if (context.parameters.markdownText.raw !== null) {
            this._value = context.parameters.markdownText.raw;
            const markedValue = await marked(this._value);
            this._markdownContainer.innerHTML = markedValue;

            // Render MathJax
            await MathJax.typesetPromise([this._markdownContainer]);

        }
    }

    public getOutputs(): IOutputs {
        return {
            markdownText: this._value
        };
    }

    public destroy(): void {
    }
}
