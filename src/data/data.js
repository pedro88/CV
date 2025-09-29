const data = {
    function : "Développeur FullStack Junior", // Traduction du texte en français
    profil: {
        name : "Pierre",
        lastName : "Sandré",
        nameLogo : "",
        GSM : "0484*******",
        GSMLogo : "",
        email : "sandrep_85@hotmail.com",
        emailLogo :"",
        address : "************, 4960 Malmedy",
        adressLogo : "",
        interest : ["Photographie argentique", "Impression 3D", "Jardinage", "Plongée sous-marine"], // Textes traduits et corrigés
        interestLogo : ["", "", ""],
        language : [
            {language : "Français", level : "5", flag : "./france"}, // Traduction du texte
            {language : "Anglais", level : "4", flag : ""}, // Traduction du texte
            {language : "Espagnol", level : "4", flag : ""}, // Traduction du texte
            {language : "Allemand", level : "1", flag : ""} // Traduction du texte
        ],
        social :[
            {social : "GitHub", qrcode : "./github.png", link : "https://github.com/pedro88" },
            {social : "Linkedin", qrcode : "./linkedin.png", link: "https://linkedin.com/in/pierre-sandre" },
            {social : "Codewars", qrcode : "./codewars.png", link : "https://codewars.com/users/pedro88" }
        ]
    },
    experiences :{
       fr :[
          {
                function : "Stagiaire Web développeur",
                location : "Capsule Corp",
                date : "2025",
                description: "Homie, l'application dévellopée par Capsule Corp est un projet full stack basé sur Typescript, React et Redux avec un backend Express et TypeORM. Durant ce stage j'ai pricipalement travailler sur le portage complet de l'application dans sa version mobile ainsi que sur l'implémentation de Zod pour la validation de données coté backend", // Faute corrigée : "abondonné" → "abandonné"
                competences: ["Autonomie", "Communication d'équipe", "Adaptation"]
            },
            {
                function : "Animateur-Coordinateur",
                location : "Maison de Jeunes de Vielsalm",
                date : "2022-2024",
                description: "Prise en charge de la coordination et d'une partie de l'animation de la maison de jeunes de Vielsalm durant ses 2 premières années d'existence. J'ai abandonné cet emploi dans le but de me réorienter professionnellement.", // Faute corrigée : "abondonné" → "abandonné"
                competences: ["Coordination", "Gestion de conflit", "Gestion de projet"]
            },
            {
                function : "Formateur en techniques du bâtiment", // Texte corrigé
                location : "Régie de quartier de Dison",
                date : "2020-2022",
                description: "Emploi à caractère hautement social, j'étais chargé de la prise en charge d'un groupe de stagiaires adultes afin de leur apprendre les bases des techniques de rénovation et de construction.", // Fautes corrigées : "batiment" → "bâtiment", "stagiare" → "stagiaires"
                competences: ["Coordination", "Gestion de conflit", "Gestion de projet", "Communication client"],
            },
            {
                function : "Animateur-Coordinateur",
                location : "ASBL Les P'tits CRAPAu",
                date : "2018-2020",
                description: "Animation d'ateliers visant l'acquisition d'autonomie dans différents domaines : Travail de l'acier, électronique, apiculture, etc.", // Fautes corrigées : "aquisition" → "acquisition", "atelier" → "ateliers"
                competences: ["Coordination", "Gestion de conflit", "Gestion de projet", "Animation d'atelier"],
            },
            {
                function : "Animateur-Coordinateur Bénévole",
                location : "ASBL Les P'tits CRAPAu",
                date : "2016-Aujourd'hui",
                description: "Animation d'ateliers visant l'acquisition d'autonomie dans différents domaines : Travail de l'acier, électronique, apiculture, etc.", // Fautes corrigées : "aquisition" → "acquisition", "atelier" → "ateliers"
                competences: ["Coordination", "Gestion de conflit", "Gestion de projet", "Animation d'atelier"],
            },
            {
                function : "Employé à la maintenance des bâtiments", // Texte corrigé
                location : "Résidence des Arcades",
                date : "2014-2016",
                description: "Arrivé à ce poste sans réelles compétences dans les métiers du bâtiment, j'ai dû m'adapter et apprendre sur le tas pour répondre aux exigences de la fonction.", // Fautes corrigées : "compértences" → "compétences", "éxigences" → "exigences"
                competences: ["Flexibilité", "Polyvalence", "Auto-formation", "Autonomie"], // Texte corrigé
            }
        ]
    },
    formations :{
        fr : [
            {
                title : "Développeur Junior", // Texte traduit
                location :"BeCode - Liège",
                date : "2024-2025",
                competences : [
                    "JS",
                    "React",
                    "CSS",
                    "PHP",
                    "Laravel",
                    "etc."
                ]
            },
            {
                title : "Cours A et B en agriculture Bio",
                location :"Le Crabe - Jodoigne",
                date : "2012-2013",
                competences : [
                    "Maraîchage", // Faute corrigée : "maraichage" → "maraîchage"
                    "Relation client",
                    "Gestion de projet",
                    "Comptabilité"
                ]
            },
            {
                title : "Formation à l'autonomie alimentaire",
                location :"École Paysanne Indépendante - Bierleux", // Faute corrigée : "Bierleux" → "Bierleux" (pas de faute ici, mais ajout de l'accent sur "École")
                date : "2011-2012",
                competences : [
                    "Maraîchage", // Faute corrigée : "maraichage" → "maraîchage"
                    "Autonomie",
                    "Travail collectif",
                ]
            }
        ]
    },
    competences : {
        fr :[
            {skill : "TS/React" , level : "4", logo: ""},
            {skill : "Node.js/Express" , level : "4", logo: ""},
            {skill : "PHP/Laravel" , level : "2", logo: ""},
            {skill : "CSS/Tailwind" , level : "4", logo: ""},
            {skill : "SQL" , level : "3", logo: ""},
        ]
    },
    projects : {
        fr :[
            {name : "GameOfLife" , description : "Un jeu de la vie développé avec React dans le cadre de ma formation chez BeCode afin d'être utilisé comme support lors d'une présentation", qr: "./GameOfLife.png", link: "https://pierre-react-game-of-life.netlify.app/"}, // Faute corrigée : "utiliser" → "utilisé"
            {name : "ReactCV" , description : "Le CV que vous avez sous les yeux. Développé en React et Tailwind", qr: "./ReactCV.png", link: "https://pierre-react-cv.netlify.app/"},
            {name : "Web3.0" , description : "Un simple mockup d'après un design Figma afin d'appréhender les concepts de design responsive dans le cadre de ma formation chez BeCode", qr: "./Responsive30.png", link: "https://pedro88.github.io/responsive-web-3-0/"}, // Faute corrigée : "concept" → "concepts"
        ]
    }
}

export default data