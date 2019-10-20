# ASI2-Ateliers

Auteurs : 
 - Martin Thénot 
 - Fabien Dalla-Valle
 - Maxime Delahodde
 - Thibault Caussanel 

Lien vers le dépot git : 
 github.com/fabiendv/asi-atelier1

Activités réalisées par personne :

 - Thibault :
	- Composants React pour les pages Buy/Sell et Play
	- Module backend Springboot communicant par un bus avec une application indépendante
	- Backend Node.js associant 2 joueurs dans une partie
 - Martin : 
	- 
 - Fabien :
	-
 - Maxime :
	-

Eléments réalisés : 
 - Diagramme de classe de l'architecture monolithique
 - Tableau récapitulatif des bus de communication les plus répandus
 - Tableau comparatif des principaux Framework FrontEnd existants
 - Découpage du FrontEnd en composant REACTJS
 - Application REACTJS avec interaction avec le BackEnd
 - Module permettant à notre BackEnd SpringBoot de mettre à jour les propriétés d’un utilisateur par un BUS de communication
 - Application indépendante permettant de tester la mise à jour d’un utilisateur par Bus de Communication
 - Avantages/inconvénients de node.js pour le projet
 - Backend Node.js indépendant permettant de créer un chat entre deux utilisateurs
 - BackEnd Node.js indépendant permettant d’associer les utilisateurs souhaitant jouer entre eux.
 - Frontend React d'une partie de jeux

Eléments non réalidés : 
 - Diagramme de séquence expliquant les interactions entre Node.js et le FrontEnd lors d’un jeu entre deux joueurs
 - Backend Node.js d'une partie de jeu
 - Sauvegarde de l’historique des conversations du Chat en envoyant les données du BackEnd Node.js vers le BackEnd Springboot
 - Informer le BackEnd SpringBoot gérant les utilisateurs et les cartes du résultats du jeu par Bus de communication
 - Mise en place d'un proxy permettant de rediriger les requêtes http entre les 2 backends
