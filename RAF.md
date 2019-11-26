# Moteur de recherche
- créer un moteur de recherche pour le site entier

# Cartographie
- réparer cartographie

# Annuaire
- search bar par Input
- i18n (?)
- rendre map fonctionnelle
- vérifier géolocalisation (base ambassade)

# scimago
- Positionner le scroll au niveau du pays sélectionné

# FicheCurie
° AJOUT DES COMMENTAIRES (fait)
- Ajouts sources, unités, etc. dans HighCharts csv
- Si stack -> faire plusieurs requetes en meme temp
- A FAIRE : GRAPHS STACKS (pour politique ESRI) (voir si possible ?)
° Rendre les graphs + beau (Texte normal mais display hidden div on click) -> fait
- Ajout de trop de pays dans la liste (???)
° Toggle la liste (quand on passe de l'un à l'autre)+ recherche A FAIRE (fait)
° Bouton annuler la liste (fait)
° Fix mes couleurs (fait)
- Scanrv2: modifier les graphs afficher listes
- rajouter des commentaires sur les parties qui ne servent à rien
- Optimiser les doubles boucles
- Formater tooltip des graphs
- Afficher message si unité pas dispo (plus ou moins fait)
- Ajouter le titre en props
° Menu indépendant pour le graph (fait)
- Boutons de partage & exports à faire (twitter iframe etc)
- Telechargement groupés (en cours, à améliorer)
° Telechargement pdf au clic et non automatique -> fait
- Changer le nom du fichier en cas d'exports multiples
- Ajouter la catégorie de graph dans le fichier de conf json (Connaitre le pays, paysage es, etc.)
- Ajouter la légende dans la cartographie
- Supprimer les parties liées aux données MEAE

-----------------------------------

- Pour monde, ocde, ue -> fonction qui prend le iso3 et return le label (fait ?)
- Données en base 100
° Gestion des accents dans la recherche (fait)
- Le tweet avec les mots clés
- Prévoir la traduction -> Attention, pays dans le GeoJSON (sur les tooltips) à traduire (actuellement anglais)
° Nom du pays+ valeur + unité (dans tooltip cartographie) -> fait
- Arrondir les données dans le tooltip et la légende en fonction des unités
° Rajouter pas de données dans la légende de la carto (fait)
° Moteur pour les indicateurs de la cartographie (fait)
- Données csv (export groupé)
- Colonne formatage -> afficher x chiffres (ex: afficher 0.50 si 0.25, et non 0.5)
° Ajout des sources dans le pdf/png (fait)
° Gestion d'erreur si pas de données au départ (fait)

# Divers
- Font Awesome en local

# Data
- trier données API Datastore par date (croissant) puis par variable, par pays
- Ajout d'un country_label pour l'UE, l'OCDE et le Monde ? (pour la légende dans le fichier exporté)
