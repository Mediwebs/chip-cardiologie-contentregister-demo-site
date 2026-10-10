const CONTENT_TYPES = ['Webpagina','Patiëntenfolder','Video','Animatie','Protocol','Patiëntenbrief','Apptekst','Chatbotantwoord','Infographic','Besliskaart','FAQ','Ontslaginformatie','Externe bron','Inforium','Inforium Note'];
const PROVIDERS = ['Hartstad Ziekenhuis','Gekoppelde videoprovider','Inforium Studio','Pharos','BetrouwbareBron','BehandelingBegrepen','Steffie','Informed','Inforium CHIP'];
const items = [
  {id:'CAR-001',title:'Voorbereiding hartkatheterisatie',type:'Video',topic:'Hartkatheterisatie',status:'Gepubliceerd',desc:'Rustige uitleg over voorbereiding, onderzoek en nazorg.',owner:'Interventiecardiologie',source:'Hartstad Studio',review:'12 feb 2027',channels:['Website','Patiëntenportaal'],language:'Nederlands',rights:'Creative Commons BY 4.0',validation:'Inhoud beoordeeld door cardioloog en verpleegkundig specialist.'},
  {id:'CAR-002',title:'Leven met boezemfibrilleren',type:'Patiëntenfolder',topic:'Hartritme',status:'Herbeoordeling nodig',desc:'Klachten, behandeling, medicatie en dagelijks leven.',owner:'Hartritmepolikliniek',source:'Afdelingsredactie',review:'Verlopen op 18 aug 2026',channels:['Website','Print / QR'],language:'Nederlands',rights:'Eigen productie',validation:'Medische herbeoordeling nodig na richtlijnwijziging.'},
  {id:'CAR-003',title:'Medicijnen bij hartfalen',type:'Webpagina',topic:'Hartfalen',status:'Gepubliceerd',desc:'Waarom medicijnen nodig zijn en waar patiënten op letten.',owner:'Hartfalenpoli',source:'Hartstad Ziekenhuis',review:'3 mei 2027',channels:['Website','Zorgpadapp'],language:'Nederlands',rights:'Eigen productie',validation:'Inhoudelijk beoordeeld; publieksversie goedgekeurd.'},
  {id:'CAR-004',title:'Wat gebeurt er bij dotteren?',type:'Animatie',topic:'PCI',status:'Gepubliceerd',desc:'Visuele uitleg van vernauwing, ballon en stent.',owner:'Interventiecardiologie',source:'Externe mediapartner',review:'21 jan 2027',channels:['Website','Patiëntenportaal','Wachtkamerscherm'],language:'Nederlands',rights:'Aangeschafte licentie',validation:'Exacte versie beoordeeld door interventiecardioloog.'},
  {id:'CAR-005',title:'Nazorg na PCI',type:'Protocol',topic:'PCI',status:'Gepubliceerd',desc:'Werkinstructie voor observatie, ontslagcriteria en overdracht.',owner:'Kwaliteit Cardiologie',source:'Protocolcommissie',review:'30 mrt 2027',channels:['Professionals'],language:'Nederlands',rights:'Intern gebruik',validation:'Professioneel protocol, formeel vastgesteld.'},
  {id:'CAR-006',title:'Afspraak voor Holteronderzoek',type:'Patiëntenbrief',topic:'Diagnostiek',status:'Concept',desc:'Praktische voorbereiding en uitleg over het dragen van de recorder.',owner:'Functieafdeling',source:'Polisecretariaat',review:'Nog te plannen',channels:['Patiëntenportaal'],language:'Nederlands',rights:'Eigen productie',validation:'Concept; taalcontrole en inhoudelijke beoordeling open.'},
  {id:'CAR-007',title:'Wanneer direct bellen bij pijn op de borst?',type:'Apptekst',topic:'Pijn op de borst',status:'Gepubliceerd',desc:'Korte veiligheidsinformatie voor gebruik in het digitale zorgpad.',owner:'Cardiologie SEH',source:'Veiligheidsredactie',review:'8 apr 2027',channels:['Zorgpadapp'],language:'Nederlands',rights:'Eigen productie',validation:'Contextvalidatie voor app en acute zorg uitgevoerd.'},
  {id:'CAR-008',title:'Kan ik sporten met hartfalen?',type:'Chatbotantwoord',topic:'Hartfalen',status:'Herbeoordeling nodig',desc:'Kort antwoord met grenzen, alarmsignalen en verwijzing naar het behandelteam.',owner:'Digitale zorg',source:'Hartfalenpoli',review:'Review vóór livegang',channels:['Chatbot'],language:'Nederlands',rights:'Eigen productie',validation:'AI-ondersteund concept; medisch akkoord ontbreekt.'},
  {id:'CAR-009',title:'Hartfalen: uitleg en adviezen',type:'Externe bron',topic:'Hartfalen',status:'Gepubliceerd',desc:'Landelijke basisinformatie waar de afdeling gericht naar verwijst.',owner:'Hartfalenpoli',source:'Landelijke kennisbron',review:'15 jun 2027',channels:['Website','Patiëntenportaal'],language:'Nederlands',rights:'Alleen verwijzen',validation:'Bronvaliditeit gecontroleerd; inhoud niet door ziekenhuis overgenomen.'},
  {id:'CAR-010',title:'Keuzes bij boezemfibrilleren',type:'Besliskaart',topic:'Hartritme',status:'Herbeoordeling nodig',desc:'Voor- en nadelen van behandelopties in begrijpelijke taal.',owner:'Hartritmepolikliniek',source:'Samen beslissen-team',review:'Review gepland 24 sep 2026',channels:['Patiëntenportaal','Print / QR'],language:'Nederlands',rights:'Eigen productie',validation:'Patiëntenpanel afgerond; medisch akkoord wordt vernieuwd.'},
  {id:'CAR-011',title:'Voorbereiding op de fietstest',type:'FAQ',topic:'Diagnostiek',status:'Gepubliceerd',desc:'Antwoorden over kleding, eten, medicatie en duur van het onderzoek.',owner:'Functieafdeling',source:'Afdelingsredactie',review:'19 feb 2027',channels:['Website','Chatbot'],language:'Nederlands',rights:'Eigen productie',validation:'Inhoud en kanaalcontext beoordeeld.'},
  {id:'CAR-012',title:'Naar huis na opname op de CCU',type:'Ontslaginformatie',topic:'Opname',status:'Herbeoordeling nodig',desc:'Medicatie, wondzorg, bewegen en contactmomenten na ontslag.',owner:'CCU-verpleegkundigen',source:'CCU-redactie',review:'Review vóór 1 okt 2026',channels:['Patiëntenportaal','Print / QR'],language:'Nederlands',rights:'Eigen productie',validation:'Controle op aansluiting bij nieuw ontslagproces nodig.'},
  {id:'CAR-013',title:'Zout en vocht bij hartfalen',type:'Infographic',topic:'Leefstijl',status:'Gepubliceerd',desc:'Visuele dagindeling met praktische keuzes en aandachtspunten.',owner:'Hartfalenpoli',source:'Diëtetiek',review:'27 apr 2027',channels:['Zorgpadapp','Print / QR'],language:'Nederlands',rights:'CC0',validation:'Inhoud beoordeeld door diëtist en verpleegkundig specialist.'},
  {id:'CAR-014',title:'Cardiac catheterisation – preparation',type:'Webpagina',topic:'Hartkatheterisatie',status:'Concept',desc:'Engelse variant voor patiënten die de Nederlandse uitleg niet goed begrijpen.',owner:'Interventiecardiologie',source:'Afdelingsredactie',review:'Nog te plannen',channels:['Website'],language:'Engels',rights:'Afgeleide eigen content',validation:'Vertaling en transformatie nog niet gevalideerd.'},
  {id:'CAR-015',title:'Polikliniekroute pijn op de borst',type:'Apptekst',topic:'Pijn op de borst',status:'Gepubliceerd',desc:'Stapsgewijze route van verwijzing tot uitslag en vervolgafspraak.',owner:'Polikliniek Cardiologie',source:'Zorgpadteam',review:'11 jul 2027',channels:['Zorgpadapp','Patiëntenportaal'],language:'Nederlands',rights:'Eigen productie',validation:'Zorgpad en publieksversie goedgekeurd.'},
  {id:'CAR-016',title:'Antistolling bij hartritmestoornissen – 2024',type:'Patiëntenfolder',topic:'Hartritme',status:'Ingetrokken',desc:'Oude folder die door een actuele versie is vervangen.',owner:'Hartritmepolikliniek',source:'Afdelingsredactie',review:'Ingetrokken 6 aug 2026',channels:[],language:'Nederlands',rights:'Eigen productie',validation:'Niet meer uitleveren; gekoppeld aan opvolgende versie.'}
];
items.forEach(item => item.provider = 'Hartstad Ziekenhuis');
items.push(
  {id:'CAR-017',title:'Herstel na een ablatie',type:'Video',topic:'Hartritme',status:'Concept',desc:'Voorbeeld van een gekoppelde video over herstel, bewegen en alarmsignalen.',owner:'Hartritmepolikliniek',source:'Externe videocatalogus',provider:'Gekoppelde videoprovider',review:'Koppeling en rechten controleren',channels:['Patiëntenportaal'],language:'Nederlands',rights:'Rechtenstatus in demo te bevestigen',validation:'Demo-item; bron, rechten en inhoud zijn nog niet gevalideerd.'},
  {id:'CAR-018',title:'Zo werkt een ECG',type:'Animatie',topic:'Diagnostiek',status:'Concept',desc:'Voorbeeldanimatie die de registratie van elektrische hartactiviteit uitlegt.',owner:'Functieafdeling',source:'Studio-catalogus',provider:'Inforium Studio',review:'Selectie nog beoordelen',channels:['Website','Wachtkamerscherm'],language:'Nederlands',rights:'Rechtenstatus in demo te bevestigen',validation:'Demo-item; exacte mediaversie en inzetcontext moeten worden beoordeeld.'},
  {id:'CAR-019',title:'Hartmedicatie in begrijpelijke taal',type:'Patiëntenfolder',topic:'Medicatie',status:'Herbeoordeling nodig',desc:'Voorbeeld van toegankelijke informatie voor mensen met beperkte gezondheidsvaardigheden.',owner:'Apotheek en Cardiologie',source:'Externe publieksinformatie',provider:'Pharos',review:'Bron en gebruiksrecht controleren',channels:['Website','Print / QR'],language:'Nederlands',rights:'Alleen verwijzen/embedden toegestaan',validation:'Demo-item; controleer de actuele bron en de toegestane vorm van hergebruik.'},
  {id:'CAR-020',title:'Basisinformatie over hoge bloeddruk',type:'Webpagina',topic:'Hypertensie',status:'Concept',desc:'Voorbeeld van een externe betrouwbare basisbron voor uitleg en doorverwijzing.',owner:'Polikliniek Cardiologie',source:'Geselecteerde kennisbron',provider:'BetrouwbareBron',review:'Bronvaliditeit plannen',channels:['Website'],language:'Nederlands',rights:'Alleen verwijzen/embedden toegestaan',validation:'Demo-item; bronvaliditeit en actualiteit zijn nog niet vastgesteld.'},
  {id:'CAR-021',title:'Hartkatheterisatie stap voor stap',type:'Video',topic:'Hartkatheterisatie',status:'Concept',desc:'Voorbeeldvideo die een behandeling in overzichtelijke stappen laat zien.',owner:'Interventiecardiologie',source:'Externe behandelvideo',provider:'BehandelingBegrepen',review:'Medische review plannen',channels:['Patiëntenportaal'],language:'Nederlands',rights:'Rechtenstatus in demo te bevestigen',validation:'Demo-item; gebruiksafspraak en medische beoordeling ontbreken nog.'},
  {id:'CAR-022',title:'Bloeddruk meten thuis',type:'Animatie',topic:'Hypertensie',status:'Concept',desc:'Voorbeeld van eenvoudige uitleg over voorbereiding, houding en het noteren van metingen.',owner:'Polikliniek Cardiologie',source:'Eenvoudige uitleg',provider:'Steffie',review:'Toegankelijkheid en bron controleren',channels:['Website','Zorgpadapp'],language:'Nederlands',rights:'Alleen verwijzen/embedden toegestaan',validation:'Demo-item; controleer bron, actualiteit, taalniveau en gebruiksvoorwaarden.'},
  {id:'CAR-023',title:'Samen beslissen bij boezemfibrilleren',type:'Besliskaart',topic:'Hartritme',status:'Concept',desc:'Voorbeeld van keuzeondersteuning die in het gesprek met patiënt en behandelaar kan worden gebruikt.',owner:'Hartritmepolikliniek',source:'Externe keuzehulp',provider:'Informed',review:'Besluitvormingsteam laten beoordelen',channels:['Patiëntenportaal','Print / QR'],language:'Nederlands',rights:'Rechtenstatus in demo te bevestigen',validation:'Demo-item; inhoud, versie, context en rechten moeten nog worden beoordeeld.'},
  {id:'CAR-024',title:'Uw hartmedicatie thuis',type:'Inforium',topic:'Medicatie',status:'Concept',desc:'Voorbeeld van een Inforium dat na het consult gericht met de patiënt kan worden gedeeld.',owner:'Apotheek en Cardiologie',source:'Inforium CMS',provider:'Inforium CHIP',review:'Inhoud en verzendcontext beoordelen',channels:['Patiëntenportaal','Zorgpadapp'],language:'Nederlands',rights:'Eigen productie',validation:'Demo-item; inhoud, doelgroep en verzendcontext moeten nog worden gevalideerd.'},
  {id:'CAR-025',title:'Vaknotitie antistolling rond een ingreep',type:'Inforium Note',topic:'Hartritme',status:'Concept',desc:'Voorbeeld van een Inforium Note met beknopte vakinformatie voor cardiologieprofessionals.',owner:'Kwaliteit Cardiologie',source:'Inforium Notes',provider:'Inforium CHIP',review:'Cardioloog en apotheker laten beoordelen',channels:['Professionals'],language:'Nederlands',rights:'Eigen productie',validation:'Demo-item; vakinhoudelijke beoordeling en lokale toepasbaarheid staan open.'}
);
const $ = selector => document.querySelector(selector);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const esc = value => String(value == null ? '' : value).replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[character]);
const statusClass = status => status === 'Herbeoordeling nodig' ? 'review' : status === 'Concept' ? 'concept' : status === 'Ingetrokken' ? 'withdrawn' : '';

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2,'0')).join('');
}
async function prepareTechnicalIdentity() {
  for (const item of items) {
    if (!item.passportId) item.passportId = 'CHIP-PASS-' + item.id;
    if (!item.hash) item.hash = await sha256Hex(JSON.stringify({id:item.id,title:item.title,type:item.type,topic:item.topic,status:item.status,source:item.source,provider:item.provider,rights:item.rights,scope:'registered-metadata-v1'}));
    if (!item.validator) item.validator = item.status === 'Gepubliceerd' ? item.owner + ' · Hartstad Ziekenhuis' : 'Nog niet definitief toegewezen';
  }
}

function iconFor(type) {
  return ({Webpagina:'↗',Patiëntenfolder:'▤',Video:'▶',Animatie:'◇',Protocol:'✓',Patiëntenbrief:'✉',Apptekst:'▣',Chatbotantwoord:'✦',Infographic:'▥',Besliskaart:'⇄',FAQ:'?',Ontslaginformatie:'⌂','Externe bron':'◎',Inforium:'i','Inforium Note':'N'})[type] || '•';
}
function card(item) {
  return '<article class="content-card" tabindex="0" data-id="' + esc(item.id) + '"><div class="card-top"><span class="type-chip">' + iconFor(item.type) + ' &nbsp;' + esc(item.type) + '</span><span class="status-chip ' + statusClass(item.status) + '">' + esc(item.status) + '</span></div><div class="card-body"><h3>' + esc(item.title) + '</h3><p>' + esc(item.desc) + '</p><span class="provider-label">via ' + esc(item.provider) + '</span><div class="card-meta"><span>' + esc(item.topic) + '</span><span>' + esc(item.owner) + '</span></div></div></article>';
}
function bindCards(container) {
  container.querySelectorAll('.content-card').forEach(element => {
    const open = () => openDetail(element.dataset.id);
    element.onclick = open;
    element.onkeydown = event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } };
  });
}
function renderStats() {
  const published = items.filter(item => item.status === 'Gepubliceerd').length;
  const review = items.filter(item => item.status === 'Herbeoordeling nodig').length;
  const concepts = items.filter(item => item.status === 'Concept').length;
  $('#stats').innerHTML = [[items.length,'contentitems'],[published,'actueel gepubliceerd'],[review,'herbeoordelingen'],[concepts,'concepten']].map(stat => '<div class="stat"><b>' + stat[0] + '</b><span>' + stat[1] + '</span></div>').join('');
}
function renderDashboard() {
  const recent = items.filter(item => item.status !== 'Ingetrokken').slice(0, 6);
  $('#recent-content').innerHTML = recent.map(card).join('');
  bindCards($('#recent-content'));
  const work = items.filter(item => item.status === 'Herbeoordeling nodig' || item.status === 'Concept');
  $('#work-count').textContent = work.length;
  $('#work-list').innerHTML = work.slice(0, 7).map(item => '<div class="work-item"><i class="work-dot ' + (item.status === 'Concept' ? '' : 'red') + '"></i><div><b>' + esc(item.title) + '</b><small>' + esc(item.status) + ' · ' + esc(item.owner) + '</small></div><time>' + esc(item.review.slice(0,18)) + '</time></div>').join('');
}
function setOptions() {
  const types = Array.from(new Set(items.map(item => item.type))).sort();
  const statuses = Array.from(new Set(items.map(item => item.status)));
  const routes = Array.from(new Set(items.map(item => item.topic))).sort();
  const providers = Array.from(new Set(PROVIDERS.concat(items.map(item => item.provider)))).sort();
  $('#type-filter').innerHTML = '<option value="">Alle typen</option>' + types.map(value => '<option>' + esc(value) + '</option>').join('');
  $('#status-filter').innerHTML = '<option value="">Alle statussen</option>' + statuses.map(value => '<option>' + esc(value) + '</option>').join('');
  $('#route-filter').innerHTML = '<option value="">Alle zorgpaden</option>' + routes.map(value => '<option>' + esc(value) + '</option>').join('');
  $('#provider-filter').innerHTML = '<option value="">Alle providers</option>' + providers.map(value => '<option>' + esc(value) + '</option>').join('');
  document.querySelector('[name="contentType"]').innerHTML = CONTENT_TYPES.map(value => '<option>' + esc(value) + '</option>').join('');
}
function renderLibrary() {
  const query = $('#search').value.trim().toLowerCase();
  const type = $('#type-filter').value, status = $('#status-filter').value, route = $('#route-filter').value, provider = $('#provider-filter').value;
  const filtered = items.filter(item => [item.title,item.topic,item.owner,item.source,item.provider].join(' ').toLowerCase().includes(query) && (!type || item.type === type) && (!status || item.status === status) && (!route || item.topic === route) && (!provider || item.provider === provider));
  $('#library-count').textContent = filtered.length + ' van ' + items.length + ' items';
  $('#library-grid').innerHTML = filtered.length ? filtered.map(card).join('') : '<div class="empty">Geen content gevonden met deze filters.</div>';
  bindCards($('#library-grid'));
}
function renderSources() {
  const sources = [
    ['Hartstad Ziekenhuis','Eigen patiëntinformatie, protocollen en lokale aanvullingen','Eigen provider','Demovoorbeeld','H'],
    ['Gekoppelde videoprovider','Videocatalogus die via een koppeling kan worden geselecteerd','Videokoppeling','Demovoorbeeld','▶'],
    ['Inforium Studio',"Video's en animaties die als bron kunnen worden geregistreerd",'Mediaprovider','Demovoorbeeld','◇'],
    ['Pharos','Externe informatie die als bron of verwijzing kan worden opgenomen','Kennisprovider','Demovoorbeeld','◎'],
    ['BetrouwbareBron','Geselecteerde externe basisinformatie met vastgelegde herkomst','Kennisprovider','Demovoorbeeld','✓'],
    ['BehandelingBegrepen','Behandelvideo die als gekoppelde bron kan worden geregistreerd','Videoprovider','Demovoorbeeld','▶'],
    ['Steffie','Eenvoudige uitleg die per item en gebruiksrecht wordt beoordeeld','Uitlegprovider','Demovoorbeeld','S'],
    ['Informed','Keuzeondersteuning die met versie en context kan worden vastgelegd','Keuzehulp-provider','Demovoorbeeld','⇄'],
    ['Inforium CHIP','Platformbron voor eigen Inforiums, Inforium Notes en gekoppelde zorginformatie','Platformbron','Demovoorbeeld','i']
  ];
  $('#source-grid').innerHTML = sources.map(source => '<article class="source-card"><div class="source-icon">' + source[4] + '</div><h3>' + esc(source[0]) + '</h3><p>' + esc(source[1]) + '</p><div class="source-row"><b>' + esc(source[2]) + '</b><span>' + esc(source[3]) + '</span></div></article>').join('');
}
function renderChannels() {
  const channels = [
    ['Website','Publieke uitleg en voorbereiding','8 items','Actief','↗'],
    ['Patiëntenportaal','Persoonlijk klaargezette informatie','7 items','Demo','▣'],
    ['Zorgpadapp','Informatie per stap in het zorgpad','5 items','Demo','◇'],
    ['Chatbot','Goedgekeurde antwoorden en verwijzingen','2 items','Controle nodig','✦'],
    ['Print en QR','Folders, brieven en wachtkamergebruik','5 items','Actief','▤'],
    ['Professionals','Protocollen en overdrachtsinformatie','3 items','Intern','✓']
  ];
  $('#channel-grid').innerHTML = channels.map(channel => '<article class="channel-card"><div class="channel-icon">' + channel[4] + '</div><h3>' + esc(channel[0]) + '</h3><p>' + esc(channel[1]) + '</p><div class="channel-row"><b>' + esc(channel[2]) + '</b><span>' + esc(channel[3]) + '</span></div></article>').join('');
}
function openDetail(id) {
  const item = items.find(candidate => candidate.id === id);
  if (!item) return;
  $('#detail-content').innerHTML = '<p class="eyebrow">CONTENTDETAIL · ' + esc(item.id) + '</p><h2>' + esc(item.title) + '</h2><p class="dialog-lead">' + esc(item.desc) + '</p><div class="passport"><div class="passport-head"><b>CHIP contentpaspoort</b><span class="status-chip ' + statusClass(item.status) + '">' + esc(item.status) + '</span></div><div class="passport-grid"><div><span>Paspoort-ID</span><b>' + esc(item.passportId) + '</b></div><div><span>Contenttype</span><b>' + esc(item.type) + '</b></div><div><span>Zorgpad / onderwerp</span><b>' + esc(item.topic) + '</b></div><div><span>Verantwoordelijke</span><b>' + esc(item.owner) + '</b></div><div><span>Contentprovider</span><b>' + esc(item.provider) + '</b></div><div><span>Bron bij provider</span><b>' + esc(item.source) + '</b></div><div><span>Taal</span><b>' + esc(item.language) + '</b></div><div><span>Licentie / rechten</span><b>' + esc(item.rights) + '</b></div><div><span>Beoordelaar</span><b>' + esc(item.validator) + '</b></div><div><span>Review</span><b>' + esc(item.review) + '</b></div><div><span>Toepassingen</span><b>' + esc(item.channels.join(', ') || 'Niet uitleveren') + '</b></div><div><span>Hash-algoritme en bereik</span><b>SHA-256 · geregistreerde metadata v1</b></div><div><span>Automatische hash</span><b class="hash-value">' + esc(item.hash) + '</b></div></div></div><p class="dialog-lead"><strong>Betekenis beoordeling:</strong> ' + esc(item.validation) + '</p>';
  $('#detail-dialog').showModal();
}
function switchView(view) {
  $$('.view').forEach(element => element.classList.toggle('active', element.id === view + '-view'));
  $$('.nav-item').forEach(element => element.classList.toggle('active', element.dataset.view === view));
  $('#page-title').textContent = ({dashboard:'Grip op cardiologiecontent',library:'Contentbibliotheek Cardiologie',sources:'Bronnen en herkomst',channels:'Toepassingen en publicatie'})[view];
  if (view === 'library') renderLibrary();
}
const localContentKey = 'chip-cardiologie-local-content';
const isStaticDemo = ['127.0.0.1','localhost'].includes(window.location.hostname) || window.location.hostname.endsWith('.github.io');

function mergeSubmitted(rows) {
  Array.from(rows || []).reverse().forEach(row => {
    if (items.some(item => item.id === row.public_content_id)) return;
    items.unshift({id:row.public_content_id,passportId:row.public_passport_id,hash:row.content_hash,title:row.title,type:row.content_type,topic:row.topic,status:'Concept',desc:row.description,owner:'Cardiologie redactie',source:row.source_name,provider:row.source_organisation,review:row.approval_confirmed ? 'Goedgekeurd in demo' : 'Nog te plannen',channels:[],language:row.language,rights:row.rights_status,validator:row.validator_name ? row.validator_name + ' · ' + row.validator_organisation : 'Nog niet toegewezen',validation:row.validation_status === 'approved' ? 'Exacte versie goedgekeurd door de ingevulde valideerder.' : 'Voorgesteld profiel: ' + row.validation_profile + '. Nog niet beoordeeld.'});
  });
}

function loadLocalSubmitted() {
  if (!isStaticDemo) return;
  try { mergeSubmitted(JSON.parse(localStorage.getItem(localContentKey) || '[]')); } catch {}
}

async function loadSubmitted() {
  loadLocalSubmitted();
  if (isStaticDemo) return;
  const response = await fetch('/api/content', {headers:{accept:'application/json'}});
  if (!response.ok) return;
  const data = await response.json();
  mergeSubmitted(data.items);
}

async function saveContentLocally(values) {
  const short = crypto.randomUUID().replaceAll('-','').slice(0,12).toUpperCase();
  const contentId = 'CHIP-CAR-' + short;
  const approved = values.approvalConfirmed === 'true' || values.approvalConfirmed === true || values.approvalConfirmed === 'on';
  const row = {
    public_content_id:contentId,
    public_version_id:contentId + '-V1',
    public_passport_id:'CHIP-PASS-' + short,
    content_hash:await sha256Hex(JSON.stringify(values)),
    title:values.title,
    content_type:values.contentType,
    media_url:values.mediaUrl,
    language:values.language,
    topic:values.topic,
    description:values.description,
    source_name:values.sourceName,
    source_organisation:values.sourceOrganisation,
    rights_status:values.rightsStatus,
    validation_profile:values.validationProfile,
    validator_name:values.validatorName || null,
    validator_organisation:values.validatorOrganisation || null,
    approval_confirmed:approved,
    validation_status:approved ? 'approved' : 'not_reviewed'
  };
  const stored = JSON.parse(localStorage.getItem(localContentKey) || '[]');
  stored.unshift(row);
  localStorage.setItem(localContentKey, JSON.stringify(stored.slice(0,100)));
  return {...row,title:row.title};
}

async function submitContent(values) {
  if (isStaticDemo) return saveContentLocally(values);
  const response = await fetch('/api/content', {method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(values)});
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Opslaan is niet gelukt.');
  return data.item;
}
function toast(message) {
  const element = $('#toast'); element.textContent = message; element.classList.add('show');
  setTimeout(() => element.classList.remove('show'), 3500);
}
$$('.nav-item').forEach(button => button.onclick = () => switchView(button.dataset.view));
$$('[data-go]').forEach(button => button.onclick = () => switchView(button.dataset.go));
['search','type-filter','status-filter','route-filter','provider-filter'].forEach(id => $('#' + id).addEventListener(id === 'search' ? 'input' : 'change', renderLibrary));
$$('dialog .close').forEach(button => button.onclick = () => button.closest('dialog').close());
$('#add-content').onclick = () => $('#add-dialog').showModal();
const approvalCheckbox = document.querySelector('[name="approvalConfirmed"]');
const validatorFields = [document.querySelector('[name="validatorName"]'), document.querySelector('[name="validatorOrganisation"]')];
approvalCheckbox.onchange = () => validatorFields.forEach(field => field.required = approvalCheckbox.checked);
$('#content-form').onsubmit = async event => {
  event.preventDefault();
  const form = event.currentTarget, button = form.querySelector('.submit'), message = $('#form-message');
  button.disabled = true; message.textContent = 'Bezig met opslaan…';
  try {
    const saved = await submitContent(Object.fromEntries(new FormData(form)));
    form.reset();
    document.querySelector('[name="language"]').value = 'Nederlands';
    document.querySelector('[name="sourceOrganisation"]').value = 'Hartstad Ziekenhuis';
    document.querySelector('[name="validatorOrganisation"]').value = 'Hartstad Ziekenhuis';
    validatorFields.forEach(field => field.required = false);
    $('#add-dialog').close(); await loadSubmitted(); setOptions(); renderStats(); renderDashboard(); renderLibrary();
    toast(saved.title + ' is opgeslagen met paspoort ' + saved.public_passport_id + '.');
  } catch (error) { message.textContent = error.message; } finally { button.disabled = false; }
};
async function init() {
  await loadSubmitted().catch(() => {});
  await prepareTechnicalIdentity();
  setOptions(); renderStats(); renderDashboard(); renderLibrary(); renderSources(); renderChannels();
}
init();
