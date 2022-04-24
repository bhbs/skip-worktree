import { commands, ExtensionContext, window } from "vscode";

export const activate = (context: ExtensionContext) => {
	const disposable = commands.registerCommand(
		"skip-worktree.helloWorld",
		() => {
			window.showInformationMessage("Hello World from skip-worktree!");
		},
	);
	context.subscriptions.push(disposable);
};

export const deactivate = () => {};
