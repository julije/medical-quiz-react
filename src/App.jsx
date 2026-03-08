import { useState } from "react";
import "./App.css";

const pitanja = [
  {
    id: 1,
    pitanje: "Što je radiografija?",
    odgovori: ["Snimanje rendgenom", "Operacija", "Krvni test", "EKG"],
    tocno: "Snimanje rendgenom",
  },
  {
    id: 2,
    pitanje: "Koji modalitet oslikavanja koristi ionizirajuće zračenje za stvaranje slike?",
    odgovori: ["CT", "Ultrazvuk", "Termografija", "MR"],
    tocno: "CT",
  },
  {
    id: 3,
    pitanje: "Koja je glavna mjerna jedinica za apsorbiranu dozu zračenja u tkivu?",
    odgovori: ["Hertz (Hz)", "Tesla (T)", "Gray (Gy)", "Becquerel (Bq)"],
    tocno: "Gray (Gy)",
  },
  {
    id: 4,
    pitanje: "Koja je kontraindikacija za obavljanje pregleda magnetskom rezonancijom (MRI)?",
    odgovori: [
      "Klaustrofobija",
      "Prisutnost elektrostimulatora srca(pacemakera)",
      "Alergija ma jodna kontrastna sredstva",
      "Trudnoća u trećem tromjesecju",
    ],
    tocno: "Prisutnost elektrostimulatora srca(pacemakera)",
  },
  {
    id: 5,
    pitanje: "Što se najbolje prikazuje T1-vremenskim (T1-weighted) sekvencama na MRI-u?",
    odgovori: [
      "Edem i upalni procesi",
      "Stupan kalcifikacije kostiju",
      "Anatomski detalji i masno tkivo",
      "Sadržaj zraka u plućima",
    ],
    tocno: "Anatomski detalji i masno tkivo",
  },
  {
    id: 6,
    pitanje: "Koja je primarna uloga olovnih pregača u radiologiji?",
    odgovori: [
      "Fiksiranje pacijenta tijekom snimanja",
      "Smanjenje izloženosti osoblja raspršenom zračenju",
      "Zaštita pacijenta od magnetskog polja",
      "Poboljšanje kvalitete slike",
    ],
    tocno: "Smanjenje izloženosti osoblja raspršenom zračenju",
  },
  {
    id: 7,
    pitanje: "Pojam 'atenuacija' u CT dijagnostici odnosi se na:",
    odgovori: [
      "Vrijeme potrebno za rekonstrukciju slike",
      "Količinu kontrasta u veni",
      "Brzinu rotacije cijevi",
      "Slabljenje intenziteta snopa X-zraka pri prolasku kroz tkivo",
    ],
    tocno: "Slabljenje intenziteta snopa X-zraka pri prolasku kroz tkivo",
  },
  {
    id: 8,
    pitanje: "Koja se jedinica koristi za izražavanje radiološke gustoće na CT snimkama?",
    odgovori: ["Hounsfieldova jedinica (HU)", "Candela", "Pixel", "Sievert (Sv)"],
    tocno: "Hounsfieldova jedinica (HU)",
  },
  {
    id: 9,
    pitanje: "Što je 'nativna' snimka u radiologiji?",
    odgovori: [
      "Trodimenzionalni prikaz organa",
      "Snimka napravljena nakon operativnog zahvata",
      "Snimka dijeteta odmah nakon rođenja",
      "Snimka napravljena bez primjene kontrastnog sredstva",
    ],
    tocno: "Snimka napravljena bez primjene kontrastnog sredstva",
  },
  {
    id: 10,
    pitanje:
      "Koja je glavna prednost digitalne radiografije (DR) u odnosu na klasičnu film-folija radiografiju?",
    odgovori: [
      "Potpuna eliminacija zračenja pacijenta",
      "Mogućnost naknadne obrade slike i brža dostupnost",
      "Manja cijena samog uređaja",
      "Veći format slike koji se može ispisati",
    ],
    tocno: "Mogućnost naknadne obrade slike i brža dostupnost",
  },
];

function App() {
  const [trenutnoPitanje, setTrenutnoPitanje] = useState(0);
  const [score, setScore] = useState(0);
  const [odabraniOdgovor, setOdabraniOdgovor] = useState(null);
  const pitanje = pitanja[trenutnoPitanje];

  function provjeriOdgovor(odgovor) {
    setOdabraniOdgovor(odgovor);
    if (odgovor === pitanje.tocno) {
      setScore(score + 1);
    }
  }

  function sljedecePitanje() {
    setTrenutnoPitanje(trenutnoPitanje + 1);
    setOdabraniOdgovor(null);
  }

  return (
    <div className="kviz-kartica">
      {trenutnoPitanje >= pitanja.length ? (
        <div>
          <h1>Kviz završen!</h1>
          <p>
            Rezultat: {score} / {pitanja.length}
          </p>
          <button
            className="sljedece-gumb"
            onClick={() => {
              setTrenutnoPitanje(0);
              setScore(0);
              setOdabraniOdgovor(null);
            }}
          >
            Igraj ponovo
          </button>
        </div>
      ) : (
        <div>
          <h1>Medical Quiz</h1>
          <p className="pitanje">{pitanje.pitanje}</p>
          <div className="odgovori">
            {pitanje.odgovori.map((odgovor, index) => (
              <button
                className="odgovor-gumb"
                key={index}
                onClick={() => provjeriOdgovor(odgovor)}
                style={{
                  backgroundColor:
                    odabraniOdgovor === odgovor
                      ? odgovor === pitanje.tocno
                        ? "green"
                        : "red"
                      : "",
                }}
              >
                {odgovor}
              </button>
            ))}
          </div>
          <p>
            Pitanje: {trenutnoPitanje + 1} / {pitanja.length} | Score: {score}
          </p>
          {odabraniOdgovor && (
            <button onClick={sljedecePitanje} className="sljedece-gumb">
              Sljedeće pitanje
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
