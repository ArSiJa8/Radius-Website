export type Tier = 'HT1' | 'HT2' | 'HT3' | 'HT4' | 'HT5' | 'LT1' | 'LT2' | 'LT3' | 'LT4' | 'LT5' | '';

export interface Player {
  name: string;
  sword: Tier;
  uhc: Tier;
  risiko: Tier;
  kingdom: string;
  status: 'online' | 'offline';
}

export interface Rule {
  title: string;
  desc: string;
  sev: 'sev-ban' | 'sev-warn' | 'sev-mute';
  sevLabel: string;
}

export interface TeamMember {
  name: string;
  role: string;
  roleLabel: string;
  desc: string;
}

export interface Kingdom {
  id: string;
  name: string;
  icon: string;
  desc: string;
  gradient: string;
  hoverColor: string;
}
