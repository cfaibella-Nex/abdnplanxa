/* A BDN Planxa i Pintura — js/main.js
   i18n (CA/ES) per data-i18n, com a WebFEB: cada text de la web té la seva clau als dos blocs de sota.
   - data-i18n="clau"            → textContent
   - data-i18n-html="clau"       → innerHTML (només textos propis amb enllaços)
   - data-i18n-attr="attr:clau"  → atributs (alt, aria-label, content, value…); separa'n diversos amb ";"
   - data-lang-block="ca|es"     → blocs llargs (textos legals): es mostra el de l'idioma actiu
   Idioma: ?lang=es|ca → preferència desada → idioma del navegador (es → castellà; la resta → català). */
(function () {
  'use strict';

  var i18n = {
 "ca": {
  "ui.skip": "Salta al contingut",
  "ui.home": "A BDN Planxa i Pintura — inici",
  "ui.menu": "Menú",
  "ui.nav": "Principal",
  "ui.lang": "Idioma",
  "ui.call": "Truca’ns",
  "ui.quote": "Demana pressupost",
  "ui.stars5": "5,0 de 5 estrelles",
  "nav.serveis": "Serveis",
  "nav.treballs": "Treballs",
  "nav.ressenyes": "Ressenyes",
  "nav.contacte": "Contacte",
  "brand.member": "Membre del Grupo Marti Motors",
  "brand.tagline": "Especialistes en reparació integral de carrosseria, xapa i pintura.",
  "footer.where": "On som",
  "footer.directions": "Com arribar",
  "footer.contact": "Contacte",
  "footer.hours": "Horari",
  "hours.mt": "Dilluns a dijous: 8:00–18:00",
  "hours.f": "Divendres: 7:00–14:00",
  "hours.we": "Dissabte i diumenge: tancat",
  "footer.legal": "Avís legal",
  "footer.privacy": "Privacitat",
  "footer.cookies": "Cookies",
  "rating.caption": "Valoració pública de clients",
  "rating.count": "101 ressenyes a Google",
  "review.source": "Ressenya de Google",
  "review.full": "Llegeix-la sencera",
  "meta.index.title": "A BDN Planxa i Pintura · Taller de xapa i pintura a Badalona",
  "meta.index.desc": "Taller de xapa, pintura i carrosseria al Carrer del Rector, 54, de Badalona. Gestionem el sinistre amb la teva asseguradora. Valoració de 5,0 a Google.",
  "hero.sub": "Taller de xapa i pintura a Badalona",
  "hero.tagline": "Especialistes en reparació integral de carrosseria, xapa i pintura",
  "img.01": "Tècnic del taller treballant a la roda d’un SUV blanc elevat al pont",
  "claims.title": "Ens encarreguem del sinistre",
  "claims.sub": "Taller col·laborador de referència de MAPFRE i SegurCaixa",
  "claims.lead": "Si l’asseguradora t’ha derivat al taller o hi vols portar el cotxe, ens fem càrrec de tota la gestió: parlem amb el pèrit, tramitem la documentació i t’informem de cada pas fins a l’entrega.",
  "claims.s1": "Coordinació amb el pèrit",
  "claims.s2": "Gestió documental",
  "claims.s3": "Seguiment de l’expedient",
  "claims.s4": "Vehicle de substitució",
  "claims.s5": "Control de qualitat i entrega",
  "claims.b1": "Un únic interlocutor",
  "claims.b2": "Millor coordinació",
  "claims.b3": "Menys temps d’immobilització",
  "work.title": "Treballs reals",
  "work.sub": "Evidències del procés de treball",
  "work.more": "Veure més treballs",
  "case.before": "Abans",
  "case.process": "Procés",
  "case.result": "Resultat",
  "case1.title": "Aleta i para-xocs posterior",
  "case1.desc": "Reparació d’aleta i para-xocs posterior: correcció de danys, preparació, pintura i integració de l’acabat amb la resta de la carrosseria.",
  "img.09": "Aleta i para-xocs posterior abonyegats, abans de la reparació",
  "img.10": "La mateixa zona amb massilla i aparell, durant la preparació",
  "img.11": "Aleta i para-xocs reparats i pintats",
  "rev.title": "El que diuen els clients",
  "rev.sub": "Ressenyes reals de Google, tal com les han escrit",
  "rev.all": "Totes les ressenyes",
  "eco.title": "Cobertura integral del vehicle",
  "eco.sub": "Integrats al Grupo Marti Motors",
  "eco.lead": "La integració al Grupo Marti Motors ens permet oferir una gestió completa del vehicle: mecànica, diagnosi, manteniment, xapa, pintura, peritatge i sinistres des d’un mateix lloc. Estàndards de qualitat de gran grup, amb un tracte proper i flexible.",
  "eco.a1": "Xapa i pintura",
  "eco.a2": "Carrosseria",
  "eco.a3": "Gestió de sinistres",
  "eco.a4": "Peritatge i qualitat",
  "eco.b1": "Mecànica general",
  "eco.b2": "Diagnosi avançada",
  "eco.b3": "Revisions i manteniment",
  "eco.b4": "ITV i verificacions",
  "eco.more": "Veure els serveis",
  "img.04": "Cabina de pintura del taller",
  "cta.title": "Explica’ns què li ha passat al cotxe",
  "cta.text": "Et responem amb el pressupost i els passos a seguir, també si hi ha una asseguradora pel mig.",
  "cta.address": "Adreça",
  "cta.phone": "Telèfon",
  "cta.hours": "Horari",
  "cta.hoursShort": "Dl–dj 8:00–18:00 · Dv 7:00–14:00",
  "meta.serveis.title": "Serveis de xapa, pintura i carrosseria · A BDN Planxa i Pintura",
  "meta.serveis.desc": "Reparació multimarca de carrosseria, xapa i pintura a Badalona: cabina de pintura professional, reparació estructural i gestió integral de sinistres.",
  "serv.title": "Serveis",
  "serv.sub": "Capacitat operativa per a reparacions multimarca",
  "serv.intro": "Instal·lacions preparades per gestionar reparacions de diferent complexitat, amb zones de treball, preparació, acabat i control final, per combinar qualitat, productivitat i seguiment del procés.",
  "s1.title": "Xapa i carrosseria",
  "s1.text": "Reparació integral de carrosseria multimarca: cops frontals i posteriors, reparacions estructurals a la bancada amb unitat de tir i substitució de peces.",
  "s1.l1": "Reparació integral de carrosseria",
  "s1.l2": "Reparació estructural amb unitat de tir",
  "s1.l3": "Substitució de peces, com ara portes",
  "s1.l4": "Control de qualitat final",
  "img.16": "Part posterior d’un cotxe blanc fixada a la bancada amb la unitat de tir",
  "cap.16": "Reparació estructural amb unitat de tir",
  "s2.title": "Pintura",
  "s2.text": "Cabina professional, preparació de color i control d’acabat per assegurar una integració visual d’alta qualitat amb la resta del vehicle.",
  "s2.l1": "Cabina de pintura professional",
  "s2.l2": "Preparació de color",
  "s2.l3": "Acabats homogenis i control de color",
  "s3.title": "Gestió de sinistres",
  "s3.text": "Som taller col·laborador de referència de MAPFRE i SegurCaixa. Coordinem el peritatge i la documentació amb l’asseguradora i et mantenim informat fins que recuperes el cotxe.",
  "s3.l1": "Coordinació amb pèrits",
  "s3.l2": "Gestió documental",
  "s3.l3": "Seguiment de l’expedient",
  "s3.l4": "Vehicles de substitució",
  "s3.l5": "Control de qualitat i entrega final",
  "s3.statement": "Un únic interlocutor, millor coordinació i menys temps d’immobilització.",
  "img.13": "Frontal d’un cotxe fosc després de la reparació",
  "s4.title": "Mecànica i manteniment amb el Grupo Marti Motors",
  "s4.text": "Com a part del Grupo Marti Motors, també resolem la mecànica del vehicle, amb un únic interlocutor.",
  "img.02": "Nau del taller amb vehicles en reparació i la zona de mecànica",
  "meta.treballs.title": "Treballs reals de xapa i pintura · A BDN Planxa i Pintura",
  "meta.treballs.desc": "Casos reals del taller: abans, procés i resultat de reparacions de carrosseria, xapa i pintura a Badalona.",
  "work.intro": "Fotos fetes al taller durant reparacions reals.",
  "case2.title": "Reparació frontal",
  "img.12": "Frontal d’un cotxe fosc amb el para-xocs en procés de reparació",
  "case3.title": "Substitució de porta",
  "img.14": "Porta nova en aparell, abans de pintar",
  "img.15": "Cotxe amb la porta nova pintada i la porta vella a terra",
  "case4.title": "Reparació estructural amb unitat de tir",
  "inst.title": "Instal·lacions i mitjans tècnics",
  "inst.sub": "Acabats homogenis i control de color",
  "g.03": "Nau del taller",
  "img.03": "Vista general de la nau amb diversos vehicles en reparació",
  "g.04": "Cabina de pintura",
  "g.05": "Preparació a la cabina",
  "img.05": "Cotxe emmascarat dins de la cabina de pintura",
  "g.06": "Furgoneta a la cabina",
  "img.06": "Furgoneta preparada per pintar dins de la cabina",
  "g.07": "Bases de pintura",
  "img.07": "Prestatgeria amb les bases de pintura del taller",
  "g.08": "Preparació de color",
  "img.08": "Detall dels pots de pintura",
  "meta.ressenyes.title": "Ressenyes de clients · 5,0 a Google · A BDN Planxa i Pintura",
  "meta.ressenyes.desc": "Què en diuen els clients: 5,0 de 5 a Google. Ressenyes reals sobre la qualitat de la reparació, la rapidesa i el tracte.",
  "rev.page.title": "Ressenyes",
  "rev.page.sub": "El que diuen els clients a Google",
  "rev.valued": "Aspectes més valorats pels clients",
  "rev.v1": "Qualitat de la reparació",
  "rev.v2": "Rapidesa i eficiència",
  "rev.v3": "Professionalitat",
  "rev.v4": "Tracte proper",
  "rev.v5": "Transparència i confiança",
  "value.1": "Confiança",
  "value.2": "Qualitat",
  "value.3": "Rapidesa",
  "rev.google": "Veure-les totes a Google",
  "rev.note": "Ressenyes publicades a Google i reproduïdes literalment, en l’idioma original. Valoració consultada el 4 d’octubre de 2026.",
  "meta.contacte.title": "Contacte i pressupost · A BDN Planxa i Pintura (Badalona)",
  "meta.contacte.desc": "Demana pressupost de xapa i pintura o explica’ns el teu sinistre. Carrer del Rector, 54, Badalona.",
  "contact.title": "Contacte",
  "contact.sub": "Demana pressupost o explica’ns el teu cas",
  "contact.data": "Dades de contacte",
  "contact.address": "Adreça",
  "contact.phone": "Telèfon",
  "contact.hours": "Horari",
  "form.subject": "Nova sol·licitud des de la web",
  "form.legend": "Els camps amb * són obligatoris.",
  "form.name": "Nom i cognoms",
  "form.phone": "Telèfon",
  "form.email": "Correu electrònic",
  "form.optional": "Opcional",
  "form.topic": "Motiu",
  "form.topic0": "Tria una opció",
  "form.topic1": "Pressupost de xapa i pintura",
  "form.topic2": "Sinistre amb assegurança",
  "form.topic3": "Altres consultes",
  "form.message": "Explica’ns què li passa al cotxe",
  "form.messageHint": "Marca i model, què ha passat i si hi ha asseguradora.",
  "form.consent": "He llegit i accepto la <a href=\"#privacitat\">política de privacitat</a>.",
  "form.consentValue": "Accepto la política de privacitat",
  "form.privacy": "<strong>Protecció de dades.</strong> Responsable: A BDN PLANXA I PINTURA, S.L. Finalitat: atendre la teva sol·licitud. Legitimació: el teu consentiment. Destinataris: Web3Forms, que ens fa arribar el formulari per correu (encarregat del tractament; transferència internacional amb clàusules contractuals tipus). Drets: accés, rectificació, supressió i la resta que explica la <a href=\"#privacitat\">política de privacitat</a>.",
  "form.submit": "Envia la sol·licitud",
  "form.sending": "Enviant…",
  "form.success": "Gràcies. Hem rebut el teu missatge i et respondrem al més aviat possible.",
  "form.error": "No s’ha pogut enviar. Torna-ho a provar o truca’ns al 658 06 42 14.",
  "form.required": "Aquest camp és obligatori.",
  "form.badPhone": "Revisa el telèfon: calen almenys 9 xifres.",
  "form.badEmail": "Revisa el correu: ha de tenir la forma nom@domini.cat.",
  "form.mustConsent": "Per enviar el formulari has d’acceptar la política de privacitat.",
  "map.notice": "El mapa és un servei de Google Maps. Si el carregues, Google pot instal·lar galetes al teu navegador i en aquest navegador recordarem que ho has acceptat. Més informació a la <a href=\"#cookies\">política de cookies</a>.",
  "map.load": "Mostra el mapa",
  "map.title": "Mapa de situació d’A BDN Planxa i Pintura",
  "meta.avis.title": "Avís legal · A BDN Planxa i Pintura",
  "meta.avis.desc": "Dades del titular del web i condicions d’ús.",
  "meta.privacitat.title": "Política de privacitat · A BDN Planxa i Pintura",
  "meta.privacitat.desc": "Com tractem les dades que ens envies pel formulari de contacte.",
  "meta.cookies.title": "Política de cookies · A BDN Planxa i Pintura",
  "meta.cookies.desc": "Quines dades desa aquest web al teu navegador i com retirar el consentiment del mapa.",
  "legal.avis": "Avís legal",
  "legal.privacitat": "Política de privacitat",
  "legal.cookies": "Política de cookies",
  "legal.updated": "Darrera actualització: octubre de 2026",
  "cookies.revoke": "Retira el consentiment del mapa",
  "cookies.revoked": "Fet. El mapa no es tornarà a carregar sense el teu permís.",
  "meta.404.title": "Pàgina no trobada · A BDN Planxa i Pintura",
  "meta.404.desc": "Aquesta pàgina no existeix.",
  "nf.title": "Aquesta pàgina no existeix",
  "nf.text": "Potser l’enllaç és antic. Pots tornar a l’inici o anar directament al formulari de pressupost.",
  "nf.home": "Torna a l’inici"
 },
 "es": {
  "ui.skip": "Saltar al contenido",
  "ui.home": "A BDN Planxa i Pintura — inicio",
  "ui.menu": "Menú",
  "ui.nav": "Principal",
  "ui.lang": "Idioma",
  "ui.call": "Llámanos",
  "ui.quote": "Pide presupuesto",
  "ui.stars5": "5,0 de 5 estrellas",
  "nav.serveis": "Servicios",
  "nav.treballs": "Trabajos",
  "nav.ressenyes": "Opiniones",
  "nav.contacte": "Contacto",
  "brand.member": "Miembro del Grupo Marti Motors",
  "brand.tagline": "Especialistas en reparación integral de carrocería, chapa y pintura.",
  "footer.where": "Dónde estamos",
  "footer.directions": "Cómo llegar",
  "footer.contact": "Contacto",
  "footer.hours": "Horario",
  "hours.mt": "Lunes a jueves: 8:00–18:00",
  "hours.f": "Viernes: 7:00–14:00",
  "hours.we": "Sábado y domingo: cerrado",
  "footer.legal": "Aviso legal",
  "footer.privacy": "Privacidad",
  "footer.cookies": "Cookies",
  "rating.caption": "Valoración pública de clientes",
  "rating.count": "101 reseñas en Google",
  "review.source": "Reseña de Google",
  "review.full": "Leerla entera",
  "meta.index.title": "A BDN Planxa i Pintura · Taller de chapa y pintura en Badalona",
  "meta.index.desc": "Taller de chapa, pintura y carrocería en la calle Rector, 54, de Badalona. Gestionamos el siniestro con tu aseguradora. Valoración de 5,0 en Google.",
  "hero.sub": "Taller de chapa y pintura en Badalona",
  "hero.tagline": "Especialistas en reparación integral de carrocería, chapa y pintura",
  "img.01": "Técnico del taller trabajando en la rueda de un SUV blanco elevado en el puente",
  "claims.title": "Nos encargamos del siniestro",
  "claims.sub": "Taller colaborador de referencia de MAPFRE y SegurCaixa",
  "claims.lead": "Si tu aseguradora te ha derivado al taller o quieres traer el coche, nos hacemos cargo de toda la gestión: hablamos con el perito, tramitamos la documentación y te informamos de cada paso hasta la entrega.",
  "claims.s1": "Coordinación con el perito",
  "claims.s2": "Gestión documental",
  "claims.s3": "Seguimiento del expediente",
  "claims.s4": "Vehículo de sustitución",
  "claims.s5": "Control de calidad y entrega",
  "claims.b1": "Un único interlocutor",
  "claims.b2": "Mejor coordinación",
  "claims.b3": "Menor tiempo de inmovilización",
  "work.title": "Trabajos reales",
  "work.sub": "Evidencias del proceso de trabajo",
  "work.more": "Ver más trabajos",
  "case.before": "Antes",
  "case.process": "Proceso",
  "case.result": "Resultado",
  "case1.title": "Aleta y paragolpes trasero",
  "case1.desc": "Reparación de aleta y paragolpes trasero: corrección de daños, preparación, pintura e integración del acabado final con el resto de la carrocería.",
  "img.09": "Aleta y paragolpes trasero abollados, antes de la reparación",
  "img.10": "La misma zona con masilla y aparejo, durante la preparación",
  "img.11": "Aleta y paragolpes reparados y pintados",
  "rev.title": "Lo que dicen los clientes",
  "rev.sub": "Reseñas reales de Google, tal como las han escrito",
  "rev.all": "Todas las opiniones",
  "eco.title": "Cobertura integral del vehículo",
  "eco.sub": "Integrados en el Grupo Marti Motors",
  "eco.lead": "La integración en el Grupo Marti Motors nos permite ofrecer una gestión completa del vehículo: mecánica, diagnosis, mantenimiento, chapa, pintura, peritación y siniestros desde un mismo lugar. Estándares de calidad de gran grupo, con un trato cercano y flexible.",
  "eco.a1": "Chapa y pintura",
  "eco.a2": "Carrocería",
  "eco.a3": "Gestión de siniestros",
  "eco.a4": "Peritación y calidad",
  "eco.b1": "Mecánica general",
  "eco.b2": "Diagnosis avanzada",
  "eco.b3": "Revisiones y mantenimiento",
  "eco.b4": "ITV y verificaciones",
  "eco.more": "Ver los servicios",
  "img.04": "Cabina de pintura del taller",
  "cta.title": "Cuéntanos qué le ha pasado al coche",
  "cta.text": "Te respondemos con el presupuesto y los pasos a seguir, también si hay una aseguradora de por medio.",
  "cta.address": "Dirección",
  "cta.phone": "Teléfono",
  "cta.hours": "Horario",
  "cta.hoursShort": "L–J 8:00–18:00 · V 7:00–14:00",
  "meta.serveis.title": "Servicios de chapa, pintura y carrocería · A BDN Planxa i Pintura",
  "meta.serveis.desc": "Reparación multimarca de carrocería, chapa y pintura en Badalona: cabina de pintura profesional, reparación estructural y gestión integral de siniestros.",
  "serv.title": "Servicios",
  "serv.sub": "Capacidad operativa para reparaciones multimarca",
  "serv.intro": "Instalaciones preparadas para gestionar reparaciones de distinta complejidad, con zonas de trabajo, preparación, acabado y control final, para combinar calidad, productividad y seguimiento del proceso.",
  "s1.title": "Chapa y carrocería",
  "s1.text": "Reparación integral de carrocería multimarca: golpes frontales y traseros, reparaciones estructurales en bancada con unidad de tiro y sustitución de piezas.",
  "s1.l1": "Reparación integral de carrocería",
  "s1.l2": "Reparación estructural con unidad de tiro",
  "s1.l3": "Sustitución de piezas, como puertas",
  "s1.l4": "Control de calidad final",
  "img.16": "Parte trasera de un coche blanco fijada en la bancada con la unidad de tiro",
  "cap.16": "Reparación estructural con unidad de tiro",
  "s2.title": "Pintura",
  "s2.text": "Cabina profesional, preparación de color y control de acabado para asegurar una integración visual de alta calidad con el resto del vehículo.",
  "s2.l1": "Cabina de pintura profesional",
  "s2.l2": "Preparación de color",
  "s2.l3": "Acabados homogéneos y control de color",
  "s3.title": "Gestión de siniestros",
  "s3.text": "Somos taller colaborador de referencia de MAPFRE y SegurCaixa. Coordinamos la peritación y la documentación con la aseguradora y te mantenemos informado hasta que recuperas el coche.",
  "s3.l1": "Coordinación con peritos",
  "s3.l2": "Gestión documental",
  "s3.l3": "Seguimiento del expediente",
  "s3.l4": "Vehículos de sustitución",
  "s3.l5": "Control de calidad y entrega final",
  "s3.statement": "Un único interlocutor, mejor coordinación y menor tiempo de inmovilización.",
  "img.13": "Frontal de un coche oscuro después de la reparación",
  "s4.title": "Mecánica y mantenimiento con el Grupo Marti Motors",
  "s4.text": "Como parte del Grupo Marti Motors, también resolvemos la mecánica del vehículo, con un único interlocutor.",
  "img.02": "Nave del taller con vehículos en reparación y la zona de mecánica",
  "meta.treballs.title": "Trabajos reales de chapa y pintura · A BDN Planxa i Pintura",
  "meta.treballs.desc": "Casos reales del taller: antes, proceso y resultado de reparaciones de carrocería, chapa y pintura en Badalona.",
  "work.intro": "Fotos hechas en el taller durante reparaciones reales.",
  "case2.title": "Reparación frontal",
  "img.12": "Frontal de un coche oscuro con el paragolpes en proceso de reparación",
  "case3.title": "Sustitución de puerta",
  "img.14": "Puerta nueva en aparejo, antes de pintar",
  "img.15": "Coche con la puerta nueva pintada y la puerta vieja en el suelo",
  "case4.title": "Reparación estructural con unidad de tiro",
  "inst.title": "Instalaciones y medios técnicos",
  "inst.sub": "Acabados homogéneos y control de color",
  "g.03": "Nave del taller",
  "img.03": "Vista general de la nave con varios vehículos en reparación",
  "g.04": "Cabina de pintura",
  "g.05": "Preparación en la cabina",
  "img.05": "Coche enmascarado dentro de la cabina de pintura",
  "g.06": "Furgoneta en la cabina",
  "img.06": "Furgoneta preparada para pintar dentro de la cabina",
  "g.07": "Bases de pintura",
  "img.07": "Estantería con las bases de pintura del taller",
  "g.08": "Preparación de color",
  "img.08": "Detalle de los botes de pintura",
  "meta.ressenyes.title": "Opiniones de clientes · 5,0 en Google · A BDN Planxa i Pintura",
  "meta.ressenyes.desc": "Qué dicen los clientes: 5,0 de 5 en Google. Opiniones reales sobre la calidad de la reparación, la rapidez y el trato.",
  "rev.page.title": "Opiniones",
  "rev.page.sub": "Lo que dicen los clientes en Google",
  "rev.valued": "Aspectos más valorados por los clientes",
  "rev.v1": "Calidad de reparación",
  "rev.v2": "Rapidez y eficiencia",
  "rev.v3": "Profesionalidad",
  "rev.v4": "Trato cercano",
  "rev.v5": "Transparencia y confianza",
  "value.1": "Confianza",
  "value.2": "Calidad",
  "value.3": "Rapidez",
  "rev.google": "Verlas todas en Google",
  "rev.note": "Reseñas publicadas en Google y reproducidas literalmente, en su idioma original. Valoración consultada el 4 de octubre de 2026.",
  "meta.contacte.title": "Contacto y presupuesto · A BDN Planxa i Pintura (Badalona)",
  "meta.contacte.desc": "Pide presupuesto de chapa y pintura o cuéntanos tu siniestro. Calle Rector, 54, Badalona.",
  "contact.title": "Contacto",
  "contact.sub": "Pide presupuesto o cuéntanos tu caso",
  "contact.data": "Datos de contacto",
  "contact.address": "Dirección",
  "contact.phone": "Teléfono",
  "contact.hours": "Horario",
  "form.subject": "Nueva solicitud desde la web",
  "form.legend": "Los campos con * son obligatorios.",
  "form.name": "Nombre y apellidos",
  "form.phone": "Teléfono",
  "form.email": "Correo electrónico",
  "form.optional": "Opcional",
  "form.topic": "Motivo",
  "form.topic0": "Elige una opción",
  "form.topic1": "Presupuesto de chapa y pintura",
  "form.topic2": "Siniestro con aseguradora",
  "form.topic3": "Otras consultas",
  "form.message": "Cuéntanos qué le pasa al coche",
  "form.messageHint": "Marca y modelo, qué ha pasado y si hay aseguradora.",
  "form.consent": "He leído y acepto la <a href=\"#privacitat\">política de privacidad</a>.",
  "form.consentValue": "Acepto la política de privacidad",
  "form.privacy": "<strong>Protección de datos.</strong> Responsable: A BDN PLANXA I PINTURA, S.L. Finalidad: atender tu solicitud. Legitimación: tu consentimiento. Destinatarios: Web3Forms, que nos hace llegar el formulario por correo (encargado del tratamiento; transferencia internacional con cláusulas contractuales tipo). Derechos: acceso, rectificación, supresión y los demás que explica la <a href=\"#privacitat\">política de privacidad</a>.",
  "form.submit": "Enviar solicitud",
  "form.sending": "Enviando…",
  "form.success": "Gracias. Hemos recibido tu mensaje y te responderemos lo antes posible.",
  "form.error": "No se ha podido enviar. Inténtalo de nuevo o llámanos al 658 06 42 14.",
  "form.required": "Este campo es obligatorio.",
  "form.badPhone": "Revisa el teléfono: faltan cifras (mínimo 9).",
  "form.badEmail": "Revisa el correo: debe tener la forma nombre@dominio.es.",
  "form.mustConsent": "Para enviar el formulario debes aceptar la política de privacidad.",
  "map.notice": "El mapa es un servicio de Google Maps. Si lo cargas, Google puede instalar cookies en tu navegador y en este navegador recordaremos que lo has aceptado. Más información en la <a href=\"#cookies\">política de cookies</a>.",
  "map.load": "Mostrar el mapa",
  "map.title": "Mapa de situación de A BDN Planxa i Pintura",
  "meta.avis.title": "Aviso legal · A BDN Planxa i Pintura",
  "meta.avis.desc": "Datos del titular de la web y condiciones de uso.",
  "meta.privacitat.title": "Política de privacidad · A BDN Planxa i Pintura",
  "meta.privacitat.desc": "Cómo tratamos los datos que nos envías por el formulario de contacto.",
  "meta.cookies.title": "Política de cookies · A BDN Planxa i Pintura",
  "meta.cookies.desc": "Qué datos guarda esta web en tu navegador y cómo retirar el consentimiento del mapa.",
  "legal.avis": "Aviso legal",
  "legal.privacitat": "Política de privacidad",
  "legal.cookies": "Política de cookies",
  "legal.updated": "Última actualización: octubre de 2026",
  "cookies.revoke": "Retirar el consentimiento del mapa",
  "cookies.revoked": "Hecho. El mapa no volverá a cargarse sin tu permiso.",
  "meta.404.title": "Página no encontrada · A BDN Planxa i Pintura",
  "meta.404.desc": "Esta página no existe.",
  "nf.title": "Esta página no existe",
  "nf.text": "Quizá el enlace es antiguo. Puedes volver al inicio o ir directamente al formulario de presupuesto.",
  "nf.home": "Volver al inicio"
 }
};

  var LANGS = ['ca', 'es'];
  var KEY_LANG = 'abdn-lang';
  var KEY_MAPS = 'abdn-maps';

  function store(k, v) { try { if (v === null) { localStorage.removeItem(k); } else { localStorage.setItem(k, v); } } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function detectLang() {
    var q = null;
    try { q = new URLSearchParams(window.location.search).get('lang'); } catch (e) { q = null; }
    if (LANGS.indexOf(q) !== -1) { store(KEY_LANG, q); return q; }
    var saved = read(KEY_LANG);
    if (LANGS.indexOf(saved) !== -1) { return saved; }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    return nav.toLowerCase().indexOf('es') === 0 ? 'es' : 'ca';
  }

  var lang = 'ca';
  function t(key) {
    var d = i18n[lang] || i18n.ca;
    if (d[key] !== undefined) { return d[key]; }
    return i18n.ca[key] !== undefined ? i18n.ca[key] : key;
  }

  function apply(next) {
    lang = LANGS.indexOf(next) !== -1 ? next : 'ca';
    document.documentElement.lang = lang;
    qsa('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    qsa('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    qsa('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2) { el.setAttribute(p[0].trim(), t(p[1].trim())); }
      });
    });
    qsa('[data-lang-block]').forEach(function (el) { el.hidden = el.getAttribute('data-lang-block') !== lang; });
    qsa('.ab-lang__opt[data-lang]').forEach(function (b) {
      if (b.getAttribute('data-lang') === lang) { b.setAttribute('aria-current', 'true'); } else { b.removeAttribute('aria-current'); }
    });
    qsa('input[name="idioma"]').forEach(function (el) { el.value = lang; });
  }

  function initLangSwitch() {
    qsa('.ab-lang__opt[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = b.getAttribute('data-lang');
        store(KEY_LANG, next);
        apply(next);
      });
    });
  }

  function initMenu() {
    var toggle = document.querySelector('.ab-header__toggle');
    var nav = document.getElementById(toggle ? toggle.getAttribute('aria-controls') : '');
    if (!toggle || !nav) { return; }
    function set(open) { toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); nav.classList.toggle('is-open', open); }
    toggle.addEventListener('click', function () { set(toggle.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { set(false); toggle.focus(); } });
    qsa('a', nav).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  }

  function initYear() {
    qsa('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
  }

  /* ---------- Formulari (Web3Forms) ---------- */
  function initForm() {
    var form = document.querySelector('form[data-form]');
    if (!form) { return; }
    var statusEl = form.querySelector('[data-form-status]');
    var submit = form.querySelector('button[type="submit"]');

    function field(name) { return form.elements[name]; }
    function setError(name, key) {
      var input = field(name);
      if (!input) { return; }
      var wrap = input.closest('.ab-field, .ab-check');
      var err = form.querySelector('[data-error-for="' + name + '"]');
      if (key) {
        if (wrap && wrap.classList.contains('ab-field')) { wrap.classList.add('ab-field--error'); }
        input.setAttribute('aria-invalid', 'true');
        if (err) { err.hidden = false; err.setAttribute('data-i18n', key); err.textContent = t(key); }
      } else {
        if (wrap) { wrap.classList.remove('ab-field--error'); }
        input.removeAttribute('aria-invalid');
        if (err) { err.hidden = true; err.removeAttribute('data-i18n'); err.textContent = ''; }
      }
    }
    function validate() {
      var errors = [];
      var name = field('name').value.trim();
      var phone = field('phone').value.trim();
      var email = field('email').value.trim();
      var message = field('message').value.trim();
      var consent = field('consentiment').checked;
      if (!name) { errors.push(['name', 'form.required']); }
      if (!phone) { errors.push(['phone', 'form.required']); } else if (phone.replace(/\D/g, '').length < 9) { errors.push(['phone', 'form.badPhone']); }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { errors.push(['email', 'form.badEmail']); }
      if (!message) { errors.push(['message', 'form.required']); }
      if (!consent) { errors.push(['consentiment', 'form.mustConsent']); }
      ['name', 'phone', 'email', 'message', 'consentiment'].forEach(function (n) { setError(n, null); });
      errors.forEach(function (e) { setError(e[0], e[1]); });
      return errors;
    }
    function showStatus(kind, key) {
      if (!statusEl) { return; }
      statusEl.hidden = false;
      statusEl.className = 'ab-form__status ab-form__status--' + kind;
      statusEl.setAttribute('role', kind === 'error' ? 'alert' : 'status');
      statusEl.setAttribute('data-i18n', key);
      statusEl.textContent = t(key);
    }

    ['name', 'phone', 'email', 'message'].forEach(function (n) {
      var el = field(n);
      if (el) { el.addEventListener('input', function () { if (el.getAttribute('aria-invalid')) { setError(n, null); } }); }
    });
    field('consentiment').addEventListener('change', function () { if (field('consentiment').checked) { setError('consentiment', null); } });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var errors = validate();
      if (errors.length) { field(errors[0][0]).focus(); return; }
      if (field('botcheck') && field('botcheck').checked) { return; }
      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      var label = submit.querySelector('[data-i18n]');
      if (label) { label.setAttribute('data-i18n', 'form.sending'); label.textContent = t('form.sending'); }
      if (statusEl) { statusEl.hidden = true; }
      var payload = {};
      new FormData(form).forEach(function (v, k) { payload[k] = v; });
      fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (!data || data.success !== true) { throw new Error('send'); }
          var ok = document.createElement('p');
          ok.className = 'ab-form__status ab-form__status--success';
          ok.setAttribute('role', 'status');
          ok.setAttribute('tabindex', '-1');
          ok.setAttribute('data-i18n', 'form.success');
          ok.textContent = t('form.success');
          form.replaceWith(ok);
          ok.focus();
        })
        .catch(function () {
          showStatus('error', 'form.error');
          submit.disabled = false;
          submit.removeAttribute('aria-busy');
          if (label) { label.setAttribute('data-i18n', 'form.submit'); label.textContent = t('form.submit'); }
        });
    });
  }

  /* ---------- Mapa: només es carrega amb consentiment (galetes de Google) ---------- */
  function initMap() {
    var box = document.querySelector('[data-map]');
    if (box) {
      var load = function () {
        var consent = box.querySelector('.map__consent');
        var frame = document.createElement('iframe');
        frame.className = 'map__frame';
        frame.src = box.getAttribute('data-src');
        frame.title = 'Google Maps · A BDN Planxa i Pintura';
        frame.loading = 'lazy';
        frame.referrerPolicy = 'no-referrer-when-downgrade';
        frame.setAttribute('allowfullscreen', '');
        box.insertBefore(frame, box.firstChild);
        if (consent) {
          var btn = consent.querySelector('[data-map-load]');
          var txt = consent.querySelector('p');
          if (btn) { btn.remove(); }
          if (txt) { txt.remove(); }
        }
      };
      var btn = box.querySelector('[data-map-load]');
      if (read(KEY_MAPS) === '1') { load(); }
      else if (btn) { btn.addEventListener('click', function () { store(KEY_MAPS, '1'); load(); }); }
    }
    qsa('[data-maps-revoke]').forEach(function (b) {
      b.addEventListener('click', function () {
        store(KEY_MAPS, null);
        var out = document.querySelector('[data-maps-revoked]');
        if (out) { out.hidden = false; }
      });
    });
  }

  var ROUTES = { 'inici': 'index', 'serveis': 'serveis', 'treballs': 'treballs', 'ressenyes': 'ressenyes', 'contacte': 'contacte', 'avis-legal': 'avis', 'privacitat': 'privacitat', 'cookies': 'cookies' };
  function route() {
    var h = decodeURIComponent((window.location.hash || '').slice(1));
    var parts = h.split('--'), r = parts[0], anchor = parts[1];
    if (!ROUTES[r]) {
      if (h && document.getElementById(h)) { return; }
      r = 'inici';
    }
    qsa('[data-route]').forEach(function (s) { s.hidden = s.getAttribute('data-route') !== r; });
    qsa('.ab-header__link').forEach(function (a) { if (a.getAttribute('href') === '#' + r) { a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); } });
    var key = 'meta.' + ROUTES[r] + '.title';
    document.querySelector('title').setAttribute('data-i18n', key);
    document.title = t(key);
    var target = anchor ? document.getElementById(anchor) : null;
    if (target) { target.scrollIntoView(); } else { window.scrollTo(0, 0); }
  }

  function start() {
    apply(detectLang());
    route();
    window.addEventListener('hashchange', route);
    initLangSwitch();
    initMenu();
    initYear();
    initForm();
    initMap();
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', start); } else { start(); }
})();

