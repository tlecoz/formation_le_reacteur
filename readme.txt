//mise en prod : 

1. Utiliser github 

  Dans VSCoder : 
  git init  => configure le projet pour git  

  creer un fichier .gitignore contenant : 
  
  node_module 
  Nom_Autre_Repertoire_A_La_Ligne

  pour ignorer le répertoire node_module ou d'autre chemin par github



2. adapter le code de config des api externe et mettre les clés ailleurs 
  => on utilise des variables d'environnement 

  npm install detenv

  on créé un fichier .env dans lequel on va décrire nos variables (en majuscule avec underscore) 

  CLOUD_NAME=XXXXXXX
  API_KEY=XXXXXX 
  API_SECRET=XXXXXX 

  et remplacer dans le code les valeurs correspondant par 
  process.env.CLOUD_NAME,
  process.env.API_KEY;
  process.env.API_SECRET

ATTENTION : Ne pas oublier d'ajouter le chemin du fichier .env a .gitignore
            Ne pas oublier d'ajouter le package dans index.js : require("detenv");
 

3. on va sur le site github  et on créé un nouveau repository 

https://github.com/tlecoz/formation_le_reacteur.git

dans le terminal : 
git init 
git add .  //pour ajouter tout les fichiers modifié 
git commit -m "first commit"  
git branch -M main  //renomme branche master en branche main 
git remote add origin git:github.com:[URL_GITHUB_SANS_CROCHET] 
git push -u origin main 

4. heroku (hebergement web)
   .ajouter script start dans package.json  
     => node index.js 

   .changer le port de app.listen et mettre process.env.PORT en valeur (en ajoutant cette variable dans .env)  
    => ca marchera en local mais heroku s'appuiera sur cette valeur avec son port  

   .creer un compte sur le site de mongodb pour y créer une bdd online 
    => recuperer l'url de la bdd online
       => ajouter cette url dans le .env puis utiliser sa valeur au niveau de mongo.connect 

   .envoyer les info du .env a heroku dans settigs/config vars 

   . dans le projet vscode 
        npm install cors 

        app.use( require("cors") );

   . attention au probleme de token créé en local VS token crée sur la base online quand on test avec postman

