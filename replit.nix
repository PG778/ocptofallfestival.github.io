{ pkgs }: {
  deps = [
		pkgs.nodePackages.prettier
    pkgs.lsof
    pkgs.lsof
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}