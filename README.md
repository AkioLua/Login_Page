# Login Page

Une page de connexion moderne et réactive, construite avec des composants d’interface utilisateur avancés et des validations côté client.
Un dashboard simple a également été ajouté après la connexion, pour simuler une navigation authentifiée.

**La page est accessible temporairement via un lien ngrok : https://10377b010d76.ngrok-free.app**

![Screen 1](./screen/screen1.png)
![Screen 2](./screen/screen2.png)

## Fonctionnalités :

- **Connexion via e-mail et mot de passe**
- **Connexion avec Google** (simple redirection vers le site de google partie front)
- **Validation de mot de passe et e-mail** avec une **regex**
- **Case à cocher** obligatoire pour accepter les **conditions d'utilisation**
- **Dashboard** minimaliste accessible après authentification
- Interface construite avec la librairie **[shadcn/ui](https://ui.shadcn.com)**

## Technologies utilisées :

- **React**
- **shadcn/ui** pour les composants d’interface (`Card`, `Input`, `Button`, etc.)
- **Tailwind CSS** pour le style
- **Lucide Icons** pour les icônes

## Pour lancer :

```bash
git clone https://github.com/AkioLua/Login_Page.git
cd Login_Page
npm install
npm run dev
```

go to -> http://localhost:5173/
