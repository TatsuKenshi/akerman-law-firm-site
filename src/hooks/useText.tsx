const useText = () => {
  const textSr1 = (): React.ReactElement => {
    return (
      <>
        <p className="w-full mb-4">
          Mi Brinemo o usaglašenosti Vašeg poslovanja sa relevantnom pravnom
          regulativom, kako bi Vaše društvo nesmetano funkcionisalo na tržištu
          Republike Srbije.
        </p>
        <p className="w-full mb-2">Naše usluge uključuju:</p>
        <ul className="list-disc">
          <li className="ml-6">Osnivanje privrednih društava</li>
          <li className="ml-6">
            Registraciju poslovnih podataka, promena i podnošenje ostalih
            registracionih prijava u Agenciji za privredne registre
          </li>
          <li className="ml-6">
            Pripremu neophodne dokumentacije i savetovanje prilikom statusnih
            promena, povećanja i smanjenja kapitala društva
          </li>
          <li className="ml-6">
            Pravno savetovanje u vezi sa korporativnim upravljanjem
          </li>
          <li className="ml-6">
            Izradu osnivačkih akata, statuta, ugovora članova društva,
            pravilnika, internih procedura, odluka i drugih internih
            kompanijskih akata
          </li>
          <li className="ml-6">
            Pripremu i savetovanje u vezi sa održavanjem skupština društva i
            sednica upravnih, izvršnih i nadzornih odbora
          </li>
        </ul>
      </>
    );
  };

  const textEng1 = (): React.ReactElement => {
    return (
      <>
        <p className="w-full mb-4">
          Our law firm can assist you in a phase of pre-incorporation and
          incorporation of your company in Serbia as well as provide legal
          support in all other regulatory matters related to the functioning of
          the company in Serbia.
        </p>
        <p className="w-full mb-2">Our service include:</p>
        <ul className="list-disc">
          <li className="ml-6">
            Advising on and preparation of all necessary documents for the
            establishment of the company, associations, foundations and other
            legal entities
          </li>
          <li className="ml-6">
            Registrations and filings with Serbian Business Registers Agency and
            other institutions
          </li>
          <li className="ml-6">
            Drafting of documentation and legal advising concerning statutory
            changes, and increase/reduction of the capital
          </li>
          <li className="ml-6">
            Legal advising related to Corporate governance
          </li>
          <li className="ml-6">
            Drafting of a memorandum of association, articles of association,
            shareholders agreements, rules, procedures, decisions and other
            internal corporate documents
          </li>
          <li className="ml-6">
            Preparation and legal advice concerning shareholders' assembly, a
            board of directors, executive board and supervisory board meetings
          </li>
        </ul>
      </>
    );
  };

  const textSr2 = (): React.ReactElement => {
    return (
      <>
        <p className="w-full mb-4">
          Naša advokatska kancelarija Vam može pružiti pravnu pomoć u svim
          fazama izvršnog postupka.
        </p>
        <p>
          U cilju pružanja najefikasnije usluge naš tim će utvrditi solventnost
          dužnika, postojanje pokretne i nepokretne imovine, inicirati
          sprovođenje privremene mere i proceniti isplativost sprovođenja
          izvršenja za klijenta.
        </p>
      </>
    );
  };

  const textEng2 = (): React.ReactElement => {
    return (
      <>
        <p className="w-full mb-4">
          Our Law Firm can provide you with legal support in any step of
          enforcement procedure.
        </p>
        <p>
          To provide the most effective legal service, we will assess the
          solvency of the debtor, the existence of the movable and immovable
          property, initiate possible interim measures and evaluate the cost-
          effectiveness of enforcement.
        </p>
      </>
    );
  };

  const textSr3 = (): React.ReactElement => {
    return (
      <p>
        Pružamo pouzdanu podršku klijentima u oblasti imovinsko-pravnih odnosa.
        Vršimo detaljnu proveru i analizu pravnog statusa nepokretnosti, i
        upozoravamo na sve eventualne rizike. U skladu sa zahtevima klijenta
        proaktivno učestvujemo u pregovorima i pripremi svih akata neophodnih za
        realizaciju pravnog posla.
      </p>
    );
  };

  const textEng3 = (): React.ReactElement => {
    return (
      <p>
        We provide reliable support to clients in the area of property and legal
        relations. We carry out a detailed check and analysis of the legal
        status of real estate, and warn of all potential risks. In accordance
        with the client's requirements, we proactively participate in the
        negotiations and preparation of all acts necessary for the realization
        of the legal work.
      </p>
    );
  };

  const textSr4 = (): React.ReactElement => {
    return (
      <p>
        Advokatska kancelarija Akerman pomaže kompanijama i pojedincima u
        rešavanju svih vrsta individualnih i kolektivnih radnih odnosa koji
        proističu iz korporativnih odnosa.
      </p>
    );
  };

  const textEng4 = (): React.ReactElement => {
    return (
      <p>
        Akerman Law Office assists companies and individuals while dealing with
        all types of individual and collective employment relationships arising
        from the corporate relations.
      </p>
    );
  };

  const textSr5 = (): React.ReactElement => {
    return (
      <p>
        Zastupanje pravnih i fizičkih lica u parničnim, vanparničnim i upravnim
        postupcima pred domaćim sudovima i drugim državnim organima u širokom
        spektru oblasti prava.
      </p>
    );
  };

  const textEng5 = (): React.ReactElement => {
    return (
      <p>
        We represent individuals and legal entities in a wide range of legal
        areas in disputes, out-of- court cases and administrative proceedings
        before courts and other state authorities.
      </p>
    );
  };

  const textSr6 = (): React.ReactElement => {
    return (
      <p>
        Zastupanje fizičkih lica pred sudovima, javnim beležnicima, drugim
        državnim organima i trećim licima u oblasti porodičnog i naslednog
        prava.
      </p>
    );
  };

  const textEng6 = (): React.ReactElement => {
    return (
      <p>
        We represent individuals before courts, public notaries, other state
        authorities, and before third parties in cases of family and inheritance
        law.
      </p>
    );
  };

  const textSr7 = (): React.ReactElement => {
    return (
      <p>
        Naša advokatska kancelarija pruža punu pravnu podršku svojim klijentima
        u oblasti upravnog prava, uključujući zastupanje pred Upravnim sudom i
        svim upravnim organima.
      </p>
    );
  };

  const textEng7 = (): React.ReactElement => {
    return (
      <p>
        Our law office provides full legal support to its clients in
        administrative matters, including representing before administration
        court and all administration bodies.
      </p>
    );
  };

  return {
    textSr1,
    textEng1,
    textSr2,
    textEng2,
    textSr3,
    textEng3,
    textSr4,
    textEng4,
    textSr5,
    textEng5,
    textSr6,
    textEng6,
    textSr7,
    textEng7,
  };
};

export default useText;
