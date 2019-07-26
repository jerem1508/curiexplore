# Annuaire
- search bar par Input
- i18n

# scimago
- Positionner le scoll au niveau du pays sélectionné

# FicheCurie
- AJOUT DES COMMENTAIRES
- Ajouts sources, unités, etc. dans HighCharts csv
- Si stack -> faire plusieurs requetes en meme temp
- A FAIRE : GRAPHS STACKS (pour politique ESRI) (voir si possible ?)
- Rendre les graphs + beau (Texte normal mais display hidden div on click)
- Ajout de trop de pays dans la liste (???)
- Toggle la liste (quand on passe de l'un à l'autre)+ recherche A FAIRE (fait)
- Bouton annuler la liste (fait)
- Fix mes couleurs (fait)
- Scanrv2: modifier les graphs afficher listes
- rajouter des commentaires sur les parties qui ne servent à rien
- Optimiser les doubles boucles
- Formater tooltip des graphs
- Afficher message si unité pas dispo (plus ou moins fait)
- Ajouter le titre en props
- Menu indépendant pour le graph
- Boutons de partage & exports à faire + telechargement groupés

# Divers
- Font Awesome en local

# Data
- trier données API Datastore par date (croissant) puis par variable, par pays

Quand graph multiple changer un state (genre graph simple ou multiple) et appeler composent qui gère affichage multiple (dans la partie graph ?) mettre ce composnat dans le this et afficher
let set à nul au départ et si pas nul toggle sans appeler fonction
This.getgrafvalues va call simple graph
Et par defaulr state simple
