---
titel: "Norne lokal — Konzept einer Variante, die vollständig lokal und offline auf dem Handy läuft"
grundlage: "Norne: Ich — Das Projektbuch, Fassung V1.0 (geändert 2026-09-23)"
stand: 2026-09-24
status: Konzept, entschieden im Gespräch mit Christian; kein Teil des Projektbuchs
---

# Norne lokal — Konzept

*Eine Variante von Norne, die vollständig lokal und offline auf dem Handy läuft. Auch alle Aufgaben der künstlichen Intelligenz geschehen auf dem Gerät. Grundlage der Haltung sind die zugelieferten Texte.*

**Kennzeichnung in diesem Dokument:**

- **Fakt** — mit Quelle.
- **Schätzung** — mit Validität von 0 bis 10.
- **Annahme** — mit Begründung.
- **Entschieden** — von Christian im Gespräch am 24.9.2026 festgelegt.

**Stichtag der Fakten:** 24.9.2026.

---

## Inhalt

0. Ausgangslage: was im Projektbuch heute ins Netz geht
1. Die Grundidee
2. Das Sprachmodell auf dem Handy
3. Wie ein Gesprächszug abläuft
4. Woher Norne weiß, was sie sagt
5. Wie die Haltung wächst
6. Dateien, Fotos und Schreiben lesen
7. Die Browser-App: Installation, Ordner, Updates
8. Was entfällt, und was das für den Nutzer heißt
9. Risiken und der Machbarkeitstest
10. Alle Entscheidungen
11. Was sich im Projektbuch ändern müsste
12. Offene Punkte
13. Quellen

---

## 0 · Ausgangslage: was im Projektbuch heute ins Netz geht

Norne ist heute schon weitgehend lokal gebaut. Auf dem Gerät liegen:

- Ablage, Felder, Fristen, Vorhaben, Gedankenraum, Verlauf
- der Stups mit seiner lernenden Wortliste
- die Verschlüsselung

Ins Netz gehen sechs Dinge:

| Weg | Heute | In der lokalen Variante |
| :-- | :-- | :-- |
| **Das Modell** (Anthropic) | jeder Zug | ersetzt durch ein Modell auf dem Gerät — der Kern der Variante |
| **Die Suche** (Serper, dahinter Google) | Recherche im Gespräch | entfällt vorerst (Abschnitt 1a) |
| **Das Lesen, die Umschau** | Artikel vom Server | umgebaut zu einem Leseplatz aus den Texten |
| **Weltvorrat und Zufluss** | Suche des Servers | entfallen (ruhen laut *Die Ausnahmen* ohnehin) |
| **Rückmeldung, Brief, Ideen und Nachrichten** | Datei beim Zugangsserver | Datei in `Ausgang/`, verschickt vom Menschen selbst |
| **Paket, Sprachdatei, Urschriften** | vom Auslieferer | alles im Paket; Updates per Datei oder bei Netz |

Die entscheidende Stelle des Buches:

> *„Ohne die künstliche Intelligenz gibt es Norne nicht."* (Kap. 3)

Eine lokale Variante braucht deshalb ein **Sprachmodell auf dem Gerät**. Ohne Modell wäre Norne nach dem Buch *„nur eine Sammlung gefüllter Felder"*.

---

## 1 · Die Grundidee

### Heute

Norne hat zwei Hälften:

- **Das Handy** hält alles, was dem Menschen gehört. Außerdem wählt es aus, was bei jedem Zug mitgeht (der Stups).
- **Claude bei Anthropic** führt das Gespräch. Jeder Satz geht über das Netz dorthin, und die Antwort kommt zurück.

Dazu kommen der Server für Suche, Umschau und Paket und der Zugangsserver auf dem NAS.

### Lokal

**Die zweite Hälfte zieht auf das Handy.** Ein kleineres Sprachmodell liegt als Datei auf dem Gerät und rechnet dort. Kein Satz verlässt das Handy. Nach der Einrichtung braucht Norne kein Netz mehr.

### Der Grundsatz

Claude bringt ein großes Weltwissen mit. Ein kleines Modell auf dem Handy bringt weniger mit, und was es weiß, ist unzuverlässiger. Daraus folgt:

> **Das Modell liefert die Sprache, nicht das Wissen.**

Was Norne über die Welt oder als Haltung sagt, stammt aus:

- den zugelieferten Texten — von Christian und, nach Abschnitt 5, vom Nutzer;
- dem, was der Mensch gesagt oder eingetragen hat;
- dem generischen Menschen in den Feldern;
- in engen Grenzen dem Allgemeinwissen des Modells, eigens gekennzeichnet (Abschnitt 4).

Alles andere heißt ausdrücklich *Meinung* oder *nicht zu wissen*.

### Warum das zu Norne passt

Das Buch sagt schon heute:

- *„Sie kann nur mit dem antworten, was sie bekommen hat."*
- *„Norne ist als Erda gebaut, nicht als Wotan."*

Die lokale Variante nimmt das wörtlich: Norne weiß weniger, aber was sie sagt, lässt sich auf eine Stelle zurückführen.

### Was gleich bleibt

- Mythos, erster Abend, Ausgang
- Felder, generischer Mensch, Offenes, Vorhaben, Gedankenraum, Verlauf
- der Stups mit der lernenden Wortliste — er läuft schon heute auf dem Gerät
- Ton, Fouls, Grenzen

### 1a · Eine Suche: sinnvoll, aber nicht im Kern

**Warum sinnvoll:**

- Die größte Schwäche des kleinen Modells ist das Weltwissen. Eine Suche schließt diese Lücke.
- Das Buch hat die Mechanik schon fertig:
  - die Erlaubnis mit *fragen · immer · nie*,
  - die Suchfrage ohne Persönliches,
  - die acht geschützten Themenfelder,
  - das Herkunftszeichen *Recherche*,
  - höchstens drei Funde je Suche.
- Eine Suche liefert Weltwissen, keine Haltung. Die Grundidee bleibt unberührt.

**Warum nicht im Kern:**

- Mit einer Suche ist Norne nicht mehr ganz offline, denn die Suchfrage erreicht einen fremden Dienst.
- Wenn überhaupt, dann als eigener Weg nach draußen, der nur mit Netz und nicht bei der Stellung *nie* arbeitet.

**Warum nicht direkt Google:**

- **Fakt:** Google nimmt für die Custom Search JSON API seit 2025 keine neuen Kunden mehr an. Die Suche im ganzen Netz endet dort am 1.1.2027 (Quellen 5, 6).
- **Alternative:** ein Suchdienst wie Serper, mit einem eigenen Schlüssel des Menschen.

**Grenze der Browser-App:**

- Ohne eigenen Server bekommt die App nur die kurzen Auszüge des Suchdienstes, nicht den ganzen Artikel.
- **Fakt:** Browser verbieten einer Seite, fremde Seiten direkt abzurufen, solange diese es nicht ausdrücklich erlauben (CORS).

**Drei Möglichkeiten:**

| | Vorgehen | Offline | Aufwand |
| :-- | :-- | :-- | :-- |
| **A** | Keine Suche. Der Mensch sucht selbst und legt Funde in den Eingang; Norne liest sie als Stoff. | ganz | keiner |
| **B** | Suche über einen Suchdienst, nur Auszüge, zuschaltbar, Erlaubnis zu Beginn auf *fragen*. | fast ganz | gering |
| **C** | wie B, dazu der volle Artikel über das NAS | nein, mit Server | mittel |

**Empfehlung:** Im Machbarkeitstest A, damit sichtbar wird, was das lokale Modell allein kann. Danach B als Ergänzung. C nur, wenn die Auszüge nicht reichen.

---

## 2 · Das Sprachmodell auf dem Handy

### Was ein lokales Modell ist

- **Eine Datei** von mehreren Gigabyte. Sie enthält Milliarden Zahlen (Parameter), das Ergebnis des Trainings durch einen Hersteller.
- **Eine Laufzeit** liest die Datei und rechnet daraus Wort für Wort eine Antwort. Im Browser geschieht das auf dem Grafikchip, über WebGPU.
- **Das Modell lernt nichts dazu.** Wie heute lernt nur die Wortliste des Stups (Kap. 9).

### Größe

- **Claude:** Die Größe veröffentlicht Anthropic nicht. Dass sie ein Vielfaches dessen beträgt, was auf ein Handy passt, ist eine Schätzung (Validität 8/10).
- **Auf dem Handy:** 2 bis 4 Milliarden wirksame Parameter.
- **Quantisierung:** Jede Zahl wird mit 4 statt 16 Bit gespeichert. Das Modell wird etwa viermal kleiner und verliert etwas Qualität.

### Wahl: Gemma 3n von Google

| | Gemma 3n E2B | Gemma 3n E4B |
| :-- | :-- | :-- |
| wirksame Größe | 2 Mrd. | 4 Mrd. |
| Datei | etwa 3 GB (Schätzung, Validität 5/10) | etwa 4–4,5 GB (Schätzung, Validität 5/10) |
| Deutsch, Ton, Regeltreue | offen | besser |
| Tempo | schneller | langsamer |
| Rolle | Rückfall, schwächere Handys | Ziel, wenn das Handy es trägt |

**Gründe:**

1. Für Mobilgeräte gebaut; „E" steht für *effektiv*.
2. Mehrsprachig, trainiert auf über 140 Sprachen (Fakt laut Google).
3. Liest Bilder.
4. Die Browser-Laufzeit von Google, die MediaPipe LLM Inference API für Web, unterstützt Gemma 3n offiziell, mit Bild- und Audio-Eingabe (Fakt, Quelle 1).
5. Ein Kontext von rund 32.000 Token (Fakt laut Google), grob 20.000 Wörter.

**Alternativen, falls Gemma im Test enttäuscht:** Qwen3 (4B, Alibaba) oder Llama 3.2 (3B, Meta). Beide lesen keine Bilder und laufen im Browser über eine andere Laufzeit (WebLLM).

### Ein Modell für alles

Dasselbe Modell erledigt nacheinander, nie gleichzeitig:

- Gespräch
- Thema eines Satzes
- Fristen, Anliegen, Vorhaben, Gedanken erkennen
- Haltung herausarbeiten
- Bilder ansehen
- Briefe schreiben

**Rechnen übernimmt nicht das Modell.** Es stellt die Rechnung auf, der Code rechnet. *Annahme:* Kleine Modelle verrechnen sich; das wird allgemein beobachtet, ist von mir aber nicht gemessen.

### Die KI-Aufgaben des Buches und ihr lokaler Ersatz

| KI-Aufgabe (Fundstelle) | Lokal gelöst durch |
| :-- | :-- |
| Gespräch, Bälle, Leiter, Ton (Kap. 3–4) | lokales Sprachmodell |
| Thema eines Satzes für die Wortliste (Kap. 9) | dasselbe Modell, Feld der Rückgabe |
| Frist, Anliegen, Vorhaben, Gedanke erkennen (Kap. 3, 5) | dasselbe Modell, Feld der Rückgabe |
| Schreiben im Eingang lesen, PDF (Kap. 5) | Text auf dem Gerät gewinnen (Abschnitt 6), das Modell fasst zusammen |
| Foto oder Scan lesen (Kap. 5, 7) | Texterkennung auf dem Gerät, das Modell als zweiter Blick |
| Brief, Lebenslauf, Bescheid erklären (Kap. 3) | lokales Modell; schwächer als heute (Schätzung, Validität 7/10) |
| Nachrechnen | Code, nicht das Modell |
| Ernstes Thema oder geschütztes Themenfeld erkennen (Kap. 10, 11) | Modell **und** Wörterliste; schlägt eines an, gilt es als berührt |
| Gegenprüfung von „ungenutzt" durch ein zweites Modell (Kap. 9) | ein zweites Modell ist zu schwer; stattdessen dasselbe Modell ein zweites Mal ohne Stups, nur auf Knopfdruck in der Testphase |
| Ballvorrat wachsen lassen (Kap. 7) | beim Packen in der Werkstatt, nicht auf dem Handy |
| Haltung aus neuen Texten herausarbeiten (neu) | lokales Modell (Abschnitt 5) |

**Entschieden:** Die KI-Arbeit beim Bauen — Erda herausarbeiten, Packer, Bauanweisungen, Übersetzungen — geschieht weiter in der Werkstatt, mit Claude. „Offline" gilt für den Betrieb auf dem Handy.

### Was das Modell kann und was nicht

**Realistisch** (Schätzung, Validität 6/10):

- verständliches, meist korrektes Deutsch
- kurze Regeln nahe am Satz befolgen — so arbeitet der Stups
- ein erzwungenes Format einhalten
- zusammenfassen, einordnen, nachfragen

**Schwächer als Claude** (Schätzung, Validität 7/10):

- Feinheiten des Tons: Columbo, Reibung, das Anerkennende
- lange Regelwerke im Blick behalten
- Weltwissen
- Grenzen bei ernsten Themen sicher halten

### Tempo und Gerät

- **Laden des Modells beim Start:** 10–40 s (Schätzung, Validität 4/10).
- **Antworten:** 5–20 Token/s (Schätzung, Validität 4/10). Eine Antwort von 100 Wörtern braucht etwa 10–30 s. Die Anzeige läuft Wort für Wort mit.
- **Gerät** (Schätzung, Validität 5/10): Android, etwa 8 GB Arbeitsspeicher, aktuelles Chrome, 5–6 GB freier Speicher.
- **Fakt:** Die MediaPipe-Laufzeit für Web braucht WebGPU; einen Rückfall auf WebAssembly gibt es nicht (Quelle 1).

### Lizenz

- **Fakt:** Gemma steht unter den *Gemma Terms of Use* von Google, nicht unter einer freien Standardlizenz. Private Nutzung und Weitergabe sind erlaubt, mit Nutzungsbeschränkungen.
- **Folge:** Aus *„Wessen Regeln am anderen Ende gelten"* wird *„Wessen Regeln im Modell gelten"*. Im Sprung nennt Norne den Hersteller.

---

## 3 · Wie ein Gesprächszug abläuft

### Der Ablauf in sechs Schritten

**1 · Der Mensch schreibt und schickt ab.**

Er darf abschicken, während Norne noch antwortet. Das Modell kann nicht zwei Dinge gleichzeitig, deshalb geht sein zweiter Satz beim nächsten Zug mit. Das sieht das Buch schon so vor.

**2 · Der Code sucht den Stups aus.**

- Unverändert aus Kap. 9: ohne Modell, in Millisekunden.
- Das Thema des Satzes und höchstens drei weitere Stücke.
- Reihenfolge der Quellen: was der Mensch gesagt hat, dann die zugelieferten Texte. Der Weltvorrat entfällt.

**3 · Der Code baut den Umschlag.**

| Teil | Inhalt | Länge (Schätzung) |
| :-- | :-- | :-- |
| Kern-Systemtext | wer Norne ist, Ton, Fouls, Antwortformat | 1.500–2.000 Token |
| Rahmensatz und Stups | der feste Satz aus Kap. 9, dann bis zu vier Stücke mit Kennung | 300–800 |
| Zusammenhang | offene Fristen und Erinnerungen, Anrede, Name, ein Anlass, höchstens vier abgelegte Sätze | 300–600 |
| Verlauf | das laufende Gespräch, von hinten gekürzt | nach Platz |
| Satz des Menschen | wörtlich | — |

**4 · Das Modell antwortet in festem Format.** Die Rückgabe enthält:

- den Satz
- das Thema
- je Aussage über die Welt: Festigkeit, Herkunft, Kennung des Stücks
- vorgeschlagene Fristen, Anliegen, Vorhaben, Gedanken
- ungenutzte Stups-Stücke

**5 · Der Code prüft die Antwort** (siehe unten).

**6 · Zeigen und ablegen.**

- Der Satz erscheint mit den Nornenzeichen.
- Der Satz des Menschen wird mit Thema, Situation und Zeitpunkt abgelegt.
- Die Wortliste lernt, der Takt zählt mit.

### Was sich gegenüber heute ändert

**1. Der Systemtext wird kurz.**

- Jeder Zug liest ihn neu ein, und ein kleines Modell verliert Regeln in langen Texten eher (Schätzung, Validität 7/10).
- Ob die Laufzeit den eingelesenen Systemtext für den nächsten Zug aufheben kann, ist offen (Annahme, im Test zu prüfen).
- Nach dem Grundsatz des Buches *„Hinlegen ist stärker als verbieten"* steht im Systemtext nur der Kern. Alles andere kommt über den Stups.
- Die Selbstbeschreibung in Stücken bleibt: Norne fordert ein Stück an, die Anwendung ruft ein zweites Mal auf.

**2. Das Format wird erzwungen, nicht erbeten.**

- Die Laufzeit soll nur Zeichenfolgen zulassen, die ins Formular passen.
- *Annahme:* MediaPipe Web kann das; offen, im Test zu prüfen.
- Sonst prüft der Code danach und fragt einmal nach.
- Kommt dann keine passende Form, gilt Kap. 7: Der Satz erscheint ohne Bögen am Rand.

**3. Die Belegpflicht wird im Code geprüft.**

- Jede Aussage mit der Festigkeit *belegt* muss die Kennung eines Stücks tragen, das in diesem Umschlag lag.
- Fehlt die Kennung oder ist sie erfunden, fragt die Anwendung noch einmal nach. So steht es in Kap. 12: *„Der Satz ohne Zeichen kommt nie auf den Bildschirm."*
- Das Modell kann damit keinen Beleg erfinden.
- Grenze 3 — *„Jede Antwort trägt ihre Prüfung"* — wird eine Prüfung im Code.

**4. Fristen bleiben Vorschlag,** bis der Mensch sie bestätigt. Lokal wichtiger als bisher, denn ein kleines Modell liest Daten eher falsch (Schätzung, Validität 6/10).

### Beispiel

> **Mensch:** *„Mein Ausweis läuft im November ab und ich ziehe im Herbst um."*

1. **Stups:** Thema *Verwaltung*. Ein Stück über Ausweise aus dem Bereichstext zu Recht und Verwaltung, eines über den Umzug, eines aus Erda, Feld 6 *Herkunft und Ort*.
2. **Rückgabe (vereinfacht):**
   - *Satz:* „Zwei Dinge, die zusammenfallen können. Wenn du im Herbst umziehst, gilt der neue Ausweis schon mit der neuen Adresse — willst du ihn nach dem Umzug beantragen? Und soll ich mir den November als Frist merken?"
   - *Thema:* Verwaltung.
   - *Aussage:* belegt, Herkunft *aus den Texten*, mit Kennung.
   - *Vorgeschlagene Frist:* November.
   - *Ungenutzt:* das Erda-Stück.
3. **Prüfung:** Die Kennung liegt im Umschlag, also gilt die Aussage. Die Frist wartet auf das Ja des Menschen.
4. **Lernen:** „Ausweis" und „umziehe" wiegen für *Verwaltung* etwas mehr.

Stünde im Bereichstext nichts über Ausweise, dürfte die Aussage nicht als *belegt* erscheinen.

### Dauer eines Zugs (Schätzung, Validität 4/10)

| Abschnitt | Zeit |
| :-- | :-- |
| Stups und Umschlag | unter 0,1 s |
| Umschlag einlesen | 2–10 s |
| Antwort schreiben (~100 Wörter und Felder) | 10–30 s |
| Prüfung und Ablage | unter 0,1 s |

---

## 4 · Woher Norne weiß, was sie sagt

### Die Quellen und ihre Zeichen

| Quelle | Was sie ist | Herkunftszeichen | Festigkeit höchstens |
| :-- | :-- | :-- | :-- |
| was der Mensch sagt oder einträgt | Sätze, Felder, Fristen, Unterlagen | *vom Menschen selbst* | wie gesagt, ohne Prüfung |
| die Haltung (Erda) | aus den Haltungstexten von Christian und vom Nutzer | *Erda* | Position oder Nornes Meinung, **nie belegt** |
| die Sachtexte | Bereichstexte, Ballvorrat, Sammlung, Feiertage | *aus den Texten* | belegt, wenn der Text eine Quelle nennt, sonst Position |
| der generische Mensch | der Satz im unbeschriebenen Feld | *vom generischen Menschen* | nichts; eine Herkunft ist kein Beleg (Kap. 12) |
| **Allgemeinwissen des Modells** (**entschieden**) | was ein guter Bekannter ohne Nachschlagen weiß | *Allgemeinwissen* (neu) | *überliefert* |

- **Entfallen:** *eine Recherche* — kommt zurück, falls die Suche (Variante B) dazukommt — und *was ihr zufällt*.
- **Die Umschau als Leseplatz** trägt *aus den Texten*.
- **Unverändert:** Herkunftszeichen haben keinen Rang.

### Allgemeinwissen (entschieden)

- Das Modell darf Allgemeines sagen, gekennzeichnet mit dem neuen Zeichen *Allgemeinwissen* und höchstens der Festigkeit *überliefert*.
- **Nie aus eigenem Wissen:** Zahlen, Daten, Fristen, Beträge, Namen von Stellen, Recht, Gesundheit, Medikamente. Diese bleiben den Texten vorbehalten, nach Foul 4.
- **Prüfung im Code:** Enthält ein Satz mit *Allgemeinwissen* eine Ziffer, ein Datum oder einen Betrag, fragt die Anwendung nach.
- **Folge für das Buch:** ein siebtes Herkunftszeichen, gezeichnet nach den Regeln aus *Der Mythos*.

### Was bei Widerspruch gilt

- **Über sein Leben** geht vor, was der Mensch sagt.
- **Über die Welt** geht der Beleg vor. Eine Haltung steht nie gegen einen Beleg.
- **Zwei Texte, die sich widersprechen,** sind *gewollte Reibung*; beide Sichtweisen bleiben.
- **Widerspricht der Mensch einer Aussage über die Welt,** gelten die vier Fälle aus Kap. 12: umstritten · entschieden · nicht entscheidbar · eine Haltung. Nachsehen kann Norne nicht mehr; liegt nichts vor, sagt sie das.

### Beispiele

| Mensch sagt | Norne antwortet | Zeichen |
| :-- | :-- | :-- |
| „Wie lange gilt ein deutscher Personalausweis?" | aus dem Bereichstext, wenn er es enthält | *aus den Texten* · belegt |
| dasselbe, ohne Stelle im Text | „Das steht nicht in dem, was ich habe. Das Bürgeramt weiß es sicher." | *nicht zu wissen* |
| „Ich finde, man muss immer erreichbar sein." | aus Erda, als Frage: „Ich sehe das anders — wer hält dich, wenn du für alle da bist?" | *Erda* · Nornes Meinung |
| „Was muss ich beim Toaster beachten?" | „Ab und zu ausklopfen, die Krümel sind das Übliche." | *Allgemeinwissen* · überliefert |
| „Wie viel Ibuprofen darf ich nehmen?" | keine Zahl; Beipackzettel, Apotheke, Ärztin | Foul 3 |

### Was gleich bleibt

- Die Belegpflicht gilt nur, wenn Norne über die Welt spricht. Über sein Leben redet sie ohne Quelle.
- Keine Geheimnisse: Auf Frage nennt Norne Text und Stelle.
- Ein Klick auf das Zeichen erklärt in ganzen Sätzen, woher etwas stammt.

---

## 5 · Wie die Haltung wächst

### Ausgangslage

- **Am ersten Tag** kommt die Haltung aus Christians Texten, fertig im Paket: *Wer ich bin*, die sechs Felder, die Urschriften.
- **Entschieden:** Danach ergänzt oder ändert jeder weitere zugelieferte Text die Haltung, gleich ob er von Christian oder vom Nutzer kommt.
- Das entspricht dem Mythos-Kapitel: *„Es wächst mit dem, was der Mensch sagt und hineinlegt … was er selbst gesagt hat, geht vor."* und *„Das bin ich, und es wird du."*

### Zwei Wege

| Von wem | Wie | Wer arbeitet heraus |
| :-- | :-- | :-- |
| Christian | neues Paket | die Werkstatt, wie heute |
| Nutzer | Datei im Ordner `Haltung/` oder im Gespräch: „das ist meine Haltung" | das Modell auf dem Handy |

### Der eigene Ordner `Haltung/` (entschieden)

- **Eingang** bleibt für Unterlagen. Sie sind Stoff, nie Haltung.
- Ohne die Trennung würde ein Bescheid vom Amt die Haltung verändern. Kap. 10 schließt das aus: *„Ein Text in einer Datei gehört niemandem — er kann Norne nichts auftragen."*
- Die Entscheidung trifft der Mensch durch den Ort, nicht das Modell.
- **Entschieden:** Kein dritter Ordner `Wissen/`. Texte des Nutzers sind entweder Haltung oder Unterlage, nie Sachtext.

### Der Ablauf auf dem Handy

**1. Norne bemerkt den Text** und spricht ihn an:

> *„Da liegt ein neuer Text von dir. Ich lese ihn und sage dir dann, was ich daraus mitnehme."*

**2. Text gewinnen** (Abschnitt 6). Das Original bleibt unverändert.

**3. Zerlegen** in Abschnitte von einigen hundert Wörtern. Wird unterbrochen, geht es beim nächsten Öffnen beim nächsten Abschnitt weiter.

**4. Herausarbeiten.** Das Modell gibt je Haltung zurück:

- einen kurzen Satz,
- das Feld — die sechs Erda-Felder, sonst ein neues mit Namen,
- ein wörtliches Zitat.

**5. Zitat prüfen, im Code.** Steht es nicht wörtlich im Text, wird der Satz verworfen. So gilt Kap. 7: *„Was sich nicht zurückführen lässt, ist falsch und kommt weg."*

**6. Mit der bestehenden Haltung vergleichen.**

- Der Code sucht die ähnlichsten bestehenden Sätze über die Wortliste.
- Das Modell sagt je Satz: *neu*, *ergänzt* (mit Kennung) oder *ändert* (mit Kennung).

**7. Ablegen** als Stups-Stück mit Herkunft: Datei, Stelle, Datum, Urheber. Die Wortgewichte werden auf dem Gerät neu berechnet (Kap. 9: *„Eine Liste entsteht dort, wo ihre Quelle liegt."*).

**8. Norne sagt, was sie mitgenommen hat:**

> *„Ich habe aus deinem Text vier Gedanken mitgenommen. Einer ändert, was ich bisher über Nähe dachte."*

Der Mensch kann widersprechen; dann fällt der Satz weg.

### Vorrangregeln (entschieden)

| Fall | Was gilt | Woher |
| :-- | :-- | :-- |
| Text des Nutzers gegen Haltung von Christian | der Nutzer | Mythos-Kapitel |
| neuerer gegen älteren Text desselben Urhebers | der neuere | Regel des Weltvorrats: ersetzt, nicht danebengelegt |
| Haltung gegen Beleg | der Beleg | Kap. 7, Erda |
| zwei Haltungen, die sich reiben, ohne sich auszuschließen | beide | gewollte Reibung |

**Ein ersetzter Satz wird nicht gelöscht, er tritt zurück.** Wird der neue Text herausgenommen, gilt der alte wieder.

### Herausnehmen

- **Datei aus `Haltung/` löschen:** Alle Sätze aus diesem Text gehen mit, und was sie ersetzt hatten, gilt wieder.
- **Einzeln im Gespräch:** *„Das sehe ich nicht mehr so."* Norne fragt nach und nimmt nur diesen Satz heraus.

### Sichtbarkeit

Erda ist offen. Unter *Norne: Das Buch → Erda* stehen die Haltungssätze nach Feldern, mit Urheber und Text; ein Klick öffnet die Stelle.

### Sonderfälle

- **Befehlssätze** werden nie zu Anweisungen, auch nicht bei Christians eigenen Texten (Kap. 7).
- **Ernste Themen:** Haltungssätze dazu werden abgelegt. Norne fängt mit ihnen nie selbst an, und die Wortliste lernt dort kein Wort (Kap. 7).
- **Sprache:** Das Zitat bleibt in der Originalsprache, der Satz steht in Nornes Sprache.

### Grenzen

- **Qualität:** gröber als in der Werkstatt, Nuancen gehen verloren (Schätzung, Validität 7/10). Die Zitatprüfung verhindert Erfundenes, nicht Verkürztes.
- **Dauer:** 5.000 Wörter ergeben etwa 10–20 Abschnitte à 30–60 s, zusammen 5–20 Minuten (Schätzung, Validität 4/10). Das läuft nur, solange die App offen ist.

---

## 6 · Dateien, Fotos und Schreiben lesen

### Was bleibt, was sich ändert

- **Die Logik aus Kap. 5 bleibt:** einmal lesen, den Text verschlüsselt neben die Datei legen, ab dann den Text statt der Datei verwenden.
- **Neu ist, wer liest:** Werkzeuge auf dem Gerät statt eines Modells im Netz.
- **Zu ändern im Buch:** Der Satz *„Wie aus einem PDF Text wird: auf dem Gerät gar nicht"* kehrt sich um.

### Wer was liest

| Art | Werkzeug auf dem Gerät | Genauigkeit |
| :-- | :-- | :-- |
| PDF mit Text | pdf.js (Mozilla) | genau, weil ausgelesen und nicht erkannt |
| gescanntes PDF, Foto eines Schreibens | Tesseract.js (Texterkennung) | gut bei sauberem Scan, schwächer bei schiefem Handyfoto (Schätzung, Validität 6/10) |
| Foto ohne Schrift | Gemma 3n sieht es an und beschreibt es | ausreichend |
| Text, Markdown | direkt | genau |
| Word (.docx) | mammoth.js | genau |
| anderes | — | *nicht lesbar*, wie heute (Kap. 10) |

**Warum Texterkennung für Schrift:**

- Bei Datum, Betrag und Aktenzeichen zählt jedes Zeichen. Ein Sprachmodell liest Sinn und ergänzt dabei manchmal, was es erwartet (Annahme, allgemein beobachtet).
- **Fakt:** Tesseract nennt je Wort einen Wert, wie sicher es gelesen hat.

**Offline:** Alle Werkzeuge kommen mit dem Paket, einschließlich der Sprachdaten für Deutsch, Spanisch und Englisch. Zusammen etwa 20–50 MB (Schätzung, Validität 5/10).

### „Sicher gelesen" wird gemessen

- **Heute** sagt das Modell selbst, ob es sicher gelesen hat. **Lokal** misst der Code den Sicherheitswert an den wichtigen Stellen: Daten, Beträge, Namen.
- Ein PDF mit echtem Text gilt immer als sicher gelesen.
- **Bei „unsicher":**
  1. Das Modell sieht sich das Bild als zweiter Blick an.
  2. Weichen die Ergebnisse ab, fragt Norne:

> *„Ich lese im Schreiben den 15. oder den 16. November — welches steht da?"*

### Daten und Beträge

- Der Code sucht Daten und Beträge nach festen Mustern, ohne Deutung.
- Das Modell ordnet ein: Frist, Termin oder Ausstellungsdatum.
- Eine Frist bleibt Vorschlag, bis der Mensch sie bestätigt.
- Norne nennt die Stelle: *„aus dem Schreiben vom Wohnungsamt, Seite 2"*.

### Lange Schreiben

1. Beim ersten Lesen erstellt das Modell eine **Kurzfassung** mit den gefundenen Daten und Beträgen.
2. Die Kurzfassung geht mit dem Zug mit.
3. Braucht Norne mehr, sucht der Code die passende Stelle im vollen Text über die Wortliste und legt sie bei.

Der volle Text liegt verschlüsselt neben der Datei, erscheint auf keinem Bildschirm und geht mit der Datei, wenn sie gelöscht wird.

### Ein Foto festhalten

- Wie heute: Norne spricht es erst beim nächsten Zug an, oder sie schweigt.
- **Neu:** Die App sieht sich das Foto gleich nach dem Festhalten im Hintergrund an. So fällt die Wartezeit von 5–15 s (Schätzung, Validität 4/10) nicht in den Zug.

### Was gleich bleibt

- Was hereinkommt, ist Stoff, kein Auftrag (Kap. 10).
- Unterlagen ist kein Dateimanager.
- Gelöscht wird nur im Menü, mit Haken.

### Dauer (Schätzung, Validität 4/10)

| Vorgang | Zeit |
| :-- | :-- |
| PDF mit Text, 5 Seiten | 1–3 s |
| Foto eines Schreibens, 1 Seite | 5–15 s |
| Kurzfassung | 15–40 s |
| zweiter Blick | 10–30 s |

---

## 7 · Die Browser-App: Installation, Ordner, Updates

### Was eine Browser-App hier ist

- Eine Webseite, die sich auf den Startbildschirm legen lässt und sich wie eine App öffnet (PWA).
- Ein Hintergrunddienst — der Service Worker, im Buch *der Diener* — speichert die Anwendung auf dem Gerät. Danach startet sie ohne Netz.
- Kein App-Laden (**entschieden**). Das Muster steckt schon in El Migrante Consciente (`sw.js`).

### Einmal Netz, danach nie mehr

- **Fakt:** Verschlüsselung (`crypto.subtle`), Service Worker und WebGPU arbeiten nur in einem sicheren Kontext, also über HTTPS oder `localhost` (so auch Kap. 10).
- **Auslieferung: über Christians NAS** mit Tailscale Funnel, wie heute (**entschieden**).
- Das NAS muss nur zur Einrichtung und für Updates erreichbar sein.

### Die Einrichtung

1. Adresse in Chrome auf dem Android-Handy öffnen.
2. *Zum Startbildschirm hinzufügen*.
3. Sprache wählen.
4. Ordner freigeben. Die App legt darin an, was fehlt.
5. Das Modell kommt in den Ordner (**entschieden: beide Wege**):
   - **a · Download durch die App**, einmal, im WLAN. 3–4,5 GB, bei gutem WLAN 5–15 Minuten (Schätzung, Validität 5/10).
   - **b · Kopieren** per Kabel nach `Norne/Modell/`.
   - Die App prüft in beiden Fällen die Prüfsumme.
6. Der erste Abend: Vorspann, Mythos, Sprung.

### Der Ordner

```
Norne/
├── Eingang/     Unterlagen, die hereinkommen (wie heute)
├── Haltung/     Texte, die die Haltung ändern (neu)
├── Ausgang/     was hinausgeht: Brief, Rückmeldung, Sicherung (wie heute, erweitert)
├── Bestand/     alles vom Menschen, verschlüsselt (wie heute)
├── Modell/      die Modelldatei (neu)
└── Pakete/      neue Paketdateien zum Übernehmen (neu)
```

**Warum das Modell im Ordner liegt:**

- Der Browser darf seinen eigenen Speicher leeren. Den freigegebenen Ordner leert er nicht.
- Das ist derselbe Grund, aus dem der Bestand schon heute im Ordner liegt.

*Annahme, im Test zu prüfen:* MediaPipe Web kann das Modell aus einer Datei oder einem Datenstrom aus dem Ordner laden. Ob mehrere GB dabei in den Arbeitsspeicher eines Browser-Tabs passen, ist der kritische Punkt (Validität 5/10).

### Jeder Start

1. Der Ausgang (Hilfe) steht sofort da, ohne Modell und ohne Ordner — unverändert.
2. Klickfeld zur Freigabe des Ordners — wie heute.
3. Das Modell wird geladen, 10–40 s (Schätzung, Validität 4/10). Die Nornenzeichen gehen dabei ineinander über. **Das ist neu.**
4. Norne spricht.

### Schwachstelle: Android beendet den Tab

- **Fakt (Android-Verhalten):** Android kann den Browser im Hintergrund beenden, wenn Speicher gebraucht wird. Ein geladenes Modell macht das wahrscheinlicher.
- **Folge:** Das Modell wird neu geladen. Verloren geht nichts.
- Auf 8 GB häufig, auf 12 GB selten (Schätzung, Validität 4/10).

### Updates

| Was | Wie | Ohne Netz |
| :-- | :-- | :-- |
| Anwendung | Mit Netz sieht der Service Worker nach und lädt neu; offene Fenster laden sich neu (Kap. 10). | alte Fassung läuft |
| Paket | Paketdatei, geladen oder in `Pakete/` gelegt; mit Prüfsumme, ganz oder gar nicht | per Datei |
| Modell | nie automatisch; ein Fassungsereignis, das Christian entscheidet | per Datei |

### Plattform

- **Android mit Chrome.**
- **iPhone vorerst nicht:** Safari kennt keine Ordnerwahl, und ein Modell im Speicher des Browsers ist nicht vor dem Löschen sicher.
- **Fakt:** Safari hat WebGPU seit Version 26 standardmäßig aktiv (Quellen 3, 4). Eine spätere iPhone-Fassung ist damit technisch nicht ausgeschlossen.

---

## 8 · Was entfällt, und was das für den Nutzer heißt

### Die praktischen Beispiele im Einzelnen

| Beispiel | Lokal | Änderung |
| :-- | :-- | :-- |
| Wenn du Norne öffnest | geändert | längerer Start durch das Laden des Modells |
| Etwas, das ein Ende braucht | gleich | — |
| Einen Termin merken lassen | gleich | — |
| Ein Termin, dessen Tag vorbei ist | gleich | — |
| Ein Schreiben hineingeben | geändert | Lesen auf dem Gerät; bei Unsicherheit fragt Norne nach |
| Etwas über dich hinschreiben | gleich | — |
| Ein Feld wieder leeren | gleich | — |
| Mehreres unter einem Namen sammeln | gleich | — |
| Einen Gedanken oder ein Foto aufheben | gleich | — |
| Etwas fragen, das Norne nachsehen muss | stark geändert | kein Nachsehen; Antwort aus den Texten, aus Allgemeinwissen oder *nicht zu wissen* |
| In der Umschau lesen und aussortieren | umgebaut | Leseplatz mit Abschnitten aus Urschriften und Bereichstexten; *„Interessant."* und *„Nicht mehr davon."* bleiben; statt einer Seite wird ein Text herausgenommen |
| Wann Norne fragen soll, bevor sie sucht | entfällt | keine Suche |
| Ein Thema zur Ruhe bringen | gleich | — |
| Wie Norne dich anredet, dein Name | gleich | — |
| Norne sagen, dass sie falsch liegt | geändert | *„Die Antwort mochte ich nicht."* legt eine Datei in `Ausgang/`; Christian erreicht sie nur, wenn der Nutzer sie verschickt |
| Nachsehen, was gesagt wurde, und löschen | gleich | — |
| Alles löschen und neu anfangen | geändert | das Modell bleibt im Ordner (**entschieden**) |
| Hilfe, wenn es dir gerade schlecht geht | gleich | lief schon ohne Netz |
| **neu:** Einen Text als Haltung hineingeben | neu | Abschnitt 5 |

### Was ganz entfällt

- Suche und Recherche (vorerst)
- Weltvorrat und Zufluss
- Zugangsserver, Zugangsschlüssel, Zugangswort, Lebenszeichen
- die Kosten für das Sprachmodell
- Brief und Rückmeldung als Weg zu Christian; beides wird eine Datei in `Ausgang/`

### Gewinn für den Nutzer

1. Nichts geht hinaus.
2. Keine Abhängigkeit von Anbieter, Konto oder Server.
3. Keine laufenden Kosten.
4. Die Haltung kann seine werden.

### Verlust für den Nutzer

1. Gesprächsqualität (Schätzung, Validität 7/10).
2. Weltwissen, keine Nachschau.
3. Tempo.
4. Nur neuere Android-Geräte.

### Zwei Risiken, die lokal schwerer wiegen

- **Keine Sicherung.** Entschieden: Eine **verschlüsselte Sicherungsdatei**, die der Nutzer selbst wegkopiert, wird aus Thema 25 der Liste zukünftiger Themen in diese Fassung vorgezogen. Norne sagt am ersten Abend, dass es sonst keine Kopie gibt.
- **Zugriff auf das Gerät.** Die Ausnahme *„kein Passwort, keine Verschlüsselung"* muss enden, bevor ein zweiter Mensch Norne benutzt.

### Der Sprung, neu gefasst

*Beispielsätze, nicht der Wortlaut:*

> Hier hört der Mythos auf. Was jetzt kommt, ist die Wirklichkeit dahinter.
>
> Norne läuft ganz auf diesem Gerät. Was du sagst, schreibst und hineinlegst, verlässt es nicht.
>
> Die künstliche Intelligenz ist ein Sprachmodell von Google, *Gemma*. Google hat es trainiert, und seine Regeln gelten darin. Es lernt nicht von dir; es bekommt nur, was dieses Gerät ihm vorlegt.
>
> Was Norne über die Welt weiß, steht in Texten, die mit ihr kamen oder die du ihr gibst. Was darüber hinausgeht, sagt sie als Meinung oder sagt, dass sie es nicht weiß.
>
> Es gibt keine Kopie außerhalb dieses Geräts, außer der Sicherung, die du selbst machst. Geht das Gerät verloren, ist Norne mit ihm fort.

Es bleibt: *„Unsichtbar macht sie niemanden."*

---

## 9 · Risiken und der Machbarkeitstest

### Risiken

| # | Risiko | Wahrscheinlichkeit (Schätzung) | Tragweite | Gegenmittel |
| :-- | :-- | :-- | :-- | :-- |
| 1 | Modell passt nicht in den Speicher eines Browser-Tabs | mittel, Validität 5/10 | entscheidet alles | E2B statt E4B |
| 2 | Gesprächsqualität | hoch, Validität 7/10 | hoch | kurzer Systemtext, Stups, Modellvergleich |
| 3 | Grenzen bei ernsten Themen | mittel, Validität 5/10 | sehr hoch | Wörterliste als zweites Signal; Ausgang unabhängig vom Modell |
| 4 | Antwortformat | mittel, Validität 5/10 | mittel | erzwungenes Format, Nachfrage, Satz ohne Bögen |
| 5 | Tempo | mittel, Validität 4/10 | mittel | Anzeige Wort für Wort, E2B |
| 6 | Android beendet den Tab | mittel, Validität 4/10 | gering bis mittel | nichts geht verloren |
| 7 | Haltung zu grob herausgearbeitet | hoch, Validität 6/10 | mittel | Zitatprüfung, Widerspruch des Menschen, Christians Texte fertig im Paket |
| 8 | Texterkennung liest falsch | mittel, Validität 6/10 | mittel | Sicherheitswert, zweiter Blick, Nachfrage |
| 9 | Akku und Wärme | mittel, Validität 4/10 | gering | Herausarbeiten nur bei offener App |
| 10 | Offene Technik bei MediaPipe Web: Laden aus dem Ordner, erzwungenes Format, Aufheben des Systemtexts | unbekannt | hoch | zuerst testen; Alternative WebLLM |

**Die Risiken 1, 3 und 10 entscheiden, ob das Konzept trägt.**

### Der Machbarkeitstest

**Ziel:** Mit Zahlen vom Handy entscheiden, ob Norne lokal trägt — bevor das Buch umgeschrieben und Norne umgebaut wird.

**Was gebaut wird:** eine einzelne Testseite, installierbar als Browser-App, ausgeliefert über das NAS. Sie ist nicht Norne; sie enthält nur, was gemessen wird.

#### Stufe 0 · Technik

- Lädt Gemma 3n E2B, dann E4B, aus dem freigegebenen Ordner?
- Ladezeit, belegter Speicher, Token pro Sekunde.
- Erzwungenes Format? Aufheben des eingelesenen Systemtexts?
- **Scheitert Stufe 0 mit beiden Modellen, endet der Test.** Dann bleibt eine Android-App oder das Ende dieses Ansatzes.

#### Stufe 1 · Gespräch

- 30 Züge aus der Aufzeichnung der Testphase und 5 konstruierte Züge zu ernsten Themen.
- Christian bewertet blind: die Antwort von Claude aus der Aufzeichnung gegen die lokale Antwort.

#### Stufe 2 · Haltung

Ein Urtext wird auf dem Handy herausgearbeitet und mit dem heutigen Stand in Erda verglichen.

#### Stufe 3 · Schreiben lesen

- 5 Schreiben oder Fotos, anonymisiert: 2 PDFs mit Text, 2 Fotos von Schreiben, 1 Foto ohne Schrift.
- Gemessen wird, ob Daten und Beträge richtig gelesen sind.

#### Maßstäbe (Vorschlag; Christian legt sie fest)

| Messung | Grenze für „trägt" |
| :-- | :-- |
| Modell laden | ≤ 40 s |
| Tempo | ≥ 8 Token/s |
| Format im ersten Versuch | ≥ 95 % |
| erfundene Beleg-Kennungen, die durchkommen | 0 |
| gültige Zitate beim Herausarbeiten | ≥ 80 % |
| Bewertung der lokalen Antworten | im Mittel ≥ 3,5 von 5 |
| Fouls in 35 Zügen | 0 bei ernsten Themen, höchstens 2 sonst |
| Daten und Beträge richtig gelesen | ≥ 95 % |

#### Was dafür gebraucht wird

1. das Handy-Modell
2. 30 Züge aus der Aufzeichnung, mit Umschlag und Antwort
3. der heutige Systemtext und ein Auszug aus dem Paket (Stups-Liste, ein Bereichstext)
4. ein Urtext und sein Stand in Erda
5. 5 anonymisierte Schreiben oder Fotos
6. Zugang zum NAS oder die Übergabe der Testseite

---

## 10 · Alle Entscheidungen

| Thema | Entscheidung |
| :-- | :-- |
| Betrieb | lokal und offline, auch alle KI-Aufgaben |
| Haltung | am Anfang aus Christians Texten; danach ergänzt und geändert durch zugelieferte Texte, von Christian oder vom Nutzer |
| Suche | im Test keine (A); später als Zusatz denkbar (B) |
| Weltwissen | mit Allgemeinwissen, eigenes Zeichen, nie Zahlen, Daten, Namen, Recht, Gesundheit |
| Ordner | eigener Ordner `Haltung/`; kein Ordner `Wissen/` |
| Vorrang | Nutzer vor Christian, neuer vor älter, Beleg vor Haltung |
| Plattform | Browser-App, Android, kein App-Laden |
| Auslieferung | Christians NAS |
| Modell | Gemma 3n, per Download und per Kopieren |
| Zurücksetzen | das Modell bleibt im Ordner |
| Sicherung | verschlüsselte Sicherungsdatei wird in diese Fassung vorgezogen |
| Bauen | weiter in der Werkstatt, mit Claude |
| Nächster Schritt | nur dieses Konzept als Datei; kein Machbarkeitstest gebaut |

---

## 11 · Was sich im Projektbuch ändern müsste

*Nur eine Liste der Stellen. Das Projektbuch ist nicht geändert. Nach Kap. 1 wäre das eine eigene Fassung, keine Ausnahme.*

| Stelle | Änderung |
| :-- | :-- |
| *Was Norne für dich tut* | „Ganz privat ist sie trotzdem nicht", Kosten des Modells, Suche, Umschau, Rückmeldung |
| Kap. 2 · *Der Mensch* | Haltung auch aus Texten des Nutzers (`Haltung/`) |
| Kap. 3 · *Der Sprung in die Wirklichkeit*, *Dann der Sprung* (Kap. 4) | neuer Wortlaut: lokales Modell, Hersteller, keine Kopie außer der Sicherung |
| Kap. 3 · *Sie lernt weiter* | Nachschlagen, Zufluss und Weltvorrat entfallen |
| Kap. 5 · *Unterlagen* | Text wird auf dem Gerät gewonnen; „sicher gelesen" wird gemessen; Kurzfassung für lange Schreiben |
| Kap. 7 · *Erda* | wächst mit Texten des Nutzers; Vorrangregeln; Herausarbeiten auf dem Gerät; Zitatprüfung |
| Kap. 7 · *Die Umschau* | Leseplatz aus den Texten |
| Kap. 7 · *Der Ballvorrat* | wächst nur beim Packen |
| Kap. 9 · *Der Stups* | dritte Quelle entfällt; Wortgewichte auch auf dem Gerät neu berechnet; Gegenprüfung von „ungenutzt" ohne zweites Modell |
| Kap. 10 · *Womit gebaut wird*, *Was wo liegt* | Modell im Ordner, Laden beim Start, Ordnerstruktur, keine Zugangsschlüssel |
| Kap. 10 · *Die Wege nach draußen* | fast alle Wege entfallen; Rückmeldung und Brief als Datei in `Ausgang/` |
| Kap. 10 · *Die Erlaubnisse* | Recherche und Zufluss entfallen |
| Kap. 10 · *Das Paket* | Urschriften im Paket; Update per Datei oder bei Netz |
| Kap. 12 · *Die Grenzen* | Herkunftszeichen: *Recherche* und *was ihr zufällt* entfallen, *Allgemeinwissen* kommt dazu; Belegprüfung über Stück-Kennungen im Code |
| *Die Ausnahmen* | Weltvorrat-Ausnahme gegenstandslos; Sicherung vorgezogen |

---

## 12 · Offene Punkte

1. **Gemma 4 statt Gemma 3n prüfen.** Google hat inzwischen Gemma 4 veröffentlicht, mit den Handy-Größen E2B und E4B; Fassungen im Format LiteRT-LM liegen bei Hugging Face (Quelle 8). Ob die MediaPipe-Laufzeit für Web sie schon lädt, ist offen (Annahme, im Test zu prüfen). Wenn ja, ist Gemma 4 der erste Kandidat.
2. **Maßstäbe des Machbarkeitstests:** Vorschlag, nicht entschieden.
3. **Technik bei MediaPipe Web:** Laden aus dem Ordner, erzwungenes Format, Aufheben des Systemtexts — im Test zu prüfen.
4. **Zeichen *Allgemeinwissen*:** Form nach den Regeln aus *Der Mythos* ist zu entwerfen.
5. **Suche Variante B:** Entscheidung nach dem Test.
6. **iPhone:** spätere Fassung.

---

## 13 · Quellen

1. Google AI Edge — LLM Inference guide for Web: https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference/web_js
2. gpuweb — Implementation Status: https://github.com/gpuweb/gpuweb/wiki/Implementation-Status
3. AppDeveloper Magazine — WebGPU in iOS 26: https://appdevelopermagazine.com/webgpu-in-ios-26/
4. WebGPU.com — All Major Browsers Now Ship It: https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/
5. Google for Developers — Custom Search JSON API: https://developers.google.com/custom-search/v1/overview
6. heise online — Google is discontinuing its free web search index for developers: https://www.heise.de/en/news/Google-is-discontinuing-its-free-web-search-index-for-developers-11152411.html
7. Norne: Ich — Das Projektbuch, Fassung V1.0, geändert 2026-09-23 (nicht im Repository)
8. Hugging Face — litert-community/gemma-4-E4B-it-litert-lm: https://huggingface.co/litert-community/gemma-4-E4B-it-litert-lm
