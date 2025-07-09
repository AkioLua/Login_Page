import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Exemples de data
const data = {
  user: {
    name: "Mehdi R",
    email: "mehdi@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Capgemini",
      logo: GalleryVerticalEnd,
      plan: "Entreprise",
    },
    {
      name: "Capgemini RH.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Capgemini Ind.",
      logo: Command,
      plan: "Industrie",
    },
  ],
  navMain: [
    {
      title: "Données",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Historique",
          url: "#",
        },
        {
          title: "En cours",
          url: "#",
        },
        {
          title: "Paramètres",
          url: "#",
        },
      ],
    },
    {
      title: "Modèles",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Informations",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Commencer",
          url: "#",
        },
        {
          title: "Didacticiel",
          url: "#",
        },
        {
          title: "Mise à jour",
          url: "#",
        },
      ],
    },
    {
      title: "Paramètres",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Général",
          url: "#",
        },
        {
          title: "Équipe",
          url: "#",
        },
        {
          title: "Projet",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Résumé",
      url: "#",
      icon: Frame,
    },
    {
      name: "Consommations",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Les Sites",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
