# wizishop
### ## # ###### WIZISHOP application de e-commerce
### Inrtroduction

Ce projet a été vraiment amusant à réaliser ! J'ai vraiment envie d'aller plus loin et de le développer davantage dans les prochains jours (en l'intégrant avec un backend cette fois-ci :D). 

J'ai essayé de m'inspirer du design de l'interface utilisateur du site Web de WIZISHOP, étant donné que WIZISHOP est une entreprise axée sur le design.

Bien que ce ne soit pas complètement identique, je suis plutôt satisfaite du résultat. J'espère vraiment que cela vous plaît (´◡`)

### Résultat

####Page Principale
[![](page principale)](./wizishop/src/assets/doc/main-page.png)
#####En tête
[![](header)](./wizishop/src/assets/doc/header.PNG)
######Accéder à la page du panier
[![](cart button)](./wizishop/src/assets/doc/cart-btn.png)

######Etat des produits
####### En promotion 
[![](Product on sales)](./wizishop/src/assets/doc/sales.PNG)
Lorsque product.sale >0 ;
####### En rupture de stock  
[![](Product out of stock)](./wizishop/src/assets/doc/out-of-stock.PNG)
Lorsque product.maximum = 0 ;
####### Stock limité 
[![](Limited stock)](./wizishop/src/assets/doc/limited.PNG)
Lorsque product.maximum <5 ;
##### Page Carte
[![](Product on sales)](./wizishop/src/assets/doc/cart-page.png)
##### Détails de prix de produit
[![](Product in cart)](./wizishop/src/assets/doc/product-in-cart.PNG)
##### récapitulatif de la commande
[![](order summary)](./wizishop/src/assets/doc/order-summary.PNG)
##### panier vide
[![](Empty cart)](./wizishop/src/assets/doc/empty-cart.PNG)

### Structure de projet
```
📦 WIZISHOP
└─ src
   ├─ app
   │  ├─ components
   │  │  ├─ cart-view-components
   │  │  │  ├─ order-summary (component to display a order summary)
   │  │  │  ├─ product (component to display a product in cart)
   │  │  │  ├─ product-list (component to list all products in cart)
   │  │  │  └─ cart-page (component to display cart view)
   │  │  │     ├─ cart-page.components.css
   │  │  │     ├─ cart-page.components.html
   │  │  │     ├─ cart-page.components.ts
   │  │  │     └─ 
   │  │  ├─ common-component
   │  │  │  ├─ footer (component for app footer)
   │  │  │  └─ myheader (component for app header)
   │  │  └─ main_view-component
   │  │     ├─ main-page (component to display main view)
   │  │     ├─ product-card (component to display a product in shopping offers)
   │  │     └─ product-grid (component to display a products grid in shopping offers)
   │  ├─ models
   │  │  └─ products.ts
   │  └─ services
   │     └─ cart.services.
   ├─ assets
   │  ├─ pictures
   │  └─ products
   │  └─ docs
   ├─ main.ts
   ├─ styles.css
   └─ index.html
```
### Models
```javascript
		Produit : {
			id: number;  //Identifiant unique du produit
			nomProduit: string; //Nom du produit.
			imgUrl: string; //URL de l'image du produit.
			prix: number; //Prix du produit.
			quantite: number; //Quantité du produit sélectionnée par l'utilisateur (pas très optimal de la stocker ici :D).
			maximum: number; //Quantité maximale en stock.
			promotion: number; //Pourcentage de réduction appliqué au produit.
	}

```
### Dépendances
- Angular version 17.2.2
- ngx-toastr version 18.0.0

### Installation
    cd wizishop
    npm install
### Demarrer le serveur
    ng serve
