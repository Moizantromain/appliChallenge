# appliChallenge
_projet de participation sur application web_
* html/css 
* api facebook
* merge git hub
* fonctionnalité
* local storage


_dans le read.me
se connecter sur le template pour sass:watch_

**id mot commençant par majuscule
class mot commençant en minuscule**

**section class container: animated, sass
 id :Container javascript**

* table,td,tr:
* tr:daily;
* tr:weekly;
* tr:monthly
* tr:bottom

* plugins:
* bootstrap
* animated
* jQuery
* fontawesome


**white, bleu, vert rouge noir, gradient
variable**
* $color-white:white 
* $color-navy:navy
* $color-red:red
* $color-black:black
* $color-green:green
* $color-gradient:gradient


**Add a site :**

* créer fonction API Facebook
* ouverture lorsque l’on clique sur un tr avec le +
* croix en haut à droite pour fermer le « add a site »
* décalage du site vers bas et droite avec background gris foncé derrière et filtre plus foncé sur tout le site
* à la saisie dans le premier input, apparition de l’image à la place du Bouddah
* à la saisie dans le deuxième input, obligatoire, de l’URL du site que l’on veut ajouter
* « More images » qui permet récupérer d’autres images et d’accéder aux autres pages facebook
	génère ouverture de page latérale
* set URL : permet de rentrer directement l’URL si API Facebook ne la trouve pas
	génère ouverture de petite page latérale pour rentrer l’URL
* AddToCollection : envoie la page choisie dans le tr qui a permis l’ouverture d’Add a site

**Bouddah de menu à gauche du site:**

* au clic, apparition du menu depuis la gauche et disparition quand on clic sur le Bouddah qui est passé en haut du menu
* couleur devient plus foncée au hover sur le Bouddah
* apparition de flèches sur le menu de chaque côté des titres tournées vers le haut pour monter et vers le bas pour descendre
* au clic sur un titre du menu, menu déroulant avec les fonctionnalités et disparition des autres titres du menu
* alternance de couleur gris et blanc
* Thèmes : Pouvoir changer le background et la couleur des textes, changement avec une transition
* Facebook API : permet d’entrer l’app ID et le Token
* Import, Notifications, Share : coming soon


_Les plus sont là à l’ouverture de la page mais disparaissent quand il y a des sites enregistrés et sont ensuite visibles qu’au Hover
images grossissent au hover sur toutes les images_

Footer : Apparition du crayon, de la poubelle et du plus au hover

Coche qui apparait quand le site a été consulté puis qui disparaît en fonction de la temporalité
réorganisation des images en drag n drop + fonctionnalité tableau avec index pour les réorganiser
si pas d’image du site, image du Bouddah par défaut

Local storage:
faire JSON pour url du site, url de l’image, pour délai de consultation

Fonctions : 

-ouverture du menu Add a site au clic sur + (body ou footer)
-ouverture nav au clic sur le Bouddah

Couleurs de thèmes : 