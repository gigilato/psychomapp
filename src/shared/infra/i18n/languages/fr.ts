export const fr = {
  translation: {
    common: {
      appName: "Psychom'App",
      signIn: 'Se connecter',
      signOut: 'Déconnexion',
      continue: 'Continuer',
      validate: 'Valider',
      cancel: 'Annuler',
    },
    signIn: {
      forgotPassword: 'Mot de passe oublié ?',
      invalidEmail: 'Veuillez renseigner un email valide.',
      wrongCredentials: 'Connexion impossible, vérifiez vos identifiants.',
      resetPassword: 'Un email de réinitialisation vous a été envoyé.',
    },
    profile: {
      jobs: {
        psychomotor_male: 'psychomotricien',
        psychomotor_female: 'psychomotricienne',
      },
    },
    navigation: {
      calendar: 'Agenda',
      settings: 'Menu',
      patients: 'Patients',
      patientsTitle: 'Mes Patients',
      createPatientTitle: 'Nouveau patient',
      update: 'Mise à jour',
    },
    settings: {
      updatePassword: 'Changer le mot de passe',
      cgu: "Conditions générales d'utilisation",
      tests: 'Mon classeur de tests',
      equipment: 'Mon matériel',
      objectives: 'Mes objectifs',
      billing: 'Ma facturation',
    },
    forms: {
      email: {
        label: 'Email',
        placeholder: 'Entrez votre email',
        validator: 'Email incorrect',
      },
      password: {
        label: 'Mot de passe',
        placeholder: 'Entrez votre mot de passe',
      },
      firstname: {
        label: 'Prénom',
        placeholder: 'Entrez le prénom',
      },
      lastname: {
        label: 'Nom',
        placeholder: 'Entrez le nom de famille',
      },
      birthdate: {
        label: 'Date de naissance',
        placeholder: 'Entrez la date de naissance',
      },
      common: {
        required: 'Requis',
        chooseDate: 'Choisir une date',
      },
    },
    errors: {
      default: "Une erreur s'est produite",
      empty: 'Aucun résultat',
    },
    patient: {
      age_one: '{{count}} an',
      age_other: '{{count}} ans',
      delete: 'Supprimer le patient',
    },
  },
} as const
