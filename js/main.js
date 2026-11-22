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
  "nav.inici": "Inici",
  "deck.pause": "Atura la reproducció",
  "deck.play": "Reprèn la reproducció",
  "deck.title": "Abans i després",
  "deck.hint": "Mantén premuda la foto per veure el resultat",
  "deck.hintHover": "Passa el ratolí per sobre de la foto per veure el resultat",
  "deck.prev": "Reparació anterior",
  "deck.next": "Reparació següent",
  "deck.region": "Reparacions abans i després",
  "deck.stages": "Etapes de la reparació",
  "flip.sub": "Toca una foto per girar-la i veure el resultat",
  "flip.subHover": "Passa el ratolí per sobre d’una foto per veure el resultat",
  "flip.turn": "Gira la foto",
  "stage.before": "Abans",
  "stage.process": "Procés",
  "stage.after": "Després",
  "stage.result": "Resultat",
  "case.portes": "Portes laterals",
  "case.portes.0": "Portes laterals d’un SUV gris enfonsades i ratllades",
  "case.portes.1": "Les dues portes amb aprest, abans de pintar",
  "case.portes.2": "El SUV amb les portes reparades i pintades",
  "case.davanter": "Para-xocs davanter",
  "case.davanter.0": "Para-xocs davanter d’un SUV gris amb ratllades fondes",
  "case.davanter.1": "El mateix para-xocs reparat i pintat",
  "case.porta": "Porta lateral",
  "case.porta.0": "Furgoneta verda amb la porta del conductor ratllada",
  "case.porta.1": "La porta reparada i pintada del mateix color",
  "case.classic": "Clàssic: capó i pintura",
  "case.classic.0": "Capó d’un descapotable clàssic amb massilla, durant la preparació",
  "case.classic.1": "El descapotable clàssic acabat, a la porta del taller",
  "case.aleta": "Aleta i para-xocs posterior",
  "case.aleta.0": "Aleta i para-xocs posterior abonyegats, abans de la reparació",
  "case.aleta.1": "La mateixa zona amb massilla i aparell, durant la preparació",
  "case.aleta.2": "Aleta i para-xocs reparats i pintats",
  "case.vermell": "Aleta posterior",
  "case.vermell.0": "Aleta posterior d’un cotxe vermell enfonsada, abans de la reparació",
  "case.vermell.1": "El mateix cotxe vermell amb l’aleta reparada i pintada",
  "trust.label": "Garanties del taller",
  "trust.mapfre": "Taller col·laborador de MAPFRE",
  "trust.segurcaixa": "Taller col·laborador de SegurCaixa",
  "trust.insurers": "Treballem amb totes les asseguradores",
  "trust.brands": "Totes les marques i models",
  "trust.rating": "5,0 a Google · 101 ressenyes",
  "trust.group": "Membre del Grupo Marti Motors",
  "ba.pause": "Atura el carrusel",
  "ba.play": "Reprèn el carrusel",
  "credit.nx": "<span class=\"nx-credit__part\">Disseny i desenvolupament web per <a href=\"https://nexmetis.nexsocial.org/\" target=\"_blank\" rel=\"noopener\">Nexmetis Tech</a></span> <span class=\"nx-credit__sep\" aria-hidden=\"true\">·</span> <span class=\"nx-credit__part\">Divisió tecnològica de <a href=\"https://nexsocial.org/\" target=\"_blank\" rel=\"noopener\">NexSocial SCCL</a></span>",
  "bar.call": "Truca",
  "bar.quote": "Pressupost",
  "bar.label": "Contacte ràpid",
  "ba.title": "Abans i després",
  "ba.sub": "Llisca per veure més reparacions",
  "ba.prev": "Reparació anterior",
  "ba.next": "Reparació següent",
  "ba.region": "Reparacions abans i després",
  "ba.before": "Abans",
  "ba.after": "Després",
  "ba.1.title": "Aleta posterior",
  "ba.1.a": "Aleta posterior d’un cotxe vermell enfonsada, abans de la reparació",
  "ba.1.b": "El mateix cotxe vermell amb l’aleta reparada i pintada",
  "ba.2.title": "Aleta i para-xocs posterior",
  "ba.2.a": "Aleta i para-xocs posterior abonyegats, abans de la reparació",
  "ba.2.b": "Aleta i para-xocs reparats i pintats",
  "nav.serveis": "Serveis",
  "wa.label": "Escriu-nos per WhatsApp",
  "wa.href": "https://wa.me/34658064214?text=Hola%2C%20us%20escric%20des%20de%20la%20web.%20Voldria%20demanar%20pressupost%20per%20al%20meu%20cotxe.",
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
  "rating.count": "101 ressenyes a Google",
  "review.source": "Ressenya de Google",
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
  "nf.home": "Torna a l’inici",
  "rev.excellent": "Excel·lent",
  "rev.basedOn": "Basada en <strong>101</strong> ressenyes de Google",
  "rev.more": "Llegir més",
  "rev.less": "Llegir menys",
  "rev.prev": "Ressenyes anteriors",
  "rev.next": "Ressenyes següents",
  "rev.region": "Ressenyes de clients a Google"
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
  "nav.inici": "Inicio",
  "deck.pause": "Detener la reproducción",
  "deck.play": "Reanudar la reproducción",
  "deck.title": "Antes y después",
  "deck.hint": "Mantén pulsada la foto para ver el resultado",
  "deck.hintHover": "Pasa el ratón por encima de la foto para ver el resultado",
  "deck.prev": "Reparación anterior",
  "deck.next": "Reparación siguiente",
  "deck.region": "Reparaciones antes y después",
  "deck.stages": "Etapas de la reparación",
  "flip.sub": "Toca una foto para girarla y ver el resultado",
  "flip.subHover": "Pasa el ratón por encima de una foto para ver el resultado",
  "flip.turn": "Gira la foto",
  "stage.before": "Antes",
  "stage.process": "Proceso",
  "stage.after": "Después",
  "stage.result": "Resultado",
  "case.portes": "Puertas laterales",
  "case.portes.0": "Puertas laterales de un SUV gris hundidas y rayadas",
  "case.portes.1": "Las dos puertas con aparejo, antes de pintar",
  "case.portes.2": "El SUV con las puertas reparadas y pintadas",
  "case.davanter": "Paragolpes delantero",
  "case.davanter.0": "Paragolpes delantero de un SUV gris con rayas profundas",
  "case.davanter.1": "El mismo paragolpes reparado y pintado",
  "case.porta": "Puerta lateral",
  "case.porta.0": "Furgoneta verde con la puerta del conductor rayada",
  "case.porta.1": "La puerta reparada y pintada del mismo color",
  "case.classic": "Clásico: capó y pintura",
  "case.classic.0": "Capó de un descapotable clásico con masilla, durante la preparación",
  "case.classic.1": "El descapotable clásico terminado, en la puerta del taller",
  "case.aleta": "Aleta y paragolpes trasero",
  "case.aleta.0": "Aleta y paragolpes trasero abollados, antes de la reparación",
  "case.aleta.1": "La misma zona con masilla y aparejo, durante la preparación",
  "case.aleta.2": "Aleta y paragolpes reparados y pintados",
  "case.vermell": "Aleta trasera",
  "case.vermell.0": "Aleta trasera de un coche rojo hundida, antes de la reparación",
  "case.vermell.1": "El mismo coche rojo con la aleta reparada y pintada",
  "trust.label": "Garantías del taller",
  "trust.mapfre": "Taller colaborador de MAPFRE",
  "trust.segurcaixa": "Taller colaborador de SegurCaixa",
  "trust.insurers": "Trabajamos con todas las aseguradoras",
  "trust.brands": "Todas las marcas y modelos",
  "trust.rating": "5,0 en Google · 101 reseñas",
  "trust.group": "Miembro del Grupo Marti Motors",
  "ba.pause": "Detener el carrusel",
  "ba.play": "Reanudar el carrusel",
  "credit.nx": "<span class=\"nx-credit__part\">Diseño y desarrollo web por <a href=\"https://nexmetis.nexsocial.org/\" target=\"_blank\" rel=\"noopener\">Nexmetis Tech</a></span> <span class=\"nx-credit__sep\" aria-hidden=\"true\">·</span> <span class=\"nx-credit__part\">División tecnológica de <a href=\"https://nexsocial.org/\" target=\"_blank\" rel=\"noopener\">NexSocial SCCL</a></span>",
  "bar.call": "Llama",
  "bar.quote": "Presupuesto",
  "bar.label": "Contacto rápido",
  "ba.title": "Antes y después",
  "ba.sub": "Desliza para ver más reparaciones",
  "ba.prev": "Reparación anterior",
  "ba.next": "Reparación siguiente",
  "ba.region": "Reparaciones antes y después",
  "ba.before": "Antes",
  "ba.after": "Después",
  "ba.1.title": "Aleta trasera",
  "ba.1.a": "Aleta trasera de un coche rojo hundida, antes de la reparación",
  "ba.1.b": "El mismo coche rojo con la aleta reparada y pintada",
  "ba.2.title": "Aleta y paragolpes trasero",
  "ba.2.a": "Aleta y paragolpes trasero abollados, antes de la reparación",
  "ba.2.b": "Aleta y paragolpes reparados y pintados",
  "nav.serveis": "Servicios",
  "wa.label": "Escríbenos por WhatsApp",
  "wa.href": "https://wa.me/34658064214?text=Hola%2C%20os%20escribo%20desde%20la%20web.%20Quer%C3%ADa%20pedir%20presupuesto%20para%20mi%20coche.",
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
  "rating.count": "101 reseñas en Google",
  "review.source": "Reseña de Google",
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
  "nf.home": "Volver al inicio",
  "rev.excellent": "Excelente",
  "rev.basedOn": "Basada en <strong>101</strong> reseñas de Google",
  "rev.more": "Leer más",
  "rev.less": "Leer menos",
  "rev.prev": "Reseñas anteriores",
  "rev.next": "Reseñas siguientes",
  "rev.region": "Reseñas de clientes en Google"
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
        setTimeout(function () { document.dispatchEvent(new CustomEvent('abdn:lang')); }, 0);
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



  /* ---------- Capçalera: estat en fer scroll ---------- */
  function initHeaderScroll() {
    var header = document.querySelector('.ab-header');
    if (!header) { return; }
    var ticking = false;
    function update() { header.classList.toggle('is-scrolled', window.scrollY > 12); ticking = false; }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Aparicions en fer scroll (respecta «reduir moviment») ---------- */
  function initReveal() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { return; }
    var sel = ['.section .ab-section', '.section .ab-case', '.section .ba', '.section .rw', '.section .case',
               '.section .gallery > li', '.section .ab-panel', '.section .ab-value-tile', '.section .ab-form',
               '.section .ab-band', '.page-head .wrap > *'].join(',');
    var els = qsa(sel).filter(function (el) { return !el.closest('.ab-hero') && !el.parentElement.closest('.rv'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) {
      var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--rv-delay', (Math.min(sibs, 4) * 70) + 'ms');
      el.classList.add('rv');
      io.observe(el);
    });
    /* reserva: en canviar de pàgina (#ruta) o fer scroll, mostra el que ja és a la vista */
    function sweep() {
      var vh = window.innerHeight;
      qsa('.rv:not(.is-in)').forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.height > 0 && r.top < vh * 0.96) { el.classList.add('is-in'); io.unobserve(el); }
      });
    }
    var t = null;
    function later() { if (t) { return; } t = setTimeout(function () { t = null; sweep(); }, 80); }
    window.addEventListener('hashchange', function () { window.requestAnimationFrame(later); });
    window.addEventListener('scroll', later, { passive: true });
    window.addEventListener('resize', later);
    later();
  }


  /* ---------- Garanties: apareixen en onada + llum que segueix el cursor ---------- */
  function initGuarantees() {
    qsa('[data-guarantees]').forEach(function (root) {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce && 'IntersectionObserver' in window) {
        root.classList.add('is-armed');
        var io = new IntersectionObserver(function (es) {
          if (es[0].isIntersecting) { root.classList.add('is-in'); io.disconnect(); }
        }, { threshold: 0.35 });
        io.observe(root);
        setTimeout(function () { root.classList.add('is-in'); }, 6000); /* reserva */
      }
      var grid = root.querySelector('.ab-g__grid');
      if (!grid || !window.matchMedia('(hover: hover)').matches) { return; }
      var cardsEl = qsa('.ab-g__card', grid);
      grid.addEventListener('pointermove', function (e) {
        cardsEl.forEach(function (c) {
          var r = c.getBoundingClientRect();
          c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
          c.style.setProperty('--my', (e.clientY - r.top) + 'px');
        });
        grid.classList.add('is-lit');
      });
      grid.addEventListener('pointerleave', function () { grid.classList.remove('is-lit'); });
    });
  }


  /* ---------- Baralla abans/després (inici) ---------- */
  var CAN_HOVER = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function initDeck() {
    qsa('[data-deck]').forEach(function (root) {
      if (!root.classList.contains('deck')) { return; }
      var stack = root.querySelector('.deck__stack');
      var cards = qsa('.deck__card', stack);
      var order = cards.map(function (_c, i) { return i; });
      var titleEl = root.querySelector('[data-deck-title]');
      var nEl = root.querySelector('[data-deck-n]');
      var stagesEl = root.querySelector('[data-deck-stages]');
      var hint = root.querySelector('[data-deck-hint]');
      var busy = false, stage = 0, peek = false;
      if (hint && CAN_HOVER) { hint.setAttribute('data-i18n', 'deck.hintHover'); hint.textContent = t('deck.hintHover'); }
      root.classList.add('is-ready');

      function top() { return cards[order[0]]; }
      function stagesOf(c) { return c.getAttribute('data-stages').split(','); }
      function paint() {
        var c = top(), st = stagesOf(c), show = peek ? st.length - 1 : stage;
        qsa('.deck__layer', c).forEach(function (l, i) {
          var on = i === show;
          l.classList.toggle('is-on', on);
          var img = l.querySelector('img'); if (img) { img.setAttribute('aria-hidden', on ? 'false' : 'true'); }
        });
        qsa('.deck__stage', stagesEl).forEach(function (b, i) { b.setAttribute('aria-pressed', i === show ? 'true' : 'false'); });
      }
      function layout() {
        order.forEach(function (ci, pos) {
          var c = cards[ci];
          c.style.setProperty('--pos', pos);
          c.classList.toggle('is-top', pos === 0);
          c.classList.toggle('is-far', pos >= 4);
          if (pos === 0) { c.removeAttribute('aria-hidden'); } else { c.setAttribute('aria-hidden', 'true'); }
        });
        var c = top(), id = c.getAttribute('data-case');
        titleEl.setAttribute('data-i18n', 'case.' + id); titleEl.textContent = t('case.' + id);
        nEl.textContent = String(order[0] + 1);
        stagesEl.innerHTML = '';
        stagesOf(c).forEach(function (st, i) {
          var b = document.createElement('button');
          b.type = 'button'; b.className = 'deck__stage';
          b.setAttribute('data-i18n', 'stage.' + st); b.textContent = t('stage.' + st);
          b.addEventListener('click', function () { stage = i; peek = false; paint(); });
          stagesEl.appendChild(b);
        });
        stage = 0; peek = false; paint();
      }
      function go(dir) {
        if (busy) { return; }
        var c = top();
        if (REDUCE) { rotate(dir); layout(); return; }
        busy = true;
        if (dir > 0) {
          c.style.setProperty('--fling', (c._dx && c._dx < 0) ? '-1' : '1');
          c.classList.add('is-leaving');
          setTimeout(function () { c.classList.remove('is-leaving'); c.classList.add('is-snap'); rotate(1); layout(); requestAnimationFrame(function () { requestAnimationFrame(function () { c.classList.remove('is-snap'); busy = false; }); }); }, 380);
        } else {
          var last = cards[order[order.length - 1]];
          last.classList.add('is-snap', 'is-entering');
          rotate(-1); layout();
          requestAnimationFrame(function () { requestAnimationFrame(function () { last.classList.remove('is-snap'); last.classList.remove('is-entering'); setTimeout(function () { busy = false; }, 380); }); });
        }
        c._dx = 0;
      }
      function rotate(dir) { if (dir > 0) { order.push(order.shift()); } else { order.unshift(order.pop()); } }

      root.querySelector('[data-deck="next"]').addEventListener('click', function () { go(1); });
      root.querySelector('[data-deck="prev"]').addEventListener('click', function () { go(-1); });
      root.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      });

      /* veure el resultat: ratolí a sobre o dit premut; arrossegar per passar */
      var sx = 0, sy = 0, dragging = false, pid = null;
      stack.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { peek = true; paint(); } });
      stack.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { peek = false; paint(); } });
      stack.addEventListener('pointerdown', function (e) {
        if (busy || !e.target.closest('.deck__card.is-top')) { return; }
        pid = e.pointerId; sx = e.clientX; sy = e.clientY; dragging = false; peek = true; paint();
        try { stack.setPointerCapture(pid); } catch (err) {}
      });
      stack.addEventListener('pointermove', function (e) {
        if (e.pointerId !== pid) { return; }
        var dx = e.clientX - sx, dy = e.clientY - sy;
        if (!dragging && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { dragging = true; top().classList.add('is-drag'); }
        if (dragging) { var c = top(); c._dx = dx; c.style.setProperty('--dx', dx + 'px'); c.style.setProperty('--rot', (dx / 22) + 'deg'); }
      });
      function end(e) {
        if (e.pointerId !== pid) { return; }
        var c = top(); pid = null;
        if (e.pointerType !== 'mouse') { peek = false; }
        c.classList.remove('is-drag');
        if (dragging && Math.abs(c._dx || 0) > 90) { go(1); }
        c.style.setProperty('--dx', '0px'); c.style.setProperty('--rot', '0deg'); dragging = false; paint();
      }
      stack.addEventListener('pointerup', end);
      stack.addEventListener('pointercancel', end);
      layout();
      document.addEventListener('abdn:lang', layout);

      /* reproducció automàtica */
      var toggle = root.querySelector('[data-deck="toggle"]');
      var bar = root.querySelector('[data-deck-bar]');
      var timer = null, userPaused = REDUCE, hover = false, visible = false, touchT = null;
      var STEP = 2000, AFTER = 2600;
      function running() { return !userPaused && !hover && visible && !document.hidden && !root.closest('[hidden]'); }
      function setBar(ms) {
        if (!bar) { return; }
        bar.style.transition = 'none'; bar.style.transform = 'scaleX(0)';
        if (ms) { void bar.offsetWidth; bar.style.transition = 'transform ' + ms + 'ms linear'; bar.style.transform = 'scaleX(1)'; }
      }
      function step() {
        timer = null;
        if (!running()) { setBar(0); return; }
        var st = stagesOf(top());
        if (stage < st.length - 1) { stage++; peek = false; paint(); var wait = stage === st.length - 1 ? AFTER : STEP; timer = setTimeout(step, wait); }
        else { go(1); timer = setTimeout(step, STEP + 400); setBar(STEP * (stagesOf(cards[order[0]]).length - 1) + AFTER + 400); }
      }
      function schedule() {
        clearTimeout(timer); timer = null;
        root.classList.toggle('is-playing', running());
        if (running()) {
          var st = stagesOf(top()), rest = STEP * (st.length - 1 - stage) + AFTER;
          setBar(rest); timer = setTimeout(step, STEP);
        } else { setBar(0); }
      }
      function setPaused(p) {
        userPaused = p;
        toggle.setAttribute('aria-pressed', p ? 'true' : 'false');
        toggle.setAttribute('data-i18n-attr', 'aria-label:' + (p ? 'deck.play' : 'deck.pause'));
        toggle.setAttribute('aria-label', t(p ? 'deck.play' : 'deck.pause'));
        schedule();
      }
      toggle.addEventListener('click', function () { setPaused(!userPaused); });
      root.addEventListener('mouseenter', function () { hover = true; schedule(); });
      root.addEventListener('mouseleave', function () { hover = false; schedule(); });
      root.addEventListener('focusin', function (e) { if (e.target !== toggle) { hover = true; schedule(); } });
      root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { hover = false; schedule(); } });
      stack.addEventListener('touchstart', function () { clearTimeout(touchT); hover = true; schedule(); }, { passive: true });
      stack.addEventListener('touchend', function () { clearTimeout(touchT); touchT = setTimeout(function () { hover = false; schedule(); }, 5000); }, { passive: true });
      qsa('[data-deck="prev"], [data-deck="next"]', root).forEach(function (b) { b.addEventListener('click', function () { setTimeout(schedule, 50); }); });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { visible = es[0].isIntersecting; schedule(); }, { threshold: 0.45 }).observe(root);
      } else { visible = true; }
      document.addEventListener('visibilitychange', schedule);
      window.addEventListener('hashchange', function () { setTimeout(schedule, 80); });
      if (REDUCE) { setPaused(true); } else { schedule(); }
    });
  }

  /* ---------- Graella que es gira (Treballs) ---------- */
  function initFlips() {
    var sub = document.querySelector('[data-flip-sub]');
    if (sub && CAN_HOVER) { sub.setAttribute('data-i18n', 'flip.subHover'); sub.textContent = t('flip.subHover'); }
    qsa('[data-flips] .flip').forEach(function (b) {
      var id = b.getAttribute('data-flip-label');
      function label() { b.setAttribute('aria-label', t('case.' + id) + ': ' + t('flip.turn').toLowerCase()); }
      label(); document.addEventListener('abdn:lang', label);
      b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); });
      if (CAN_HOVER) {
        b.addEventListener('mouseenter', function () { b.classList.add('is-hover'); });
        b.addEventListener('mouseleave', function () { b.classList.remove('is-hover'); });
      }
    });
  }

  /* ---------- Carrusel abans/després (automàtic, amb pausa) ---------- */
  var BA_DELAY = 5000;
  function initBeforeAfter() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    qsa('[data-ba]').forEach(function (root) {
      if (!root.classList.contains('ba')) { return; }
      var track = root.querySelector('.ba__track');
      var items = qsa('.ba__item', track);
      var dots = qsa('[data-ba-dot]', root);
      var toggle = root.querySelector('[data-ba="toggle"]');
      var timer = null, userPaused = reduce, hover = false, visible = false;
      if (items.length < 2) { if (toggle) { toggle.hidden = true; } return; }

      function index() { return Math.round(track.scrollLeft / Math.max(1, track.clientWidth)); }
      function go(i) {
        i = (i + items.length) % items.length;
        track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
      }
      function update() {
        var i = index();
        dots.forEach(function (d, k) { if (k === i) { d.setAttribute('aria-current', 'true'); } else { d.removeAttribute('aria-current'); } });
      }
      function running() { return !userPaused && !hover && visible && !document.hidden && !root.closest('[hidden]'); }
      function schedule() {
        clearTimeout(timer); timer = null;
        if (running()) { timer = setTimeout(function () { go(index() + 1); schedule(); }, BA_DELAY); }
        root.classList.toggle('is-playing', !!timer);
      }
      function setPaused(p) {
        userPaused = p;
        toggle.setAttribute('aria-pressed', p ? 'true' : 'false');
        toggle.setAttribute('data-i18n-attr', 'aria-label:' + (p ? 'ba.play' : 'ba.pause'));
        toggle.setAttribute('aria-label', t(p ? 'ba.play' : 'ba.pause'));
        schedule();
      }

      root.querySelector('[data-ba="prev"]').addEventListener('click', function () { go(index() - 1); schedule(); });
      root.querySelector('[data-ba="next"]').addEventListener('click', function () { go(index() + 1); schedule(); });
      dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); schedule(); }); });
      toggle.addEventListener('click', function () { setPaused(!userPaused); });
      track.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(index() - 1); schedule(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(index() + 1); schedule(); }
      });
      /* s'atura mentre el ratolí, el dit o el focus són a sobre */
      root.addEventListener('mouseenter', function () { hover = true; schedule(); });
      root.addEventListener('mouseleave', function () { hover = false; schedule(); });
      root.addEventListener('focusin', function () { hover = true; schedule(); });
      root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { hover = false; schedule(); } });
      track.addEventListener('touchstart', function () { hover = true; schedule(); }, { passive: true });
      track.addEventListener('touchend', function () { setTimeout(function () { hover = false; schedule(); }, 4000); }, { passive: true });
      /* només corre quan és a la pantalla i la pestanya és visible */
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) { visible = es[0].isIntersecting; schedule(); }, { threshold: 0.4 }).observe(root);
      } else { visible = true; }
      document.addEventListener('visibilitychange', schedule);
      window.addEventListener('hashchange', function () { setTimeout(function () { update(); schedule(); }, 60); });

      var tm; track.addEventListener('scroll', function () { clearTimeout(tm); tm = setTimeout(update, 60); }, { passive: true });
      window.addEventListener('resize', update);
      if (reduce) { setPaused(true); }
      update(); schedule();
    });
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

  /* ---------- Ressenyes: carrusel i «Llegir més» ---------- */
  function initReviews() {
    qsa('[data-reviews]').forEach(function (root) {
      var track = root.querySelector('.rw__track');
      var prev = root.querySelector('[data-rw="prev"]');
      var next = root.querySelector('[data-rw="next"]');
      if (!track) { return; }
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      function step() {
        var item = track.querySelector('.rw__item');
        var gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
        return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
      }
      function go(dir) { track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' }); }
      function update() {
        var max = track.scrollWidth - track.clientWidth - 6;
        if (prev) { prev.disabled = track.scrollLeft <= 6; }
        if (next) { next.disabled = track.scrollLeft >= max; }
      }
      function measure() {
        qsa('.rw-card', root).forEach(function (card) {
          var text = card.querySelector('.rw-card__text');
          var btn = card.querySelector('.rw-card__more');
          if (!text || !btn || card.classList.contains('is-open')) { return; }
          btn.hidden = text.scrollHeight <= text.clientHeight + 2;
        });
        update();
      }
      if (prev) { prev.addEventListener('click', function () { go(-1); }); }
      if (next) { next.addEventListener('click', function () { go(1); }); }
      track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
      track.addEventListener('keydown', function (e) {
        if (e.target !== track) { return; }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      });
      qsa('.rw-card__more', root).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var card = btn.closest('.rw-card');
          var open = !card.classList.contains('is-open');
          card.classList.toggle('is-open', open);
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          var label = btn.querySelector('[data-i18n]');
          if (label) { label.setAttribute('data-i18n', open ? 'rev.less' : 'rev.more'); label.textContent = t(open ? 'rev.less' : 'rev.more'); }
        });
      });
      measure();
      window.addEventListener('resize', measure);
      window.addEventListener('hashchange', function () { window.setTimeout(measure, 0); });
    });
  }

  var ROUTES = { 'inici': 'index', 'serveis': 'serveis', 'treballs': 'treballs', 'contacte': 'contacte', 'avis-legal': 'avis', 'privacitat': 'privacitat', 'cookies': 'cookies' };
  function route() {
    var h = decodeURIComponent((window.location.hash || '').slice(1));
    if (h === 'ressenyes') { h = 'inici--ressenyes'; } /* les ressenyes ara són una secció de l'inici */
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
    initBeforeAfter();
    initDeck();
    initFlips();
    initGuarantees();
    initHeaderScroll();
    initReveal();
    initMap();
    initReviews();
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (a && a.getAttribute('href') === window.location.hash) { e.preventDefault(); route(); }
    });
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', start); } else { start(); }
})();

