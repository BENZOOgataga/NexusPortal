# Nexus Portal — FEATURES

Application web de gestion pour organisations de Star Citizen.
L'interface se présente comme un terminal militaire de l'United Empire of Earth (Nexus Horizon), année ~2954.

---

## Identité citoyenne

Chaque utilisateur possède une identité Nexus Horizon unique générée à la création de son compte. Cette identité se matérialise par une **carte d'identité visuelle** au design militaire, contenant son handle RSI, son organisation, un identifiant citoyen unique, et une double certification cryptographique (autorité Nexus Horizon + signature personnelle). La carte est exportable en SVG haute qualité.

Le profil de chaque citoyen affiche également une biographie libre, une citation personnelle, ses badges obtenus, son score de réputation auprès de l'organisation, et son historique d'activité sur la plateforme.

Les **badges** récompensent l'engagement : profil vérifié RSI mais aussi d'autres, implémentable depuis le menu admin.

---

## Organisation

Une organisation regroupe des joueurs sous une même bannière. Elle a un nom, un tag (identifiant court), une devise, une description, une couleur, et peut accueillir un logo.

Le **roster** liste tous les membres avec leur grade et leur statut. La hiérarchie est personnalisable : le commandant définit ses propres grades (Officier, Pilote, Éclaireur…), leur couleur, et les permissions associées.

Un système de **candidature** permet à l'org de choisir entre recrutement ouvert, candidature avec dossier (motivation, expérience, timezone), ou recrutement fermé. Les officiers examinent les dossiers et votent pour accepter ou refuser.

---

## Escouades

Au sein de organisation, certains membres gradés ont l'autorité de gérer un sous-groupe en totale autonomie : leur **escouade**. C'est une unité opérationnelle imbriquée dans la hiérarchie de l'org — avec ses propres membres, ses propres ressources et sa propre vie interne — mais qui reste en permanence encadrée par les règles fixées par l'échelon supérieur.

Le concept reflète une structure militaire réelle : un général définit les règles d'engagement, un capitaine commande son peloton sans demander la permission pour chaque décision du quotidien.

### Création

Tout membre dont le grade l'y autorise peut fonder une escouade. Il lui donne un nom, un tag court, une couleur et une devise. Il en devient le chef. Une org peut contenir autant d'escouades que nécessaire — par spécialité (combat, mining, trading, exploration), par fuseau horaire, par langue, ou selon toute autre logique interne.

### Ce que le chef d'escouade contrôle

Le chef d'escouade est, dans son périmètre, un commandant à part entière. Il prend ses décisions en autonomie, sans remontée systématique à la hiérarchie supérieure :

**Membres** — il recrute, promeut, rétrograde et exclut les membres de son escouade. Il ne peut attribuer que des grades inférieurs au sien, et uniquement dans la limite des grades que ses supérieurs l'autorisent à distribuer.

**Grades internes** — il définit des sous-grades propres à l'escouade (Sergent, Spécialiste, Rookie…), avec leurs couleurs et leurs permissions. Ces grades n'existent qu'au niveau de l'escouade et n'ont aucun effet sur la hiérarchie globale de l'org.

**Channels** — il crée et gère ses propres channels de communication, invisibles au reste de l'org. Il peut les restreindre à certains sous-grades internes, exactement comme un commandant le ferait pour l'org entière.

**Fleet déléguée** — ses supérieurs peuvent lui déléguer un sous-ensemble de la flotte globale. Il décide alors qui dans son escouade peut accéder à quel vaisseau, avec les mêmes logiques de restriction par grade. Il peut aussi enregistrer des vaisseaux propres à l'escouade.

**Opérations** — il planifie et dirige ses propres opérations, visibles uniquement par ses membres. Il peut choisir de les partager à l'org entière, ou les conserver confidentielles à son unité.

**Rémunération** — il fixe les salaires de ses membres depuis sa trésorerie déléguée, que ce soit par sous-grade (grille fixe) ou individuellement (primes de performance). Il ne peut dépenser que dans l'enveloppe qui lui a été allouée.

### Budget délégué et trésorerie d'escouade

Chaque escouade dispose d'un budget en aUEC alloué par la hiérarchie supérieure — un plafond mensuel ou permanent, défini grade par grade. Le chef d'escouade l'utilise librement pour payer ses membres, couvrir des dépenses opérationnelles ou financer des achats collectifs.

L'échelon supérieur voit en temps réel la consommation du budget de chaque escouade. Si le chef d'escouade a besoin de plus, il soumet une demande d'augmentation de budget, examinée et approuvée (ou refusée) par ses supérieurs depuis le panneau d'administration de l'org.

### Limites imposées par la hiérarchie

La liberté du chef d'escouade est toujours bornée. Ses supérieurs définissent précisément ce qu'il peut et ne peut pas faire — et ces limites sont révisables à tout moment, sans qu'il ait son mot à dire :

- **Plafond budgétaire** — mensuel ou permanent, modifiable à tout moment
- **Effectif maximum** — nombre de membres autorisés dans l'escouade
- **Grades distribuables** — il ne peut pas élever quelqu'un au-delà d'un certain seuil
- **Types d'opérations** — certaines catégories d'ops (offensif, PvP, capital ship) peuvent nécessiter une validation préalable d'un officier supérieur
- **Recrutement** — autonome ou soumis à validation hiérarchique pour chaque nouvelle recrue
- **Accès à la flotte globale** — liste précise des vaisseaux org auxquels l'escouade peut accéder
- **Visibilité externe** — l'escouade peut être visible dans le roster global ou totalement confidentielle

### Visibilité ascendante

La hiérarchie voit tout, toujours. Un officier peut consulter à tout moment les membres, les opérations, les channels, les dépenses et l'activité de n'importe quelle escouade sous sa responsabilité — même si les membres ordinaires de l'org n'ont aucune visibilité dessus. L'audit trail de l'escouade remonte intégralement dans l'audit trail global de l'org.

---

## Permissions

Le système de permissions est la colonne vertébrale de toute la plateforme. Il s'applique à chaque ressource : channels, vaisseaux, opérations, intel, trésorerie. Tout ce qui existe dans l'org peut être restreint à un ou plusieurs grades.

### Grades et rôles

Le commandant crée les grades de son org et décide librement de ce que chaque grade peut faire. Les permissions couvrent toutes les actions sensibles : inviter des membres, changer les grades, créer des opérations, accéder à la trésorerie, publier des annonces, etc.

Un grade peut être marqué comme "grade par défaut" : c'est celui automatiquement attribué à tout nouveau membre.

La même logique s'applique à l'intérieur des escouades : un chef d'escouade crée ses propres sous-grades, définit leurs permissions dans son périmètre, et ne peut déléguer que ce que ses propres supérieurs lui ont accordé. Personne ne peut distribuer plus d'autorité qu'il n'en possède lui-même.

### Accès aux channels

Chaque channel peut être restreint à certains grades. Un channel "Intel Officiers" n'est visible que par les Officiers+. Un channel "Commandement" n'existe même pas dans la liste pour un simple Recrue. L'accès peut être configuré séparément en lecture et en écriture — utile pour les channels d'annonces où tout le monde lit mais seuls les officiers écrivent.

### Accès aux vaisseaux

Chaque vaisseau du registre fleet peut être restreint à certains grades. Un capital ship peut n'être accessible qu'aux Officiers. Un vaisseau de scouting peut être réservé aux membres du grade "Éclaireur". Un membre sans le grade requis ne voit pas le vaisseau dans la liste, ne peut pas demander à l'emprunter, et ne peut pas être affecté dessus lors d'une opération.

### Accès aux opérations

Une opération peut être visible par tous les membres ou restreinte à certains grades. Une op classifiée "Commandement" n'apparaît pas dans la liste d'un Recrue. Les rôles disponibles au sein d'une op peuvent eux aussi être restreints — réserver le rôle "Command Ship" aux Officiers, par exemple.

### Accès à l'intel

Les channels et les reports intel suivent le même système. Le commandant peut créer plusieurs niveaux d'accès intel (opérationnel, stratégique, confidentiel) accessibles chacun à des grades différents.

---

## Administration

Chaque organisation dispose d'un **panneau d'administration** accessible uniquement aux admin et aux membres avec les permissions adéquates. Il centralise tout ce qui relève de la gestion interne.

**Paramètres généraux** — modifier le nom, la devise, la description, la couleur, le logo de l'org. Définir le mode de recrutement (ouvert, candidature, fermé).

**Gestion des grades** — créer, modifier, supprimer des grades. Définir les permissions de chaque grade. Réordonner la hiérarchie. Choisir le grade par défaut. Configurer pour chaque grade les droits de commandement d'escouade et les limites associées (budget max, effectif, grades distribuables, types d'ops autorisées).

**Gestion des membres** — voir la liste complète, modifier le grade d'un membre, exclure un membre, consulter son historique d'activité au sein de l'org.

**Gestion des channels** — créer, renommer, supprimer des channels. Définir les restrictions d'accès (lecture / écriture) par grade pour chaque channel.

**Gestion de la fleet** — restreindre l'accès à des vaisseaux par grade. Valider ou refuser des demandes de prêt. Consulter l'historique d'utilisation de chaque vaisseau.

**Trésorerie** — valider les dépenses soumises au vote. Consulter l'historique complet des transactions. Définir qui a accès à la trésorerie.

**Candidatures** — examiner les dossiers en attente, les approuver ou les refuser, ajouter une note interne.

**Audit trail** — journal immuable de toutes les actions sensibles réalisées dans l'org : qui a fait quoi, quand. Non modifiable, visible uniquement par le commandant.

**Alliances** — gérer les demandes d'alliance entrantes et sortantes. Configurer ce qui est partagé avec chaque org alliée (channels, blacklist, intel).

**Gestion des escouades** — vue d'ensemble de toutes les escouades actives : effectifs, budget consommé vs alloué, activité récente. Modifier les limites d'une escouade à tout moment. Dissoudre une escouade (ses membres restent dans l'org avec leur grade global).

**Zone de danger** — transférer le commandement à un autre membre. Dissoudre l'organisation (confirmation en deux étapes requise).

---

## Communications

La section communications est organisée en **channels** au sein de l'organisation. Il existe plusieurs types : channels texte standard, channels annonces (écriture réservée aux officiers), channels intel (accès restreint), et channels éphémères (se suppriment automatiquement après une durée définie).

Les membres peuvent **mentionner** un collègue (`@handle`) ou un grade entier, déclenchant une notification. Les messages peuvent recevoir des **réactions** (pictogrammes symboliques SVG au style RSI/Nexus Horizon — jamais d'emojis standard), être **épinglés** dans le channel, ou faire l'objet d'un **thread** (discussion dans un fil séparé).

Des **messages directs** permettent des conversations privées entre deux membres de la même organisation.

Les membres affichent un **statut** visible par tous : En ligne, En vol, En combat, AFK, Hors ligne, ou un texte libre custom ("Mining near Lyria").

Une fonctionnalité de **recherche** permet de retrouver un message dans l'historique d'un channel, avec filtres par auteur et date.

---

## Centre opérationnel

Les officiers planifient des **opérations** avec un nom, un objectif, une date et heure (en Stanton Time), des notes tactiques, et un briefing décomposé en phases (Approche, Engagement, Extraction…).

Chaque opération propose des **rôles avec slots** (ex : 2× Fighter, 1× Med) sur lesquels les membres s'inscrivent. Le commandant voit en temps réel qui est inscrit sur quel rôle.

Un **compte à rebours** visible sur toutes les ops planifiées indique le temps restant jusqu'au départ. Quand T-0 arrive, les membres inscrits reçoivent une notification.

Une **carte tactique** permet de positionner des marqueurs sur le système Stanton ou Pyro : points de rendez-vous, objectifs, zones dangereuses, caches. Elle est partagée entre tous les membres de l'op.

Le commandant peut soumettre le plan au **vote d'approbation** avant lancement : les membres inscrits approuvent ou refusent, avec un seuil configurable.

Après l'opération, un **debriefing** documente le résultat, les pertes, le butin et les notes tactiques. Ces données alimentent les statistiques de l'org.

Des **templates** permettent de sauvegarder et réutiliser des configurations d'opérations fréquentes (Escorte, Strike, Exploration, Mining, Boarding…).

---

## Fleet Registry

Chaque organisation maintient un **registre de sa flotte**. Chaque vaisseau est enregistré avec son modèle, son callsign (ex : NOVA-03), son propriétaire, son rôle opérationnel, et son statut (Disponible, En service, En réparation).

Les membres peuvent mettre à jour la **disponibilité immédiate** de leur vaisseau en temps réel (disponible pour les 4 prochaines heures, par exemple).

Un système de **prêt** permet à un membre de demander à emprunter le vaisseau d'un collègue. Le propriétaire reçoit la demande et l'accepte ou la refuse. Le statut du vaisseau est mis à jour automatiquement pendant la durée du prêt.

Les vaisseaux peuvent être **affectés à une opération**, ce qui met à jour leur statut en conséquence.

Chaque vaisseau possède une **fiche technique** optionnelle : configuration d'armement, boucliers, moteurs, score DPS estimé, et historique d'utilisation.

Un **tableau de bord fleet** synthétise la puissance totale de la flotte, la répartition par rôle, et le taux de disponibilité.

---

## Contrats

Les membres peuvent établir des **contrats formels** signés cryptographiquement par les deux parties. Plusieurs types existent : partage de butin, accord d'escorte, prêt de vaisseau formalisé, contrat de mercenariat entre orgs, ou pacte de non-agression.

Chaque contrat est lisible en clair, signé par les deux citoyens, et doté d'un hash d'intégrité vérifiable. Son statut évolue : Brouillon → En attente de signature → Actif → Expiré ou Rompu.

---

## Intelligence terrain

L'**Intel Board** centralise les reports terrain des membres en temps réel : détection d'hostiles, zone confirmée sûre, ressources repérées, route bloquée. Chaque report expire automatiquement après un délai configurable. Les membres peuvent confirmer un report pour indiquer qu'ils ont vérifié l'information.

La **carte des systèmes** (Stanton et Pyro) permet des annotations collaboratives permanentes : notes sur des lieux, zones de ressources connues, points d'intérêt. Elle se superpose avec les markers tactiques des opérations actives et les reports intel en cours.

---

## Économie

La **trésorerie** de l'organisation est un wallet commun en aUEC (monnaie in-game, déclaratif). Les membres y enregistrent contributions et dépenses. Les dépenses importantes sont soumises à un vote des officiers avant validation. Un historique complet des transactions est accessible.

La **marketplace interne** permet aux membres d'échanger entre eux des items in-game via des annonces (vente, achat, troc) par catégorie.

---

## Analytics

Le **dashboard analytique** présente les métriques opérationnelles clés de l'org : membres actifs cette semaine, taux de succès des opérations, membres les plus engagés, channel le plus actif, vaisseau le plus déployé. Un graphe montre l'activité des 30 derniers jours.

Le **rapport de mérite opérationnel** évalue les membres selon des indicateurs formels : participation aux opérations, activité en communication, contrats honorés. Ce rapport est généré périodiquement et consultable par le commandement. Il ne constitue pas un classement public — c'est un outil de pilotage interne à l'usage des officiers.

L'**indice de fiabilité** est une évaluation formelle par membre, calculée à partir de sa présence aux opérations, du respect de ses engagements contractuels, et de son ancienneté au sein de l'organisation. Il est visible sur le profil et dans le roster. Il est structuré en niveaux d'accréditation opérationnelle : Recrue → Agent → Opérateur → Vétéran → Commandeur.

---

## Sécurité

Un **audit trail** immuable logue toutes les actions sensibles de l'org (exclusions, changements de rôle, accès trésorerie, contrats). Accessible uniquement au commandant.

Une **blacklist inter-orgs** permet aux commandants de signaler des griefers. Les signalements sont partagés entre orgs alliées. Un handle avec plusieurs signalements indépendants est automatiquement bloqué à l'entrée de l'org.

---

## Expérience

**Boot sequence** — au démarrage, un terminal s'anime ligne par ligne (initialisation du système Nexus Horizon) avant d'afficher l'interface.

**Stanton Time** — horloge Nexus Horizon permanente dans l'interface, synchronisée sur l'heure réelle.

**Statut en ligne** — présence des membres visible partout dans l'interface.

**Notifications** — badges sur les icônes de navigation pour les événements non lus (messages, mentions, ops, candidatures). Panel de notifications récentes accessible depuis la topbar.

**Mode compact in-game** — vue réduite conçue pour être utilisée en fenêtre flottante pendant une session Star Citizen : op active en cours, derniers messages, intel récent.

**Raccourcis clavier** — navigation rapide entre les sections, envoi de messages, ouverture de la recherche.

**Onboarding** — guide interactif en 4 étapes pour les nouveaux membres (découverte de la carte d'identité, rejoindre une org, envoyer un message, créer une op).
