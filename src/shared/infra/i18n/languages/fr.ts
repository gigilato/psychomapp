export const fr = {
  translation: {
    common: {
      appName: "Psychom'App",
      signIn: 'Se connecter',
      signOut: 'Déconnexion',
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
    },
    settings: {
      updatePassword: 'Changer le mot de passe',
      cgu: "Conditions générales d'utilisation",
      tests: 'Mon classeur de tests',
      equipment: 'Mon matériel',
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
      common: {
        required: 'Requis',
      },
    },
    errors: {
      default: "Une erreur s'est produite",
      empty: 'Aucun résultat',
    },
  },
} as const
