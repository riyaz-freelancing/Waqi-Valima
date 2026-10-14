/**
 * ==============================================================================
 * ROYAL ISLAMIC WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * Single source of truth for all wedding details, texts, timings, venues,
 * links, imagery, and theme palettes. Customize this file to reuse for other clients.
 */

export const INVITATION_CONFIG = {
  // SEO & Headings
  meta: {
    title: "Valima Ceremony | Mohammed Waqiullah Khan & Syeda Sara Fatima",
    ogTitle: "Wedding Invitation | Waqiullah & Sara",
    ogDescription: "In the name of ALLAH the most beneficent & merciful. Solicit your gracious presence on the auspicious occasion of the Valima Ceremony. 23 & 25 Oct 2026, Hyderabad.",
    themeColor: "#0A1128",
    url: typeof window !== 'undefined' ? window.location.href : "https://waqiullah-sara.wedding",
  },

  // Color Palette Tokens
  palette: {
    emerald: "#0B3D2E",
    emeraldDeep: "#06231A",
    navy: "#0A1128",
    navyDeep: "#040813",
    gold: "#D4AF37",
    goldLight: "#F5E6A8",
    goldDark: "#997A25",
    ivory: "#FFF8E7",
    ivoryMuted: "#C9BEA4",
  },

  // Bismillah & Quranic Verse
  bismillah: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    english: "In the name of ALLAH the most beneficent & merciful",
  },

  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    shortArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    english: "“And We created you in pairs.”",
    surah: "Surah An-Naba · 78:8",
  },

  propheticDua: {
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration: "Barakallahu laka wa baraka alayka wa jama'a baynakuma fi khayr",
    translation: "“May Allah bless you, shower His blessings upon you, and unite you both in goodness and peace.”",
    source: "Sunan Abi Dawud",
  },

  // Couple Details
  groom: {
    fullName: "Mohammed Waqiullah Khan",
    shortName: "Waqiullah",
    degrees: "B.Com., M.B.A.",
    title: "Groom",
    // Replace with groom's photo path when available (e.g. "/photos/groom.jpg")
    photo: null,
    avatarBadge: "W",
  },

  bride: {
    fullName: "Syeda Sara Fatima",
    shortName: "Sara",
    degrees: "M.A., B.Ed.",
    title: "Bride",
    lineage: "D/O LATE HZ. ALHAJ SYED AHMED ALI SHAH DHOTI (Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.)",
    // Replace with bride's photo path when available (e.g. "/photos/bride.jpg")
    photo: null,
    avatarBadge: "S",
  },

  // Respected Elders & Hosts
  honors: {
    blessings: {
      title: "With the Blessings of Our Respected Parents",
      names: "Mrs. & Mr. Late MOHAMMED ANWAR KHAN",
      distinction: "Well Known Khalifa Hakeem Shahji Biyabani (Rh.)",
    },
    guardianship: {
      title: "Under the Guardianship of",
      name: "MR. ALHAJ SYED SHUJAUDDIN HUSSAINI (SHAMEEM)",
    },
    host: {
      salutation: "Mrs. & Mr.",
      name: "Alhaj Mohammed Samiullah Khan (Jawaid)",
      title: "(Khalifa Hz. Hameeduddin Sharfi Quadri Rh.)",
      invitationPhrase: "Solicit your gracious presence on the auspicious occasion of the Valima Ceremony of our son",
    },
    compliments: "With best compliments from: Near & Dear",
  },

  // Events & Venues
  events: [
    {
      id: "nikah",
      type: "Nikah",
      title: "Nikah Ceremony",
      inShaAllah: "In Sha Allah",
      day: "Friday",
      dateFormatted: "23rd Oct. 2026",
      hijriDate: "(12th Jamadi ul Awwal 1448 H)",
      timing: "NIKAH: After Juma · Namaz-e-Juma 1:30 pm",
      venueName: "MASJID-E-QUTUB SHAHI (Choti Masjid)",
      locationShort: "Murad Nagar, Hyd.",
      fullAddress: "Masjid-e-Qutub Shahi (Choti Masjid), Murad Nagar, Hyd.",
      mapsUrl: "https://maps.google.com/?q=Masjid-E-Qutub+Shahi+Murad+Nagar+Hyderabad",
      // ISO timestamp for countdown
      isoDateTime: "2026-10-23T13:30:00+05:30",
      calendar: {
        title: "Nikah: Mohammed Waqiullah Khan & Syeda Sara Fatima",
        description: "Nikah Ceremony after Juma at Masjid-e-Qutub Shahi (Choti Masjid), Murad Nagar, Hyd. Namaz-e-Juma 1:30 pm.",
        location: "Masjid-e-Qutub Shahi, Murad Nagar, Hyd.",
        startDate: "20261023T080000Z", // 1:30 PM IST in UTC
        endDate: "20261023T110000Z",
      },
    },
    {
      id: "valima",
      type: "Valima",
      title: "Valima Ceremony",
      inShaAllah: "In Sha Allah",
      day: "Sunday",
      dateFormatted: "the 25th of October 2026",
      hijriDate: "(14th Jamadi ul Awwal 1448 Hijri)",
      timing: "DINNER: After Namaz-e-Isha (8:30 pm)",
      venueName: "PERFECT PALACE",
      locationShort: "Pillar No. 89, Attapur Road, Ring Road, Hyderabad.",
      fullAddress: "Perfect Palace, Pillar No. 89, Attapur Road, Ring Road, Hyderabad.",
      mapsUrl: "https://maps.google.com/?q=Perfect+Palace+Pillar+89+Attapur+Road+Hyderabad",
      isoDateTime: "2026-10-25T20:30:00+05:30",
      calendar: {
        title: "Valima: Mohammed Waqiullah Khan & Syeda Sara Fatima",
        description: "Valima Dinner after Namaz-e-Isha (8:30 pm) at Perfect Palace, Pillar No. 89, Attapur Road, Ring Road, Hyderabad.",
        location: "Perfect Palace, Pillar No. 89, Attapur Road, Hyderabad.",
        startDate: "20261025T150000Z", // 8:30 PM IST in UTC
        endDate: "20261025T183000Z",
      },
    },
  ],

  // Music & Audio (Disabled)
  audio: {
    enabled: false,
    localSrc: null,
    youtubeId: null,
  },

  // WhatsApp & Sharing Config
  whatsapp: {
    // Phone number for RSVP (international format without + or spaces)
    rsvpNumber: "919849012345", // Replace with client's actual WhatsApp number
    rsvpTemplate: (name, guests, status) => 
      encodeURIComponent(
        `Assalamu Alaikum!\n\n` +
        `This is *${name}*.\n` +
        `RSVP for Valima Ceremony of Waqiullah & Sara:\n` +
        `• Attending: *${status ? "Yes, In Sha Allah" : "Unable to attend"}*\n` +
        `• Number of Guests: *${guests}*\n\n` +
        `Barakallahu feekum!`
      ),
    shareMessage: () =>
      encodeURIComponent(
        `*Wedding Invitation*\n\n` +
        `In the name of ALLAH the most beneficent & merciful\n\n` +
        `Solicit your gracious presence on the auspicious occasion of the Valima Ceremony of our son:\n` +
        `*Mohammed Waqiullah Khan* (B.Com., M.B.A.)\n` +
        `with\n` +
        `*Syeda Sara Fatima* (M.A., B.Ed.)\n` +
        `D/O. LATE HZ. ALHAJ SYED AHMED ALI SHAH DHOTI\n\n` +
        `📅 *Nikah:* Friday, 23rd Oct. 2026 (12th Jamadi ul Awwal 1448 H)\n` +
        `📍 Masjid-e-Qutub Shahi (Choti Masjid), Murad Nagar, Hyd.\n` +
        `⏰ NIKAH: After Juma (Namaz-e-Juma 1:30 pm)\n\n` +
        `📅 *Valima:* Sunday, the 25th of October 2026 (14th Jamadi ul Awwal 1448 Hijri)\n` +
        `📍 Perfect Palace, Pillar No. 89, Attapur Road, Ring Road, Hyderabad.\n` +
        `⏰ DINNER: After Namaz-e-Isha (8:30 pm)\n\n` +
        `With best compliment From: Near & Dear\n\n` +
        `View the wedding invitation here:\n` +
        `${typeof window !== 'undefined' ? window.location.href : 'https://waqiullah-sara.wedding'}`
      ),
  },

  // Navigation Scenes for Dots & Camera Journey
  scenes: [
    { id: "hero", label: "Hero", shortLabel: "Intro", subtitle: "Bismillah" },
    { id: "title", label: "Valima Ceremony", shortLabel: "Valima", subtitle: "Celebration" },
    { id: "families", label: "Respected Elders", shortLabel: "Elders", subtitle: "Blessings" },
    { id: "couple", label: "The Couple", shortLabel: "Couple", subtitle: "Waqiullah & Sara" },
    { id: "events", label: "Auspicious Events", shortLabel: "Events", subtitle: "Nikah & Valima" },
    { id: "countdown", label: "Countdown", shortLabel: "Timer", subtitle: "Precious Moments" },
    { id: "venue", label: "Grand Venue", shortLabel: "Venue", subtitle: "Perfect Palace" },
    { id: "dua", label: "Blessings", shortLabel: "Blessings", subtitle: "Card Invocation" },
    { id: "finale", label: "Compliments & Wishes", shortLabel: "Wishes", subtitle: "Celebration" },
  ],
};

/**
 * Generates an iCalendar (.ics) download for a given event
 */
export function downloadIcsFile(event) {
  const { title, description, location, startDate, endDate } = event.calendar;
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Waqiullah Sara Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.id}-ceremony-invitation.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Builds Google Calendar web add link
 */
export function getGoogleCalendarUrl(event) {
  const { title, description, location, startDate, endDate } = event.calendar;
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  return `${baseUrl}&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
}
