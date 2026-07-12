# Archive — fichiers historiques

Ces fichiers étaient présents à la racine du dépôt sans être reliés à aucun
build actif (pas de `package.json` racine, pas de point d'entrée les
important). Ils ont été déplacés ici plutôt que supprimés, pour que rien ne
soit perdu :

- `App.tsx`, `Globe3D.tsx`, `AutoTheme.js` — ancienne version de l'app à la
  racine (`src/`), remplacée par l'app fonctionnelle dans `app-desktop/`.
- `app-desktop_src_App_Version4.tsx` — brouillon d'`App.tsx` important des
  composants (`Home`, `VoiceCommand`, `MapDisaster`, `CommunityAlert`,
  `OfflineStatus`) qui n'existent nulle part dans le dépôt. À reprendre si
  ces fonctionnalités doivent être développées.
- `MapComponent.jsx` — composant carte Leaflet non utilisé, dépendance
  `react-leaflet` absente du `package.json`.
- `fetchEarthquakes.js` — utilitaire de récupération de séismes via l'API
  USGS, non branché à un composant.
- `files.zip` — archive d'une version antérieure du projet basée sur Vite
  (`app.py`, `src/main.jsx`, `src/App.jsx`...), en doublon avec la structure
  actuelle. Conservée pour référence historique seulement (retirée du suivi
  Git par le nouveau .gitignore).

Si l'une de ces fonctionnalités (carte Leaflet, flux séismes USGS, commande
vocale, mode communautaire) doit être réintégrée, il faudra la reconstruire
proprement dans `app-desktop/src/components/` avec ses dépendances déclarées.
