# flake.nix
{
  description = "Minhas atividades de ADS da UNICSUL (Front-END)";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            git           # para controle de versao
            restic        # para backup
            zip           # para arquivar
            rclone        # para cloud sync
            sha256sum     # para verificar
          ];
        };

        
        packages.uni-archive = pkgs.stdenv.mkDerivation {
          name = "uni-files-archive";
          src = ./aulas;
          
          installPhase = ''
            mkdir -p $out
            cp -r . $out/
            
            # Generate checksums for integrity
            find $out -type f -exec sha256sum {} \; > $out/CHECKSUMS.txt
          '';
        };
      }
    );
}