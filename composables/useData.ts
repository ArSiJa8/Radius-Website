import type { Player, Rule, TeamMember, Tier } from '~/types'

export const useData = () => {
  const TIER_PTS: Record<string, number> = {
    HT1: 1000, HT2: 850, HT3: 700, HT4: 550, HT5: 400,
    LT1: 280, LT2: 180, LT3: 100, LT4: 50, LT5: 20, '': 0
  };

  const TIER_RANK: Record<string, number> = {
    HT1: 10, HT2: 9, HT3: 8, HT4: 7, HT5: 6,
    LT1: 5, LT2: 4, LT3: 3, LT4: 2, LT5: 1, '': 0
  };

  const RISIKO_MULT = 1.3;

  const players = useState<Player[]>('players', () => [
    { name: 'Manfeedo', sword: 'HT2', uhc: 'HT3', risiko: 'HT2', kingdom: 'ice', status: 'online' },
    { name: 'BNxqz', sword: 'HT3', uhc: 'HT2', risiko: 'HT3', kingdom: 'mushroom', status: 'offline' },
    { name: 'Mrxqz', sword: 'HT4', uhc: 'HT4', risiko: 'HT2', kingdom: 'canyon', status: 'online' },
    { name: 'Maaave', sword: 'LT1', uhc: 'HT3', risiko: 'LT1', kingdom: 'jungle', status: 'offline' },
  ]);

  const rules = useState<Rule[]>('rules', () => [
    { title: 'Fair Play', desc: 'Keine Cheats, Bugs oder unfairen Vorteile. Spiele sauber.', sev: 'sev-ban', sevLabel: 'Ban' },
    { title: 'Respekt', desc: 'Keine Beleidigungen, kein Hate oder toxisches Verhalten.', sev: 'sev-warn', sevLabel: 'Verwarnung' },
    { title: 'Kein Random Kill', desc: 'PvP nur mit RP-Grund. Sinnloses Töten ist verboten.', sev: 'sev-ban', sevLabel: 'Ban' },
    { title: 'Kein Combat-Log', desc: 'Nicht im Kampf disconnecten. Dein Dummy kann dabei sterben.', sev: 'sev-ban', sevLabel: 'Ban' },
    { title: 'Kein Metagaming', desc: 'Keine Infos aus Discord/Streams im Spiel nutzen.', sev: 'sev-ban', sevLabel: 'Ban' },
    { title: 'Teamplay Pflicht', desc: 'Arbeite mit deinem Königreich – kein internes Sabotieren.', sev: 'sev-warn', sevLabel: 'Verwarnung' },
    { title: 'RP Pflicht', desc: 'Handle logisch und immersiv. Bleib im Charakter.', sev: 'sev-warn', sevLabel: 'Verwarnung' },
    { title: 'Keine Exploits', desc: 'Keine verbotenen Items, Glitches oder Exploits.', sev: 'sev-ban', sevLabel: 'Ban' },
  ]);

  const teamMembers = useState<TeamMember[]>('teamMembers', () => [
    { name: 'Manfeedo', role: 'r-owner', roleLabel: 'Owner', desc: 'Server Owner & Leitung' },
    { name: 'Mrxqz', role: 'r-owner', roleLabel: 'Owner', desc: 'Server Owner & Leitung' },
    { name: 'BNxqz', role: 'r-owner', roleLabel: 'Owner', desc: 'Server Owner & Leitung' },
    { name: 'Maaave', role: 'r-owner', roleLabel: 'Owner', desc: 'Server Owner & Leitung' },
    { name: 'Derf_TeZurYT', role: 'r-hmod', roleLabel: 'Head-Mod', desc: 'Leitet das Moderationsteam' },
    { name: 'SyphixO_O', role: 'r-mod', roleLabel: 'Mod', desc: 'Support & Chat-Moderation' },
  ]);

  const calcPts = (p: Player) => {
    return (TIER_PTS[p.sword] || 0) + (TIER_PTS[p.uhc] || 0) + Math.round((TIER_PTS[p.risiko] || 0) * RISIKO_MULT);
  };

  const getTierPoints = (tier: Tier, mult: number = 1) => {
    return Math.round((TIER_PTS[tier] || 0) * mult);
  };

  return {
    players,
    rules,
    teamMembers,
    calcPts,
    getTierPoints,
    TIERS: ['HT1', 'HT2', 'HT3', 'HT4', 'HT5', 'LT1', 'LT2', 'LT3', 'LT4', 'LT5'] as Tier[],
    TIER_RANK,
    RISIKO_MULT,
    KINGDOMS_MAP: {
      ice: '❄ Eis', mushroom: '🍄 Pilz', mountain: '⛰ Berg', canyon: '🏜 Canyon', flower: '🌸 Blumenwiese', jungle: '🌴 Dschungel'
    } as Record<string, string>
  };
};
