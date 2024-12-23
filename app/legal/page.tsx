'use client';

import React from "react";

const LegalPage = () => {
    return (
        <div className="min-h-screen bg-blackBackground text-white px-6 py-10">
            <div className="max-w-4xl mx-auto">
                {/* Überschrift */}
                <h1 className="text-4xl font-bold mb-10 text-center">Rechtliches</h1>

                {/* Impressum */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
                    <p className="text-gray-300 leading-7">
                        <strong>Angaben gemäß § 5 TMG (Telemediengesetz)</strong>
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>Unternehmen:</strong> MOMO & ZOZO BARBERSHOP<br />
                        <strong>Rechtsform:</strong> Einzelunternehmen<br />
                        <strong>Sitz des Unternehmens:</strong> Am Schilfspark 26, 21029 Hamburg<br />
                        <strong>Vertreten durch:</strong> Zobeid Alizadeh<br />
                        <strong>Kontakt:</strong><br />
                        Telefon: 040/ 320 44 777<br />
                        E-Mail: momoundzozo@hotmail.com<br />
                    </p>

                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>Haftungsausschluss:</strong><br />
                        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf dieser Website verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>

                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>Haftung für Links:</strong><br />
                        Unsere Website enthält Links zu externen Websites. Auf deren Inhalte haben wir keinen Einfluss und übernehmen dafür keine Haftung. Für die Inhalte der verlinkten Seiten sind die jeweiligen Betreiber verantwortlich.
                    </p>

                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>Urheberrecht:</strong><br />
                        Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Alle Rechte vorbehalten. Die Vervielfältigung, Bearbeitung oder Verbreitung der Inhalte ist ohne ausdrückliche Zustimmung des Rechteinhabers nicht gestattet.
                    </p>
                </section>

                {/* Datenschutz */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Datenschutz</h2>
                    <p className="text-gray-300 leading-7">
                        Der Schutz Ihrer persönlichen Daten ist uns wichtig. In dieser Datenschutzerklärung erfahren Sie, wie wir Ihre Daten erheben, verarbeiten und schützen.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>1. Erhebung und Verarbeitung von Daten:</strong><br />
                        Wir erheben keine personenbezogenen Daten, wenn Sie unsere Webseite besuchen. Falls Sie uns per E-Mail oder über ein Kontaktformular erreichen, speichern wir Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>2. Verwendung von Cookies:</strong><br />
                        Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers deaktivieren.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>3. Datensicherheit:</strong><br />
                        Wir schützen Ihre Daten durch geeignete technische und organisatorische Maßnahmen vor unbefugtem Zugriff, Verlust oder Missbrauch.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>4. Ihre Rechte:</strong><br />
                        Sie haben das Recht, Auskunft über die gespeicherten Daten zu erhalten, diese zu berichtigen oder zu löschen. Kontaktieren Sie uns hierfür bitte per E-Mail.
                    </p>
                </section>

                {/* Allgemeine Geschäftsbedingungen */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Allgemeine Geschäftsbedingungen</h2>
                    <p className="text-gray-300 leading-7">
                        Die Allgemeinen Geschäftsbedingungen (AGB) regeln die Bedingungen für die Nutzung der Website und die Geschäftsbeziehung zwischen dem BarberShop XYZ und seinen Kunden.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>1. Vertragsabschluss:</strong><br />
                        Der Vertrag zwischen dem Kunden und BarberShop XYZ kommt durch die Bestellung von Dienstleistungen oder Produkten auf der Website zustande.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>2. Preise und Zahlung:</strong><br />
                        Alle angegebenen Preise auf der Website sind Endpreise und verstehen sich inkl. der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt vor Ort im BarberShop oder gemäß den vereinbarten Bedingungen.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>3. Haftung:</strong><br />
                        Die Haftung für Schäden, die durch die Inanspruchnahme der angebotenen Dienstleistungen entstehen, ist auf die Höhe des gezahlten Preises begrenzt.
                    </p>
                    <p className="text-gray-300 leading-7 mt-4">
                        <strong>4. Widerrufsrecht:</strong><br />
                        Kunden haben kein Widerrufsrecht, da es sich bei den angebotenen Dienstleistungen um individuell erbrachte Leistungen handelt.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LegalPage;
