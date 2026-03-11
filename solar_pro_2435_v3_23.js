<!-- Solar Pro v3.22 — 2026-03-11 — Generate Proposal: BID object modal + generateProposalBID() -->
<style>

:root{--bg:#ebeef5;--bg2:#e0e4ef;--white:#ffffff;--card:#ffffff;--navy:#1a1a2e;--navy2:#1e2a4a;--gold:#FED44D;--goldd:#e6bf3a;--goldbg:rgba(254,212,77,.12);--gn:#22C55E;--gnbg:rgba(34,197,94,.08);--rd:#dc2626;--rdbg:rgba(220,38,38,.08);--bl:#2BABE2;--blbg:rgba(43,171,226,.08);--pu:#7c3aed;--pubg:rgba(124,58,237,.07);--bd:#cdd2e0;--bd2:#b8bdd0;--tx:#0a0a1a;--tx2:#1a1e35;--tx3:#3a4060;--r:12px;--rs:8px;--shadow:0 1px 3px rgba(0,0,0,.08),0 4px 14px rgba(0,0,0,.05)}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--tx);min-height:100vh;font-size:16.8px}
nav.ps-nav,div.ps-nav-mobile-overlay,#header-outer,#header-space,div#ps-footer,a#to-top{display:none!important;height:0!important;max-height:0!important;overflow:hidden!important;visibility:hidden!important}
.container-wrap{padding-top:0!important}
.container.main-content,.row{max-width:100%!important;width:100%!important;padding:0!important;margin:0!important}
input,select,textarea,button{font-family:'Inter',sans-serif;font-size:15.6px}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--bd2);border-radius:3px}
.login-overlay{position:fixed;inset:0;z-index:9999;background:linear-gradient(160deg,#0d0d1a,#1a1a2e,#1e2a4a);display:flex;align-items:center;justify-content:center}.login-overlay.hidden{display:none}
.lbox{background:var(--white);border-radius:20px;padding:48px 40px;width:400px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.llogo{display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
.ltitle{font-size:31.2px;font-weight:800;color:var(--navy);margin-bottom:6px}.lsub{font-size:16.8px;color:var(--tx2);margin-bottom:28px}
.lf{margin-bottom:14px;text-align:left}.lf label{font-size:13.2px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px}
.lf input{width:100%;padding:12px 14px;background:var(--bg);border:1px solid var(--bd);color:var(--tx);border-radius:var(--rs);font-size:16.8px}
.lf input:focus{outline:none;border-color:var(--gold)}.lbtn{width:100%;padding:14px;background:linear-gradient(135deg,var(--gold),var(--goldd));color:#1a1a2e;border:none;border-radius:var(--rs);font-size:18px;font-weight:700;cursor:pointer;margin-top:8px}
.lbtn:hover{opacity:.9}.lerr{color:var(--rd);font-size:15.6px;margin-top:12px;display:none}
.app{position:relative;z-index:1;display:none}.app.on{display:block}
.tnav{display:flex;align-items:center;justify-content:space-between;padding:10px 24px;background:linear-gradient(135deg,#0d47a1,#1565c0,#1e88e5);position:sticky;top:0;z-index:100;box-shadow:0 2px 10px rgba(0,0,0,.2)}
.tnl{display:flex;align-items:center;gap:12px}.tlogo{display:flex;align-items:center;justify-content:center}
.ttl{font-size:20.4px;font-weight:800;color:#fff}.ttabs{display:flex;gap:3px}
.tab{padding:8px 18px;border-radius:var(--rs);font-size:15.6px;font-weight:600;color:rgba(255,255,255,.85);cursor:pointer;border:1px solid transparent;transition:all .15s}.tab:hover{color:#fff;background:rgba(255,255,255,.12)}.tab.on{color:var(--gold);background:rgba(245,166,35,.15);border-color:rgba(245,166,35,.3)}
.tnr{display:flex;align-items:center;gap:10px}.tnu{font-size:14.4px;color:rgba(255,255,255,.45)}
.btn{padding:7px 14px;border-radius:var(--rs);border:1px solid var(--bd);background:var(--white);color:var(--tx);font-size:14.4px;font-weight:600;cursor:pointer;transition:all .15s}.btn:hover{border-color:var(--gold);background:var(--goldbg)}
.btn-ac{background:linear-gradient(135deg,var(--gold),var(--goldd));color:#1a1a2e;border:none;font-weight:700}.btn-ac:hover{opacity:.9}
.btn-rd{background:var(--rdbg);color:var(--rd);border-color:rgba(220,38,38,.2)}.btn-rd:hover{background:var(--rd);color:#fff}
.btn-gn{background:var(--gnbg);color:var(--gn);border-color:rgba(22,163,74,.2)}.btn-gn:hover{background:var(--gn);color:#fff}
.page{display:none;padding:20px 24px;max-width:1500px;margin:0 auto}.page.on{display:block}
.ag{display:grid;grid-template-columns:240px 1fr;gap:20px;min-height:calc(100vh - 60px)}
.aside{background:var(--white);border:1px solid var(--bd);border-radius:var(--r);position:sticky;top:65px;height:fit-content;max-height:calc(100vh - 85px);overflow-y:auto;box-shadow:var(--shadow)}
.aside-t{padding:12px 16px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--tx2);border-bottom:1px solid var(--bd);background:var(--bg)}
.ni{padding:9px 16px;font-size:14.4px;font-weight:600;cursor:pointer;border-left:3px solid transparent;color:var(--tx);display:flex;align-items:center;gap:8px;transition:all .1s}.ni:hover{background:var(--bg);color:var(--navy)}.ni.on{background:var(--goldbg);color:var(--navy);border-left-color:var(--gold);font-weight:700}
.ni .dot{width:7px;height:7px;border-radius:50%;background:var(--bd)}.ni.on .dot{background:var(--gold)}.ndiv{height:1px;background:var(--bd);margin:4px 0}
.sh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}.st{font-size:24px;font-weight:800;color:var(--navy)}.ss{font-size:14.4px;color:var(--tx3);margin-top:3px}
.dtw{background:var(--white);border:1px solid var(--bd);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
table.dt{width:100%;border-collapse:collapse}
.dt th{padding:10px 14px;text-align:left;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.7px;color:var(--tx2);background:var(--bg);border-bottom:1px solid var(--bd)}.dt th.r{text-align:right}
.dt td{padding:8px 14px;font-size:14.4px;color:var(--tx);font-weight:500}.dt td.r{text-align:right;font-family:'JetBrains Mono',monospace;font-size:13.2px;font-weight:600}.dt td.m{color:var(--gn);font-weight:700}.dt td.d{color:var(--tx2)}.dt td.c{text-align:center}
.dt tbody tr{border-bottom:1px solid var(--bd)}.dt tbody tr:hover{background:var(--goldbg)}
.card{background:var(--white);border:1px solid var(--bd);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow)}
.ch{padding:12px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;background:var(--bg2)}
.cht{font-size:13.2px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--navy);display:flex;align-items:center;gap:8px}
.cht::before{content:'';width:3px;height:13px;background:var(--gold);border-radius:2px}.cb{padding:16px 18px}
.cg{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ci{background:var(--bg);border:1px solid var(--bd);border-radius:var(--rs);padding:12px 14px}
.cil{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--tx3);margin-bottom:6px}
.cii{width:100%;padding:7px 9px;background:var(--white);border:1px solid var(--bd);color:var(--tx);font-family:'JetBrains Mono',monospace;font-size:15.6px;border-radius:6px;margin-top:3px}.cii:focus{outline:none;border-color:var(--gold)}
.cis{width:100%;padding:7px 9px;background:var(--white);border:1px solid var(--bd);color:var(--tx);font-size:14.4px;border-radius:6px;margin-top:3px}
.cag{display:grid;grid-template-columns:1fr 380px;gap:20px}
.tr{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--bd);font-size:15.6px}.tr:last-child{border-bottom:none}
.tr.tf{border-top:2px solid var(--gold);font-weight:700;font-size:18px;padding-top:10px;margin-top:3px}
.sg{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.sb{background:var(--bg);border:1px solid var(--bd);border-radius:var(--rs);padding:10px;text-align:center}
.sb.sac{border-color:rgba(245,166,35,.5);background:var(--goldbg)}.sb.sgn{border-color:rgba(22,163,74,.3);background:var(--gnbg)}
.sbl{font-size:10.8px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--tx3);margin-bottom:3px}
.sbv{font-family:'JetBrains Mono',monospace;font-size:20.4px;font-weight:700;color:var(--navy)}
.cr{display:grid;grid-template-columns:1.5fr 1.6fr .5fr .6fr .7fr;gap:1px;padding:0;border-bottom:1px solid var(--bd)}.cr:hover{background:var(--goldbg)}.cr.hv{background:var(--gnbg)}
.cr>div{padding:7px 10px;font-size:14.4px;display:flex;align-items:center}
.cr .ct{font-weight:700;color:var(--navy)}.cr .ct.req{color:var(--rd)}.cr .cc{color:var(--tx2);font-size:13.2px}
.cr .cn{justify-content:flex-end;font-family:'JetBrains Mono',monospace;font-size:13.2px;color:var(--tx2)}
.cr .cv{justify-content:flex-end;font-family:'JetBrains Mono',monospace;font-size:13.2px;color:var(--gn);font-weight:700}
.crh{background:var(--bg2);border-bottom:2px solid var(--bd2)}.crh>div{font-size:10.8px!important;font-weight:700!important;text-transform:uppercase;letter-spacing:.7px;color:var(--tx3)!important}
.crs{border-top:2px solid var(--gold)!important;background:var(--goldbg)!important}.crs>div{font-weight:700!important;color:var(--navy)!important;font-size:15.6px!important}
.csel{background:var(--white);border:1px solid var(--bd);color:var(--tx);font-size:13.2px;padding:5px 6px;border-radius:5px;width:100%}.csel:focus{outline:none;border-color:var(--gold)}
.cipt{background:var(--white);border:1px solid var(--bd);color:var(--tx);font-family:'JetBrains Mono',monospace;font-size:13.2px;padding:5px 6px;border-radius:5px;width:60px;text-align:right}.cipt:focus{outline:none;border-color:var(--gold)}
.cipt-hl{background:#dcfce7;border:2px solid var(--gn);color:#15803d;font-weight:700;font-size:16.8px}
.sbar{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:14px}
.sc{background:var(--white);border:1px solid var(--bd);border-radius:var(--r);padding:16px;text-align:center;box-shadow:var(--shadow)}
.sc.hl{border-color:var(--gn);box-shadow:0 0 20px rgba(22,163,74,.1)}
.scl{font-size:12px;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px}.scv{font-family:'JetBrains Mono',monospace;font-size:26.4px;font-weight:700;margin-top:5px;color:var(--navy)}
.slbl{padding:8px 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;background:var(--bg2);border-bottom:1px solid var(--bd);margin-top:2px;color:var(--navy)}
.slbl.c-ac{color:var(--goldd)}.slbl.c-bl{color:var(--bl)}.slbl.c-pu{color:var(--pu)}.slbl.c-gn{color:var(--gn)}
.zero{color:#b0b5c5}
.toast{position:fixed;bottom:20px;right:20px;background:var(--gn);color:#fff;padding:10px 18px;border-radius:var(--rs);font-size:14.4px;font-weight:600;z-index:9999;opacity:0;transform:translateY(10px);transition:all .3s;pointer-events:none}.toast.show{opacity:1;transform:translateY(0)}
.mo{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1000;display:none;align-items:center;justify-content:center}.mo.show{display:flex}
.modal{background:var(--white);border:1px solid var(--bd);border-radius:16px;padding:28px;width:460px;max-width:90vw;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.mt{font-size:21.6px;font-weight:800;margin-bottom:14px;color:var(--navy)}.mf{margin-bottom:12px}
.mf label{font-size:13.2px;font-weight:600;color:var(--tx3);display:block;margin-bottom:5px}
.mf input,.mf select{width:100%;padding:9px 11px;background:var(--bg);border:1px solid var(--bd);color:var(--tx);border-radius:var(--rs);font-size:15.6px}
.mf input:focus,.mf select:focus{outline:none;border-color:var(--gold)}
.ma{display:flex;gap:8px;justify-content:flex-end;margin-top:16px}
.warn{background:var(--rdbg);border:1px solid rgba(220,38,38,.2);border-radius:var(--rs);padding:10px 14px;margin:6px 0;display:none;gap:8px;font-size:14.4px;line-height:1.5;color:var(--tx);align-items:flex-start}
.warn.show{display:flex}.warn b{color:var(--rd)}.warn .wi{font-size:19.2px;flex-shrink:0}
@media(max-width:1100px){.ag{grid-template-columns:1fr}.aside{position:static}.cag{grid-template-columns:1fr}}
@media(max-width:768px){.sbar{grid-template-columns:1fr 1fr}.cg{grid-template-columns:1fr}
.cr{grid-template-columns:1.2fr 1.5fr .4fr .5fr .6fr;gap:0}
.cr>div{padding:6px 5px;font-size:13.2px}
.cr .ct{font-size:13.2px}.cr .cc{font-size:12px}.cr .cn{font-size:12px}.cr .cv{font-size:12px}
.crh>div{font-size:9.6px!important;letter-spacing:.3px}
.csel{font-size:12px;padding:4px 3px}
.cipt{width:42px;font-size:12px;padding:4px 3px}
.tnav{padding:8px 12px;flex-wrap:wrap;gap:6px}.ttl{font-size:16.8px}.tab{padding:6px 10px;font-size:13.2px}
.tnr{gap:5px}.tnr .btn{font-size:12px;padding:5px 8px}
.tnu{font-size:12px!important}
.page{padding:10px 8px}
.scv{font-size:19.2px}
.slbl{font-size:10.8px;padding:6px 5px}
}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.85}}

</style>
<div class="login-overlay" id="LO"><div class="lbox"><div class="llogo"><img id="login-logo" style="width:180px;height:auto"></div><div class="ltitle">Solar Pro</div><div class="lsub">Enter credentials to continue</div>
<div class="lf"><label>Username</label><input type="text" id="lu"></div>
<div class="lf"><label>Password</label><input type="password" id="lp"></div>
<button class="lbtn" onclick="doLogin()">Sign In</button><div class="lerr" id="le">Invalid credentials</div></div></div>
<div class="app" id="app">
<div class="tnav"><div class="tnl"><div class="tlogo"><img id="nav-logo" style="height:34px;width:auto"></div><div class="ttl">Solar Pro</div></div>
<div class="ttabs"><div class="tab on" onclick="goPage('admin',this)">Admin Panel</div><div class="tab" onclick="goPage('ca',this)">Cost Analysis</div></div>
<div class="tnr"><span class="tnu" style="color:#fff;font-weight:700">Admin</span><button class="btn" style="color:#fff;background:rgba(34,197,94,.8);border:1px solid rgba(34,197,94,.5);font-weight:600;font-size:11px" onclick="exportData()" title="Download all admin data as JSON">⬇ Export</button><button class="btn" style="color:#fff;background:rgba(124,58,237,.7);border:1px solid rgba(124,58,237,.5);font-weight:600;font-size:11px" onclick="triggerImport()" title="Load a previously exported JSON file">⬆ Import</button><input type="file" id="import-file" accept=".json" style="display:none" onchange="importData(this)"><button class="btn" style="color:var(--navy);background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.4);font-weight:600" onclick="doLogout()">Sign Out</button></div></div>
<div class="page on" id="p-admin"><div class="ag"><div class="aside" id="asideNav"></div><div id="adC"></div></div></div>
<div class="page" id="p-ca"><div id="caC"></div></div>
</div>
<div class="toast" id="toast"></div>
<div class="mo" id="moO"><div class="modal"><div class="mt" id="mT">Add</div><div id="mF"></div><div class="ma"><button class="btn" onclick="closeM()">Cancel</button><button class="btn btn-ac" id="mS">Save</button></div></div></div>
<script>

var PELL_LOGO="data:image/png;base64,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";
// ===== DATA STORE =====
var D={
// COMPONENT PRICING — change a price here, then call recalcAll() to update every package & line item
comp:{
  tax:0.0775,
  tesla_pw3:{id:1,d:"Powerwall 3 AC 13.5kW",model:"1707000-XX-Y",sku:"POWERWALL 3 AC 13.5KW BATTERY",c:7900},
  tesla_exp_batt:{id:2,d:"PW3 Expansion Battery",model:"1807000-00-Y",sku:"POWERWALL 3 EXPANSION",c:6000},
  tesla_gw:{id:3,d:"Gateway 3",model:"1841000-01-Y",sku:"GATEWAY 3",c:900},
  tesla_bsw:{id:4,d:"Backup Switch Kit",model:"1624171-00-X",sku:"BACKUP SWITCH KIT",c:400},
  tesla_rem:{id:5,d:"Remote Energy Meter Kit w/2 CTs",model:"2045796-XX-Y",sku:"REMOTE ENERGY METER KIT W/2 CTS",c:200},
  tesla_exp_harness:{id:6,d:"Harness 2M - PW3 Expansion",model:"1875157-20-Y",sku:"HARNESS 2M - PW3 EXPANSION",c:159},
  tesla_exp_wall:{id:7,d:"Wall Mount Kit - PW3 Expansion",model:"1978069-XX-Y",sku:"WALL MOUNT KIT - PW3 EXPANSION",c:115},
  tesla_exp_stack:{id:8,d:"PW3 Expansion Stacking Kit",model:"1978070-XX-Y",sku:"PW3 EXPANSION WALL STACKING KIT",c:115},
  tesla_rsd:{id:20,d:"Rapid Shutdown (MCI/RSD Gen 2)",model:"1879359-15-X",sku:"MCI/RSD GEN 2",c:41},
  hyund435:{id:9,d:"Hyundai 435W",model:"HIN-T435NF(BK)",sku:"HYUND HIN-T435NF(BK)",c:152},
  hyund405:{id:10,d:"Hyundai 405W",model:"HIS-405YH BK",sku:"HYUND HIS-405YH BK",c:114},
  qcell410:{id:11,d:"QCell 400W BOB",model:"Q.PEAK DUO BLK ML-G10+ 400",sku:"400W BOB",c:205},
  qtron430:{id:12,d:"QTron 430W",model:"QTRON-430",sku:"QTRON 430WATT",c:271},
  iq8m:{id:13,d:"Enphase IQ 8M Micro",model:"IQ8M-72-2-US",sku:"IQ8M 72-CELL MICRO",c:184},
  iq8plus:{id:14,d:"Enphase IQ 8+ Micro",model:"IQ8PLUS-72-M-US",sku:"IQ8PLUS 72-CELL MICRO",c:170.31},
  iq8a:{id:15,d:"Enphase IQ 8A Micro",model:"IQ8A-72-2-US",sku:"IQ8A 72-CELL MICRO",c:201},
  iq7plus:{id:16,d:"Enphase IQ 7+ Micro",model:"IQ7PLUS-72-2-US",sku:"IQ7PLUS 72-CELL MICRO",c:151},
  tesla_standalone:{id:17,d:"Tesla Standalone Inverter",model:"TESLA-INV",sku:"TESLA STANDALONE INVERTER",c:1400},
  envoy_combo:{id:18,d:"Combiner w/Gateway & Hold Down",model:"X-IQ-AM1-240-5-HDK",sku:"COMBINER W/GATEWAY & HOLD DOWN",c:650},
  envoy_5yr:{id:19,d:"Mobile Connect 5yr LTE Cell",model:"CELLMODEM-M1-06-SP-05",sku:"MOBILE CONNECT 5YR LTE M1 CELL",c:370},
  // ENPHASE IQ BATTERY 5P COMPONENTS
  enph_bat5p:{id:21,d:"IQ Battery 5P DOM",model:"IQBATTERY-5P-1P-NA-DOM-NFC",sku:"IQ BATTERY 5P DOMESTIC",c:3375},
  enph_ctrl3m:{id:22,d:"IQ System Controller 3M",model:"SC200D111CMC1US01",sku:"IQ SYSTEM CONTROLLER 3M",c:1565},
  enph_comb5:{id:23,d:"IQ Combiner 5 (WiFi/Ethernet)",model:"X-IQ-AM1-240-5-HDK",sku:"IQ COMBINER 5",c:650},
  enph_comb5c:{id:24,d:"IQ Combiner 5C (Cellular)",model:"X-IQ-AM1-240-5C-HDK",sku:"IQ COMBINER 5C",c:1050},
  enph_ctrl_cable:{id:25,d:"Control Cable (500ft Spool)",model:"CTRL-SC3-NA-01",sku:"CONTROL CABLE CTRL-SC3-NA-01",c:0},
  enph_comms_kit:{id:26,d:"Communications Kit 2",model:"COMMS-KIT-02",sku:"COMMUNICATIONS KIT 2",c:0},
  // NEW ENPHASE INVERTERS (IQ8 Battery Series)
  iq8hc:{id:27,d:"Enphase IQ8HC Micro (DOM)",model:"IQ8HC-72-M-DOM-US",sku:"IQ8HC 72-CELL MICRO DOM",c:186},
  iq8ac:{id:28,d:"Enphase IQ8AC Micro",model:"IQ8AC-72-M-US",sku:"IQ8AC 72-CELL MICRO",c:156},
  iq8x:{id:29,d:"Enphase IQ8X Micro (DOM)",model:"IQ8X-80-M-DOM-US",sku:"IQ8X 80-CELL MICRO DOM",c:175},
  iq8mc:{id:30,d:"Enphase IQ8MC Micro",model:"IQ8MC-72-M-US",sku:"IQ8MC 72-CELL MICRO",c:140},
  // FRANKLINWH aPower COMPONENTS
  fwh_ap2:{id:31,d:"aPower 2 Battery (15kWh)",model:"APR-10K15V2-US",sku:"APOWER 2 15KWH BATTERY",c:8823.53},
  fwh_aps:{id:32,d:"aPower S Battery w/ Inverter (15kWh)",model:"APRS-10K15V1-US",sku:"APOWER S 15KWH ALL-IN-ONE",c:10294.12},
  fwh_agate:{id:33,d:"aGate X (Energy Hub)",model:"AGT-R1V3-US",sku:"AGATE X HUB",c:1411.76},
  fwh_mac:{id:34,d:"MAC (Meter Adapter Controller)",model:"MAC-R1V1-US",sku:"METER ADAPTER CONTROLLER",c:735.29},
  fwh_ct200:{id:35,d:"200A CT Kit (x2 included)",model:"ACCY-CT200V2-US",sku:"200A CT KIT",c:105.88},
  fwh_apbox:{id:36,d:"APBox (Outdoor Enclosure)",model:"ACCY-RCV1-US",sku:"APBOX OUTDOOR ENCLOSURE",c:776.47},
  fwh_lugkit:{id:37,d:"Backup Expansion Lug Kit",model:"ACCY-BLV2-US",sku:"BACKUP EXPANSION LUG KIT",c:88.24},
  fwh_mainrelay:{id:38,d:"Main Load Relay",model:"ACCY-MRV2-US",sku:"MAIN LOAD RELAY",c:258.82},
  fwh_eqb:{id:39,d:"EQB Backup Switch (MIM 200)",model:"MIM 200 PLUS PE-FWH",sku:"EQB BACKUP SWITCH",c:1171.76},
  fwh_ahub:{id:40,d:"aHub (Multi-Array/Generator/EV)",model:"ACCY-AHUBV1-US",sku:"AHUB EXPANSION DOCK",c:858.82},
  fwh_smartcirc:{id:41,d:"Smart Circuits Module",model:"ACCY-SCV2-US",sku:"SMART CIRCUITS MODULE",c:388.24},
  fwh_genmod:{id:42,d:"Generator Module",model:"ACCY-GENV2-US",sku:"GENERATOR MODULE",c:647.06}
},
panels:[{id:1,d:"435W Panel",model:"HIN-T435NF(BK)",sku:"HYUND HIN-T435NF(BK)",c:152,w:435,ck:"hyund435"},{id:2,d:"405W Panel",model:"HIS-405YH BK",sku:"HYUND HIS-405YH BK",c:114,w:405,ck:"hyund405"},{id:3,d:"400W BOB",model:"Q.PEAK DUO BLK ML-G10+ 400",sku:"QCELL 400W BOB",c:205,w:400,ck:"qcell410"},{id:4,d:"430W Panel",model:"QTRON-430",sku:"QTRON 430WATT",c:271,w:430,ck:"qtron430"}],
inverters:[{id:1,d:"IQ8M 72-Cell Micro",model:"IQ8M-72-2-US",c:184,ck:"iq8m"},{id:2,d:"IQ8+ 72-Cell Micro",model:"IQ8PLUS-72-M-US",c:170.31,ck:"iq8plus"},{id:3,d:"IQ8A 72-Cell Micro",model:"IQ8A-72-2-US",c:201,ck:"iq8a"},{id:4,d:"IQ7+ 72-Cell Micro",model:"IQ7PLUS-72-2-US",c:151,ck:"iq7plus"},{id:5,d:"IQ8HC 72-Cell Micro DOM",model:"IQ8HC-72-M-DOM-US",c:186,ck:"iq8hc"},{id:6,d:"IQ8AC 72-Cell Micro",model:"IQ8AC-72-M-US",c:156,ck:"iq8ac"},{id:7,d:"IQ8X 80-Cell Micro DOM",model:"IQ8X-80-M-DOM-US",c:175,ck:"iq8x"},{id:8,d:"IQ8MC 72-Cell Micro",model:"IQ8MC-72-M-US",c:140,ck:"iq8mc"}],
string_inv:[{id:1,d:"Tesla Standalone Inverter",model:"TESLA-INV",c:1400,ck:"tesla_standalone"}],
optimizers:[{id:1,d:"MCI OPTIMIZER 6 PANELS",c:270,p:6},{id:2,d:"MCI OPTIMIZER 12 PANELS",c:600,p:12},{id:3,d:"MC1 OPTIMIZER 18 PANELS",c:900,p:18},{id:4,d:"MC1 OPTIMIZER 24 PANELS",c:1200,p:24},{id:5,d:"MC1 OPTIMIZER 30 PANELS",c:1664,p:30},{id:6,d:"MC1 OPTIMIZER 36 PANELS",c:1800,p:36},{id:7,d:"MC1 OPTIMIZER 42 PANELS",c:2100,p:42},{id:8,d:"MC1 OPTIMIZER 48 PANELS",c:2400,p:48},{id:9,d:"MC1 OPTIMIZER 54 PANELS",c:2700,p:54},{id:10,d:"MC1 OPTIMIZER 60 PANELS",c:3000,p:60}],
racking:[{id:1,d:"IronRidge XR100 Landscape",model:"XR-100",c:55,def:true}],
monitoring:[{id:1,d:"Envoy S Metered w/combiner box",c:730,ck:"envoy_combo"},{id:2,d:"Envoy S Metered w/combiner box 5yr cell",c:1000,ck:"envoy_5yr"}],
// TESLA BATTERY PACKAGES — each row = full combo with price, svc=200A or 400A, batt=total battery count for labor matching
tesla_pkgs:[
{id:1,d:"1 PW3 + Smart Meter",svc:"200A",batt:1,kwh:13.5,kw:11.5,a:48,c:9158.75,pw3:1,exp:0,gw:0,sm:1},
{id:2,d:"2 PW3 + Smart Meter",svc:"200A",batt:2,kwh:27,kw:23,a:96,c:17671.00,pw3:2,exp:0,gw:0,sm:1},
{id:3,d:"3 PW3 + Smart Meter",svc:"200A",batt:3,kwh:40.5,kw:34.5,a:144,c:26183.25,pw3:3,exp:0,gw:0,sm:1},
{id:4,d:"1 PW3 + 1 Exp + Smart Meter",svc:"200A",batt:2,kwh:27,kw:11.5,a:48,c:15918.98,pw3:1,exp:1,gw:0,sm:1},
{id:5,d:"2 PW3 + 1 Exp + Smart Meter",svc:"200A",batt:3,kwh:40.5,kw:23,a:96,c:24431.23,pw3:2,exp:1,gw:0,sm:1},
{id:6,d:"3 PW3 + 1 Exp + Smart Meter",svc:"200A",batt:4,kwh:54,kw:34.5,a:144,c:32943.49,pw3:3,exp:1,gw:0,sm:1},
{id:7,d:"1 PW3 + 2 Exp + Smart Meter",svc:"200A",batt:3,kwh:40.5,kw:11.5,a:48,c:22679.22,pw3:1,exp:2,gw:0,sm:1},
{id:8,d:"1 PW3 + 3 Exp + Smart Meter",svc:"200A",batt:4,kwh:54,kw:11.5,a:48,c:29439.45,pw3:1,exp:3,gw:0,sm:1},
{id:9,d:"2 PW3 + 2 Exp + Smart Meter",svc:"200A",batt:4,kwh:54,kw:23,a:96,c:31191.47,pw3:2,exp:2,gw:0,sm:1},
{id:10,d:"1 PW3 + Gateway",svc:"400A",batt:1,kwh:13.5,kw:11.5,a:48,c:9482.00,pw3:1,exp:0,gw:1,sm:0},
{id:11,d:"2 PW3 + Gateway",svc:"400A",batt:2,kwh:27,kw:23,a:96,c:17994.25,pw3:2,exp:0,gw:1,sm:0},
{id:12,d:"3 PW3 + Gateway",svc:"400A",batt:3,kwh:40.5,kw:34.5,a:144,c:26506.50,pw3:3,exp:0,gw:1,sm:0},
{id:13,d:"4 PW3 + Gateway",svc:"400A",batt:4,kwh:54,kw:46,a:192,c:35018.75,pw3:4,exp:0,gw:1,sm:0},
{id:14,d:"1 PW3 + 1 Exp + Gateway",svc:"400A",batt:2,kwh:27,kw:11.5,a:48,c:16242.23,pw3:1,exp:1,gw:1,sm:0},
{id:15,d:"2 PW3 + 2 Exp + Gateway",svc:"400A",batt:4,kwh:54,kw:23,a:96,c:31514.72,pw3:2,exp:2,gw:1,sm:0},
{id:16,d:"3 PW3 + 2 Exp + Gateway",svc:"400A",batt:5,kwh:67.5,kw:34.5,a:144,c:40026.97,pw3:3,exp:2,gw:1,sm:0},
{id:17,d:"4 PW3 + 2 Exp + Gateway",svc:"400A",batt:6,kwh:81,kw:46,a:192,c:48539.22,pw3:4,exp:2,gw:1,sm:0}
],
tesla_labor:[
{id:1,d:"1 Batt (Smart Meter)",svc:"200A",batt:1,c:3000},
{id:2,d:"2 Batt (Smart Meter)",svc:"200A",batt:2,c:3500},
{id:3,d:"3 Batt (Smart Meter)",svc:"200A",batt:3,c:4000},
{id:4,d:"4 Batt (Smart Meter)",svc:"200A",batt:4,c:4500},
{id:5,d:"1 Batt (Gateway)",svc:"400A",batt:1,c:3000},
{id:6,d:"2 Batt (Gateway)",svc:"400A",batt:2,c:3500},
{id:7,d:"3 Batt (Gateway)",svc:"400A",batt:3,c:4000},
{id:8,d:"4 Batt (Gateway)",svc:"400A",batt:4,c:4500},
{id:9,d:"5 Batt (Gateway)",svc:"400A",batt:5,c:5000},
{id:10,d:"6 Batt (Gateway)",svc:"400A",batt:6,c:5500}
],
// ENPHASE IQ BATTERY 5P
// Packages: IQ Battery 5P DOM x N + IQ System Controller 3M + Combiner 5 or 5C + Control Cable + Comms Kit 2
// Prices auto-calculated from Component Pricing. comb: c5=Combiner 5, c5c=Combiner 5C (cellular)
enphase_5p_pkgs:[
{id:1,d:"1 Battery (5kWh) + Combiner 5",batt:1,kwh:5,kw:3.84,comb:"c5",c:6023.23},
{id:2,d:"2 Battery (10kWh) + Combiner 5",batt:2,kwh:10,kw:7.68,comb:"c5",c:9659.79},
{id:3,d:"3 Battery (15kWh) + Combiner 5",batt:3,kwh:15,kw:11.52,comb:"c5",c:13296.35},
{id:4,d:"4 Battery (20kWh) + Combiner 5",batt:4,kwh:20,kw:15.36,comb:"c5",c:16932.91},
{id:5,d:"1 Battery (5kWh) + Combiner 5C",batt:1,kwh:5,kw:3.84,comb:"c5c",c:6454.23},
{id:6,d:"2 Battery (10kWh) + Combiner 5C",batt:2,kwh:10,kw:7.68,comb:"c5c",c:10090.79},
{id:7,d:"3 Battery (15kWh) + Combiner 5C",batt:3,kwh:15,kw:11.52,comb:"c5c",c:13727.35},
{id:8,d:"4 Battery (20kWh) + Combiner 5C",batt:4,kwh:20,kw:15.36,comb:"c5c",c:17363.91}
],
enphase_5p_labor:[{id:1,d:"1 Battery Install",batt:1,c:3500},{id:2,d:"2 Battery Install",batt:2,c:4500},{id:3,d:"3 Battery Install",batt:3,c:5000},{id:4,d:"4 Battery Install",batt:4,c:5500}],
// FRANKLIN aPower 2 — AC-coupled battery, requires existing solar inverter
// Base components: aGate X + MAC + 2x CT Kit + APBox + Lug Kit + Main Load Relay + EQB = $4,548.22 pre-tax
// Battery: aPower 2 (APR-10K15V2-US) = $8,823.53/unit (15kWh, 10kW continuous)
franklin_ap2_pkgs:[
{id:1,d:"1 aPower 2 (15kWh)",batt:1,kwh:15,kw:10,c:14408.06},
{id:2,d:"2 aPower 2 (30kWh)",batt:2,kwh:30,kw:20,c:23915.41},
{id:3,d:"3 aPower 2 (45kWh)",batt:3,kwh:45,kw:30,c:33422.77},
{id:4,d:"4 aPower 2 (60kWh)",batt:4,kwh:60,kw:40,c:42930.12},
{id:5,d:"5 aPower 2 (75kWh)",batt:5,kwh:75,kw:50,c:52437.47}
],
// FRANKLIN aPower S — All-in-one with built-in solar inverter (no separate inverter needed)
// Battery: aPower S (APRS-10K15V1-US) = $10,294.12/unit (15kWh, 10kW cont., 11.5kW w/ PV)
franklin_aps_pkgs:[
{id:1,d:"1 aPower S (15kWh)",batt:1,kwh:15,kw:10,c:15992.62},
{id:2,d:"2 aPower S (30kWh)",batt:2,kwh:30,kw:20,c:27084.54},
{id:3,d:"3 aPower S (45kWh)",batt:3,kwh:45,kw:30,c:38176.45},
{id:4,d:"4 aPower S (60kWh)",batt:4,kwh:60,kw:40,c:49268.36},
{id:5,d:"5 aPower S (75kWh)",batt:5,kwh:75,kw:50,c:60360.28}
],
// FRANKLIN ADDERS — optional for both aPower 2 and aPower S
franklin_adders:[
{id:1,d:"aHub (Multi-Array / Generator / EV Integration)",sku:"ACCY-AHUBV1-US",c:925.38},
{id:2,d:"Smart Circuits Module (3 Circuits)",sku:"ACCY-SCV2-US",c:418.33},
{id:3,d:"Generator Module",sku:"ACCY-GENV2-US",c:697.21}
],
enphase_labor:[{id:1,d:"1 Enphase Batt Install",c:3500},{id:2,d:"2 Enphase Batt Whole Home",c:5000},{id:3,d:"3 Enphase Batt Whole Home",c:5500}],
// JOB COSTS
generators:[{id:1,d:"Generac 16kW #7178",c:9000},{id:2,d:"Generac 20kW #7038",c:10500},{id:3,d:"Generac 24kW #7210",c:11500},{id:4,d:"Kohler 12Kw",c:6915},{id:5,d:"Kohler 14Kw",c:8068},{id:6,d:"EGD-20RCAL NO/SOLAR",c:9419}],
gen_labor:[{id:1,d:"Standard Generator Install",c:3500},{id:2,d:"Extended Generator Install",c:4500}],
bollards:[{id:1,d:"Bollards (Garage)",c:500}],
smoke_det:[{id:1,d:"Smoke Detectors (Garage)",c:500}],
permits:[{id:1,d:"Permits placards",c:1500},{id:2,d:"Battery Only Permits",c:800}],
labor:[{id:1,d:"200A Service Rate",svc:"200A",c:0.65},{id:2,d:"400A Service Rate",svc:"400A",c:0.65}],
electrical:[{id:1,d:"METER UPGRADE UNDERGROUND",c:2600},{id:2,d:"METER UPGRADE OVERHEAD",c:2700},{id:3,d:"ADDITIONAL SUBPANEL",c:800},{id:4,d:"DERATE BREAKER",c:150},{id:5,d:"SUB PANEL 100",c:300},{id:6,d:"SUB PANEL 200",c:600}],
sitesurvey:[{id:1,d:"SOL SOURCE",c:250}],
trenching:[{id:1,d:"10 ft",c:190},{id:2,d:"20 ft",c:380},{id:3,d:"30 ft",c:570},{id:4,d:"40 ft",c:760},{id:5,d:"50 ft",c:950},{id:6,d:"60 ft",c:1140},{id:7,d:"70 ft",c:1330},{id:8,d:"80 ft",c:1520},{id:9,d:"90 ft",c:1710},{id:10,d:"100 ft",c:1900},{id:11,d:"130 ft",c:2470},{id:12,d:"160 ft",c:3040},{id:13,d:"190 ft",c:3610},{id:14,d:"220 ft",c:4180}],
nem:[{id:1,d:"PLANET PLANS/NEM/CALCS",c:1600},{id:2,d:"BATTERY ONLY",c:950}],
favi:[{id:1,d:"Favi Paperwork",c:800}],
office:[{id:1,d:"Office Work",c:500}],
financing:[
{id:1,d:"CASH",apr1:0,apr2:0,term:0,c:0,minLoan:0,f1:0,f2:0,grp:"cash"},
{id:2,d:"5.99% / 10yr",apr1:5.99,apr2:7.99,term:120,c:.06,minLoan:3500,f1:0.01109,f2:0.01213,grp:"5.99"},
{id:3,d:"5.99% / 12yr",apr1:5.99,apr2:7.99,term:144,c:.08,minLoan:7500,f1:0.00975,f2:0.01082,grp:"5.99"},
{id:4,d:"5.99% / 15yr",apr1:5.99,apr2:7.99,term:180,c:.09,minLoan:7500,f1:0.00843,f2:0.00955,grp:"5.99"},
{id:5,d:"5.99% / 20yr",apr1:5.99,apr2:7.99,term:240,c:.12,minLoan:15000,f1:0.00716,f2:0.00836,grp:"5.99"},
{id:6,d:"6.99% / 3yr",apr1:6.99,apr2:8.99,term:36,c:0,minLoan:3500,f1:0.03087,f2:0.03180,grp:"6.99"},
{id:7,d:"6.99% / 10yr",apr1:6.99,apr2:8.99,term:120,c:.03,minLoan:3500,f1:0.01161,f2:0.01266,grp:"6.99"},
{id:8,d:"6.99% / 12yr",apr1:6.99,apr2:8.99,term:144,c:.04,minLoan:7500,f1:0.01028,f2:0.01138,grp:"6.99"},
{id:9,d:"6.99% / 15yr",apr1:6.99,apr2:8.99,term:180,c:.06,minLoan:7500,f1:0.00898,f2:0.01014,grp:"6.99"},
{id:10,d:"6.99% / 20yr",apr1:6.99,apr2:8.99,term:240,c:.09,minLoan:15000,f1:0.00775,f2:0.00899,grp:"6.99"},
{id:11,d:"7.99% / 5yr",apr1:7.99,apr2:9.99,term:60,c:0,minLoan:3500,f1:0.02027,f2:0.02124,grp:"7.99"},
{id:12,d:"7.99% / 10yr",apr1:7.99,apr2:9.99,term:120,c:0,minLoan:3500,f1:0.01213,f2:0.01321,grp:"7.99"},
{id:13,d:"7.99% / 12yr",apr1:7.99,apr2:9.99,term:144,c:.02,minLoan:7500,f1:0.01082,f2:0.01195,grp:"7.99"},
{id:14,d:"7.99% / 15yr",apr1:7.99,apr2:9.99,term:180,c:.03,minLoan:7500,f1:0.00955,f2:0.01074,grp:"7.99"},
{id:15,d:"7.99% / 20yr",apr1:7.99,apr2:9.99,term:240,c:.06,minLoan:15000,f1:0.00836,f2:0.00964,grp:"7.99"},
{id:16,d:"8.99% / 12yr",apr1:8.99,apr2:10.99,term:144,c:0,minLoan:7500,f1:0.01138,f2:0.01253,grp:"8.99"},
{id:17,d:"8.99% / 15yr",apr1:8.99,apr2:10.99,term:180,c:0,minLoan:7500,f1:0.01014,f2:0.01136,grp:"8.99"},
{id:18,d:"8.99% / 20yr",apr1:8.99,apr2:10.99,term:240,c:.03,minLoan:15000,f1:0.00899,f2:0.01032,grp:"8.99"},
{id:19,d:"9.99% / 20yr",apr1:9.99,apr2:0,term:240,c:0,minLoan:15000,f1:0.00964,f2:0,grp:"9.99"},
{id:20,d:"9.99% / 25yr",apr1:9.99,apr2:0,term:300,c:.06,minLoan:30000,f1:0.00908,f2:0,grp:"9.99"}
],
samecash:[
{id:1,d:"CASH",c:0,apr:0,rate:0,term:0,minLoan:0,f1:0},
{id:2,d:"12MO Deferred 8.38%/11.99% 5yr",apr:8.38,rate:11.99,term:60,c:.08,minLoan:3500,f1:0.02224},
{id:3,d:"12MO Deferred 12.25%/14.99% 12yr",apr:12.25,rate:14.99,term:144,c:.12,minLoan:7500,f1:0.01500}
],
// EXTRAS
car_charger:[{id:1,d:"20FT w/ Battery",c:0},{id:2,d:"20-49 FT",c:200},{id:3,d:"50-100 FT",c:300}],
bird_netting:[{id:1,d:"Bird Netting",c:.12,pw:1}],
steep_roof:[{id:1,d:"Over 35 DEG",c:.20,pw:1}],
travel:[{id:1,d:"61-100 Miles",c:250},{id:2,d:"Over 100 Miles",c:500}],
mult_arr:[{id:1,d:"3 Arrays",c:350},{id:2,d:"5 Arrays",c:500}],
salesteam:[{id:1,d:"Josh",rate:200,battBonus:500,genBonus:300},{id:2,d:"Maria",rate:150,battBonus:400,genBonus:250}],
cfg:{comm:0,mgr:0,addcomm:"Disable",fed:0,minMargin:18,maxMargin:35,cc_addon_base:600,cc_standalone_base:1100,cc_perfoot:30,cc_free_feet:5,cc_owner_profit:1000,surveyor_email:"info@pellsolar.com"},
users:[{id:1,u:"Admin",p:"pellsolar100",role:"admin"},{id:2,u:"Sales",p:"pellsolar200",role:"sales"}]
};

var nid=200;
function gid(){nid++;return nid;}
function _id(id){return document.getElementById(id);}
function fm(n){return '$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});}
function fp(n){return (Number(n)*100).toFixed(1)+'%';}
function toast(m){var t=_id('toast');t.textContent=m;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2500);}
function showWarn(el,msg){if(!el)return;if(!msg){el.innerHTML='';return;}el.innerHTML='<div class="warn show"><span class="wi">\u26A0\uFE0F</span><div>'+msg+'</div></div>';}

// ===== COMPONENT PRICING ENGINE =====
// When a component price changes in admin, recalcAll() updates every line item that references it.
function wTax(v){return Math.round(v*(1+D.comp.tax)*100)/100;}
function recalcTeslaPkgs(){
  var pw3=D.comp.tesla_pw3.c;
  var expb=D.comp.tesla_exp_batt.c;
  var gw=D.comp.tesla_gw.c;
  var sm=D.comp.tesla_bsw.c+D.comp.tesla_rem.c;
  var expAcc=D.comp.tesla_exp_harness.c+D.comp.tesla_exp_wall.c;
  for(var i=0;i<D.tesla_pkgs.length;i++){
    var p=D.tesla_pkgs[i];
    if(p.pw3!=null){
      var pretax=(p.pw3*pw3)+(p.exp*expb)+(p.gw*gw)+(p.sm*sm)+(p.exp*expAcc);
      p.c=wTax(pretax);
    }
  }
}
function recalcLinked(){
  // Update items that have a ck (component key) linking to comp
  var cats=['panels','inverters','string_inv','monitoring'];
  for(var ci=0;ci<cats.length;ci++){
    var arr=D[cats[ci]];
    if(!arr)continue;
    for(var i=0;i<arr.length;i++){
      if(arr[i].ck&&D.comp[arr[i].ck]){
        arr[i].c=D.comp[arr[i].ck].c;
      }
    }
  }
}
function recalcEnphase5pPkgs(){
  var g=D.comp;
  var bat=g.enph_bat5p?g.enph_bat5p.c:3375;
  var ctrl=g.enph_ctrl3m?g.enph_ctrl3m.c:1565;
  var c5=g.enph_comb5?g.enph_comb5.c:650;
  var c5c=g.enph_comb5c?g.enph_comb5c.c:1050;
  var cable=g.enph_ctrl_cable?g.enph_ctrl_cable.c:0;
  var comms=g.enph_comms_kit?g.enph_comms_kit.c:0;
  for(var i=0;i<D.enphase_5p_pkgs.length;i++){
    var p=D.enphase_5p_pkgs[i];
    var combCost=(p.comb==='c5c')?c5c:c5;
    var pretax=(p.batt*bat)+ctrl+combCost+cable+comms;
    p.c=wTax(pretax);
  }
}
function recalcFranklinPkgs(){
  var g=D.comp;
  var base=0;
  var baseKeys=['fwh_agate','fwh_mac','fwh_ct200','fwh_apbox','fwh_lugkit','fwh_mainrelay','fwh_eqb'];
  for(var i=0;i<baseKeys.length;i++){if(g[baseKeys[i]])base+=g[baseKeys[i]].c;}
  var ap2=g.fwh_ap2?g.fwh_ap2.c:8823.53;
  var aps=g.fwh_aps?g.fwh_aps.c:10294.12;
  for(var i=0;i<D.franklin_ap2_pkgs.length;i++){
    var p=D.franklin_ap2_pkgs[i];
    p.c=wTax((p.batt*ap2)+base);
  }
  for(var i=0;i<D.franklin_aps_pkgs.length;i++){
    var p=D.franklin_aps_pkgs[i];
    p.c=wTax((p.batt*aps)+base);
  }
  // Adders
  var adderComps={1:'fwh_ahub',2:'fwh_smartcirc',3:'fwh_genmod'};
  for(var i=0;i<D.franklin_adders.length;i++){
    var ad=D.franklin_adders[i];
    var ck=adderComps[ad.id];
    if(ck&&g[ck])ad.c=wTax(g[ck].c);
  }
}
function recalcAll(){
  recalcTeslaPkgs();
  recalcEnphase5pPkgs();
  recalcFranklinPkgs();
  recalcLinked();
}

// ===== USER DATA OVERRIDE (from exported JSON) =====
D["comp"]={"tax": 0.0775, "tesla_pw3": {"id": 1, "d": "Powerwall 3 AC 13.5kW", "model": "1707000-XX-Y", "sku": "POWERWALL 3 AC 13.5KW BATTERY", "c": 7900}, "tesla_exp_batt": {"id": 2, "d": "PW3 Expansion Battery", "model": "1807000-00-Y", "sku": "POWERWALL 3 EXPANSION", "c": 6000}, "tesla_gw": {"id": 3, "d": "Gateway 3", "model": "1841000-01-Y", "sku": "GATEWAY 3", "c": 900}, "tesla_bsw": {"id": 4, "d": "Backup Switch Kit", "model": "1624171-00-X", "sku": "BACKUP SWITCH KIT", "c": 400}, "tesla_rem": {"id": 5, "d": "Remote Energy Meter Kit w/2 CTs", "model": "2045796-XX-Y", "sku": "REMOTE ENERGY METER KIT W/2 CTS", "c": 200}, "tesla_exp_harness": {"id": 6, "d": "Harness 2M - PW3 Expansion", "model": "1875157-20-Y", "sku": "HARNESS 2M - PW3 EXPANSION", "c": 159}, "tesla_exp_wall": {"id": 7, "d": "Wall Mount Kit - PW3 Expansion", "model": "1978069-XX-Y", "sku": "WALL MOUNT KIT - PW3 EXPANSION", "c": 115}, "tesla_exp_stack": {"id": 8, "d": "PW3 Expansion Stacking Kit", "model": "1978070-XX-Y", "sku": "PW3 EXPANSION WALL STACKING KIT", "c": 115}, "tesla_rsd": {"id": 20, "d": "Rapid Shutdown (MCI/RSD Gen 2)", "model": "1879359-15-X", "sku": "MCI/RSD GEN 2", "c": 41}, "hyund435": {"id": 9, "d": "Hyundai 435W", "model": "HIN-T435NF(BK)", "sku": "HYUND HIN-T435NF(BK)", "c": 152}, "hyund405": {"id": 10, "d": "Hyundai 405W", "model": "HIS-405YH BK", "sku": "HYUND HIS-405YH BK", "c": 114}, "qcell410": {"id": 11, "d": "QCell 400W BOB", "model": "Q.PEAK DUO BLK ML-G10+ 400", "sku": "400W BOB", "c": 205}, "qtron430": {"id": 12, "d": "QTron 430W", "model": "QTRON-430", "sku": "QTRON 430WATT", "c": 271}, "iq8m": {"id": 13, "d": "Enphase IQ 8M Micro", "model": "IQ8M-72-2-US", "sku": "IQ8M 72-CELL MICRO", "c": 184}, "iq8plus": {"id": 14, "d": "Enphase IQ 8+ Micro", "model": "IQ8PLUS-72-M-US", "sku": "IQ8PLUS 72-CELL MICRO", "c": 170.31}, "iq8a": {"id": 15, "d": "Enphase IQ 8A Micro", "model": "IQ8A-72-2-US", "sku": "IQ8A 72-CELL MICRO", "c": 201}, "iq7plus": {"id": 16, "d": "Enphase IQ 7+ Micro", "model": "IQ7PLUS-72-2-US", "sku": "IQ7PLUS 72-CELL MICRO", "c": 151}, "tesla_standalone": {"id": 17, "d": "Tesla Standalone Inverter", "model": "TESLA-INV", "sku": "TESLA STANDALONE INVERTER", "c": 1400}, "envoy_combo": {"id": 18, "d": "Combiner w/Gateway & Hold Down", "model": "X-IQ-AM1-240-5-HDK", "sku": "COMBINER W/GATEWAY & HOLD DOWN", "c": 650}, "envoy_5yr": {"id": 19, "d": "Mobile Connect 5yr LTE Cell", "model": "CELLMODEM-M1-06-SP-05", "sku": "MOBILE CONNECT 5YR LTE M1 CELL", "c": 370}, "enph_bat5p": {"id": 21, "d": "IQ Battery 5P DOM", "model": "IQBATTERY-5P-1P-NA-DOM-NFC", "sku": "IQ BATTERY 5P DOMESTIC", "c": 3375}, "enph_ctrl3m": {"id": 22, "d": "IQ System Controller 3M", "model": "SC200D111CMC1US01", "sku": "IQ SYSTEM CONTROLLER 3M", "c": 1565}, "enph_comb5": {"id": 23, "d": "IQ Combiner 5 (WiFi/Ethernet)", "model": "X-IQ-AM1-240-5-HDK", "sku": "IQ COMBINER 5", "c": 650}, "enph_comb5c": {"id": 24, "d": "IQ Combiner 5C (Cellular)", "model": "X-IQ-AM1-240-5C-HDK", "sku": "IQ COMBINER 5C", "c": 1050}, "enph_ctrl_cable": {"id": 25, "d": "Control Cable (500ft Spool)", "model": "CTRL-SC3-NA-01", "sku": "CONTROL CABLE CTRL-SC3-NA-01", "c": 0}, "enph_comms_kit": {"id": 26, "d": "Communications Kit 2", "model": "COMMS-KIT-02", "sku": "COMMUNICATIONS KIT 2", "c": 0}, "iq8hc": {"id": 27, "d": "Enphase IQ8HC Micro (DOM)", "model": "IQ8HC-72-M-DOM-US", "sku": "IQ8HC 72-CELL MICRO DOM", "c": 186}, "iq8ac": {"id": 28, "d": "Enphase IQ8AC Micro", "model": "IQ8AC-72-M-US", "sku": "IQ8AC 72-CELL MICRO", "c": 156}, "iq8x": {"id": 29, "d": "Enphase IQ8X Micro (DOM)", "model": "IQ8X-80-M-DOM-US", "sku": "IQ8X 80-CELL MICRO DOM", "c": 175}, "iq8mc": {"id": 30, "d": "Enphase IQ8MC Micro", "model": "IQ8MC-72-M-US", "sku": "IQ8MC 72-CELL MICRO", "c": 140}, "fwh_ap2": {"id": 31, "d": "aPower 2 Battery (15kWh)", "model": "APR-10K15V2-US", "sku": "APOWER 2 15KWH BATTERY", "c": 8823.53}, "fwh_aps": {"id": 32, "d": "aPower S Battery w/ Inverter (15kWh)", "model": "APRS-10K15V1-US", "sku": "APOWER S 15KWH ALL-IN-ONE", "c": 10294.12}, "fwh_agate": {"id": 33, "d": "aGate X (Energy Hub)", "model": "AGT-R1V3-US", "sku": "AGATE X HUB", "c": 1411.76}, "fwh_mac": {"id": 34, "d": "MAC (Meter Adapter Controller)", "model": "MAC-R1V1-US", "sku": "METER ADAPTER CONTROLLER", "c": 735.29}, "fwh_ct200": {"id": 35, "d": "200A CT Kit (x2 included)", "model": "ACCY-CT200V2-US", "sku": "200A CT KIT", "c": 105.88}, "fwh_apbox": {"id": 36, "d": "APBox (Outdoor Enclosure)", "model": "ACCY-RCV1-US", "sku": "APBOX OUTDOOR ENCLOSURE", "c": 776.47}, "fwh_lugkit": {"id": 37, "d": "Backup Expansion Lug Kit", "model": "ACCY-BLV2-US", "sku": "BACKUP EXPANSION LUG KIT", "c": 88.24}, "fwh_mainrelay": {"id": 38, "d": "Main Load Relay", "model": "ACCY-MRV2-US", "sku": "MAIN LOAD RELAY", "c": 258.82}, "fwh_eqb": {"id": 39, "d": "EQB Backup Switch (MIM 200)", "model": "MIM 200 PLUS PE-FWH", "sku": "EQB BACKUP SWITCH", "c": 1171.76}, "fwh_ahub": {"id": 40, "d": "aHub (Multi-Array/Generator/EV)", "model": "ACCY-AHUBV1-US", "sku": "AHUB EXPANSION DOCK", "c": 858.82}, "fwh_smartcirc": {"id": 41, "d": "Smart Circuits Module", "model": "ACCY-SCV2-US", "sku": "SMART CIRCUITS MODULE", "c": 388.24}, "fwh_genmod": {"id": 42, "d": "Generator Module", "model": "ACCY-GENV2-US", "sku": "GENERATOR MODULE", "c": 647.06}};
D["panels"]=[{"id": 1, "d": "435W Panel", "model": "HIN-T435NF(BK)", "sku": "HYUND HIN-T435NF(BK)", "c": 141.72, "w": 435, "ck": "hyund435"}, {"id": 2, "d": "HYUND HIS-405YH BK", "model": "HYUND HIS-405YH BK", "sku": "HYUND HIS-405YH BK", "c": 106.29, "w": 405, "ck": "hyund405"}, {"id": 3, "d": "410W BOB", "model": "Q.PEAK DUO BLK ML-G10+ 410", "sku": "QCELL 400W BOB", "c": 228.44, "w": 410, "ck": "qcell410"}, {"id": 4, "d": "430W Panel", "model": "QTRON 430 WATT", "sku": "QTRON 430WATT", "c": 252.68, "w": 430, "ck": "qtron430"}];
D["inverters"]=[{"id": 1, "d": "IQ8M 72-Cell Micro", "model": "IQ8M-72-2-US", "c": 184, "ck": "iq8m"}, {"id": 2, "d": "IQ8+ 72-Cell Micro", "model": "IQ8PLUS-72-M-US", "c": 170.31, "ck": "iq8plus"}, {"id": 3, "d": "IQ8A 72-Cell Micro", "model": "IQ8A-72-2-US", "c": 201, "ck": "iq8a"}, {"id": 4, "d": "IQ7+ 72-Cell Micro", "model": "IQ7PLUS-72-2-US", "c": 151, "ck": "iq7plus"}, {"id": 5, "d": "IQ8HC 72-Cell Micro DOM", "model": "IQ8HC-72-M-DOM-US", "c": 186, "ck": "iq8hc"}, {"id": 6, "d": "IQ8AC 72-Cell Micro", "model": "IQ8AC-72-M-US", "c": 156, "ck": "iq8ac"}, {"id": 7, "d": "IQ8X 80-Cell Micro DOM", "model": "IQ8X-80-M-DOM-US", "c": 175, "ck": "iq8x"}, {"id": 8, "d": "IQ8MC 72-Cell Micro", "model": "IQ8MC-72-M-US", "c": 140, "ck": "iq8mc"}];
D["string_inv"]=[{"id": 1, "d": "Tesla Standalone Inverter", "model": "TESLA-INV", "c": 1400, "ck": "tesla_standalone"}];
D["optimizers"]=[{"id": 1, "d": "MCI OPTIMIZER 6 PANELS", "c": 270, "p": 6}, {"id": 2, "d": "MCI OPTIMIZER 12 PANELS", "c": 600, "p": 12}, {"id": 3, "d": "MC1 OPTIMIZER 18 PANELS", "c": 900, "p": 18}, {"id": 4, "d": "MC1 OPTIMIZER 24 PANELS", "c": 1200, "p": 24}, {"id": 5, "d": "MC1 OPTIMIZER 30 PANELS", "c": 1664, "p": 30}, {"id": 6, "d": "MC1 OPTIMIZER 36 PANELS", "c": 1800, "p": 36}, {"id": 7, "d": "MC1 OPTIMIZER 42 PANELS", "c": 2100, "p": 42}, {"id": 8, "d": "MC1 OPTIMIZER 48 PANELS", "c": 2400, "p": 48}, {"id": 9, "d": "MC1 OPTIMIZER 54 PANELS", "c": 2700, "p": 54}, {"id": 10, "d": "MC1 OPTIMIZER 60 PANELS", "c": 3000, "p": 60}];
D["racking"]=[{"id": 1, "d": "IronRidge XR100 Landscape", "model": "XR-100", "c": 55, "def": true}];
D["monitoring"]=[{"id": 1, "d": "Envoy S Metered w/combiner box", "c": 730, "ck": "envoy_combo"}, {"id": 2, "d": "Envoy S Metered w/combiner box 5yr cell", "c": 1000, "ck": "envoy_5yr"}];
D["tesla_pkgs"]=[{"id": 1, "d": "1 PW3 + Smart Meter", "svc": "200A", "batt": 1, "kwh": 13.5, "kw": 11.5, "a": 48, "c": 9158.75, "pw3": 1, "exp": 0, "gw": 0, "sm": 1}, {"id": 2, "d": "2 PW3 + Smart Meter", "svc": "200A", "batt": 2, "kwh": 27, "kw": 23, "a": 96, "c": 17671, "pw3": 2, "exp": 0, "gw": 0, "sm": 1}, {"id": 3, "d": "3 PW3 + Smart Meter", "svc": "200A", "batt": 3, "kwh": 40.5, "kw": 34.5, "a": 144, "c": 26183.25, "pw3": 3, "exp": 0, "gw": 0, "sm": 1}, {"id": 4, "d": "1 PW3 + 1 Exp + Smart Meter", "svc": "200A", "batt": 2, "kwh": 27, "kw": 11.5, "a": 48, "c": 15918.98, "pw3": 1, "exp": 1, "gw": 0, "sm": 1}, {"id": 5, "d": "2 PW3 + 1 Exp + Smart Meter", "svc": "200A", "batt": 3, "kwh": 40.5, "kw": 23, "a": 96, "c": 24431.23, "pw3": 2, "exp": 1, "gw": 0, "sm": 1}, {"id": 6, "d": "3 PW3 + 1 Exp + Smart Meter", "svc": "200A", "batt": 4, "kwh": 54, "kw": 34.5, "a": 144, "c": 32943.49, "pw3": 3, "exp": 1, "gw": 0, "sm": 1}, {"id": 7, "d": "1 PW3 + 2 Exp + Smart Meter", "svc": "200A", "batt": 3, "kwh": 40.5, "kw": 11.5, "a": 48, "c": 22679.22, "pw3": 1, "exp": 2, "gw": 0, "sm": 1}, {"id": 8, "d": "1 PW3 + 3 Exp + Smart Meter", "svc": "200A", "batt": 4, "kwh": 54, "kw": 11.5, "a": 48, "c": 29439.45, "pw3": 1, "exp": 3, "gw": 0, "sm": 1}, {"id": 9, "d": "2 PW3 + 2 Exp + Smart Meter", "svc": "200A", "batt": 4, "kwh": 54, "kw": 23, "a": 96, "c": 31191.47, "pw3": 2, "exp": 2, "gw": 0, "sm": 1}, {"id": 10, "d": "1 PW3 + Gateway", "svc": "400A", "batt": 1, "kwh": 13.5, "kw": 11.5, "a": 48, "c": 9482, "pw3": 1, "exp": 0, "gw": 1, "sm": 0}, {"id": 11, "d": "2 PW3 + Gateway", "svc": "400A", "batt": 2, "kwh": 27, "kw": 23, "a": 96, "c": 17994.25, "pw3": 2, "exp": 0, "gw": 1, "sm": 0}, {"id": 12, "d": "3 PW3 + Gateway", "svc": "400A", "batt": 3, "kwh": 40.5, "kw": 34.5, "a": 144, "c": 26506.5, "pw3": 3, "exp": 0, "gw": 1, "sm": 0}, {"id": 13, "d": "4 PW3 + Gateway", "svc": "400A", "batt": 4, "kwh": 54, "kw": 46, "a": 192, "c": 35018.75, "pw3": 4, "exp": 0, "gw": 1, "sm": 0}, {"id": 14, "d": "1 PW3 + 1 Exp + Gateway", "svc": "400A", "batt": 2, "kwh": 27, "kw": 11.5, "a": 48, "c": 16242.23, "pw3": 1, "exp": 1, "gw": 1, "sm": 0}, {"id": 15, "d": "2 PW3 + 2 Exp + Gateway", "svc": "400A", "batt": 4, "kwh": 54, "kw": 23, "a": 96, "c": 31514.72, "pw3": 2, "exp": 2, "gw": 1, "sm": 0}, {"id": 16, "d": "3 PW3 + 2 Exp + Gateway", "svc": "400A", "batt": 5, "kwh": 67.5, "kw": 34.5, "a": 144, "c": 40026.97, "pw3": 3, "exp": 2, "gw": 1, "sm": 0}, {"id": 17, "d": "4 PW3 + 2 Exp + Gateway", "svc": "400A", "batt": 6, "kwh": 81, "kw": 46, "a": 192, "c": 48539.22, "pw3": 4, "exp": 2, "gw": 1, "sm": 0}];
D["tesla_labor"]=[{"id": 1, "d": "1 Batt (Smart Meter)", "svc": "200A", "batt": 1, "c": 3000}, {"id": 2, "d": "2 Batt (Smart Meter)", "svc": "200A", "batt": 2, "c": 3500}, {"id": 3, "d": "3 Batt (Smart Meter)", "svc": "200A", "batt": 3, "c": 4000}, {"id": 4, "d": "4 Batt (Smart Meter)", "svc": "200A", "batt": 4, "c": 4500}, {"id": 5, "d": "1 Batt (Gateway)", "svc": "400A", "batt": 1, "c": 3000}, {"id": 6, "d": "2 Batt (Gateway)", "svc": "400A", "batt": 2, "c": 3500}, {"id": 7, "d": "3 Batt (Gateway)", "svc": "400A", "batt": 3, "c": 4000}, {"id": 8, "d": "4 Batt (Gateway)", "svc": "400A", "batt": 4, "c": 4500}, {"id": 9, "d": "5 Batt (Gateway)", "svc": "400A", "batt": 5, "c": 5000}, {"id": 10, "d": "6 Batt (Gateway)", "svc": "400A", "batt": 6, "c": 5500}];
D["enphase_5p_pkgs"]=[{"id":1,"d":"1 Battery (5kWh) + Combiner 5","batt":1,"kwh":5,"kw":3.84,"comb":"c5","c":6023.23},{"id":2,"d":"2 Battery (10kWh) + Combiner 5","batt":2,"kwh":10,"kw":7.68,"comb":"c5","c":9659.79},{"id":3,"d":"3 Battery (15kWh) + Combiner 5","batt":3,"kwh":15,"kw":11.52,"comb":"c5","c":13296.35},{"id":4,"d":"4 Battery (20kWh) + Combiner 5","batt":4,"kwh":20,"kw":15.36,"comb":"c5","c":16932.91},{"id":5,"d":"1 Battery (5kWh) + Combiner 5C","batt":1,"kwh":5,"kw":3.84,"comb":"c5c","c":6454.23},{"id":6,"d":"2 Battery (10kWh) + Combiner 5C","batt":2,"kwh":10,"kw":7.68,"comb":"c5c","c":10090.79},{"id":7,"d":"3 Battery (15kWh) + Combiner 5C","batt":3,"kwh":15,"kw":11.52,"comb":"c5c","c":13727.35},{"id":8,"d":"4 Battery (20kWh) + Combiner 5C","batt":4,"kwh":20,"kw":15.36,"comb":"c5c","c":17363.91}];
D["enphase_5p_labor"]=[{"id":1,"d":"1 Battery Install","batt":1,"c":3500},{"id":2,"d":"2 Battery Install","batt":2,"c":4500},{"id":3,"d":"3 Battery Install","batt":3,"c":5000},{"id":4,"d":"4 Battery Install","batt":4,"c":5500}];
D["franklin_ap2_pkgs"]=[{"id":1,"d":"1 aPower 2 (15kWh)","batt":1,"kwh":15,"kw":10,"c":14408.06},{"id":2,"d":"2 aPower 2 (30kWh)","batt":2,"kwh":30,"kw":20,"c":23915.41},{"id":3,"d":"3 aPower 2 (45kWh)","batt":3,"kwh":45,"kw":30,"c":33422.77},{"id":4,"d":"4 aPower 2 (60kWh)","batt":4,"kwh":60,"kw":40,"c":42930.12},{"id":5,"d":"5 aPower 2 (75kWh)","batt":5,"kwh":75,"kw":50,"c":52437.47}];
D["franklin_aps_pkgs"]=[{"id":1,"d":"1 aPower S (15kWh)","batt":1,"kwh":15,"kw":10,"c":15992.62},{"id":2,"d":"2 aPower S (30kWh)","batt":2,"kwh":30,"kw":20,"c":27084.54},{"id":3,"d":"3 aPower S (45kWh)","batt":3,"kwh":45,"kw":30,"c":38176.45},{"id":4,"d":"4 aPower S (60kWh)","batt":4,"kwh":60,"kw":40,"c":49268.36},{"id":5,"d":"5 aPower S (75kWh)","batt":5,"kwh":75,"kw":50,"c":60360.28}];
D["franklin_adders"]=[{"id":1,"d":"aHub (Multi-Array / Generator / EV Integration)","sku":"ACCY-AHUBV1-US","c":925.38},{"id":2,"d":"Smart Circuits Module (3 Circuits)","sku":"ACCY-SCV2-US","c":418.33},{"id":3,"d":"Generator Module","sku":"ACCY-GENV2-US","c":697.21}];
D["enphase_labor"]=[{"id": 1, "d": "1 Enphase Batt Install", "c": 3500}, {"id": 2, "d": "2 Enphase Batt Whole Home", "c": 5000}, {"id": 3, "d": "3 Enphase Batt Whole Home", "c": 5500}];
D["generators"]=[{"id": 1, "d": "Generac 16kW #7178", "c": 9000}, {"id": 2, "d": "Generac 20kW #7038", "c": 10500}, {"id": 3, "d": "Generac 24kW #7210", "c": 11500}, {"id": 4, "d": "Kohler 12Kw", "c": 6915}, {"id": 5, "d": "Kohler 14Kw", "c": 8068}, {"id": 6, "d": "EGD-20RCAL NO/SOLAR", "c": 9419}];
D["gen_labor"]=[{"id": 1, "d": "Standard Generator Install", "c": 3500}, {"id": 2, "d": "Extended Generator Install", "c": 4500}];
D["bollards"]=[{"id": 1, "d": "Bollards (Garage)", "c": 500}];
D["smoke_det"]=[{"id": 1, "d": "Smoke Detectors (Garage)", "c": 500}];
D["permits"]=[{"id": 1, "d": "Permits placards", "c": 1500}, {"id": 2, "d": "Battery Only Permits", "c": 800}];
D["labor"]=[{"id": 1, "d": "200A Service Rate", "svc": "200A", "c": 0.65}, {"id": 2, "d": "400A Service Rate", "svc": "400A", "c": 0.65}];
D["electrical"]=[{"id": 1, "d": "METER UPGRADE UNDERGROUND", "c": 2600}, {"id": 2, "d": "METER UPGRADE OVERHEAD", "c": 2700}, {"id": 3, "d": "ADDITIONAL SUBPANEL", "c": 800}, {"id": 4, "d": "DERATE BREAKER", "c": 150}, {"id": 5, "d": "SUB PANEL 100", "c": 300}, {"id": 6, "d": "SUB PANEL 200", "c": 600}];
D["sitesurvey"]=[{"id": 1, "d": "SOL SOURCE", "c": 250}];
D["trenching"]=[{"id": 1, "d": "10 ft", "c": 190}, {"id": 2, "d": "20 ft", "c": 380}, {"id": 3, "d": "30 ft", "c": 570}, {"id": 4, "d": "40 ft", "c": 760}, {"id": 5, "d": "50 ft", "c": 950}, {"id": 6, "d": "60 ft", "c": 1140}, {"id": 7, "d": "70 ft", "c": 1330}, {"id": 8, "d": "80 ft", "c": 1520}, {"id": 9, "d": "90 ft", "c": 1710}, {"id": 10, "d": "100 ft", "c": 1900}, {"id": 11, "d": "130 ft", "c": 2470}, {"id": 12, "d": "160 ft", "c": 3040}, {"id": 13, "d": "190 ft", "c": 3610}, {"id": 14, "d": "220 ft", "c": 4180}];
D["nem"]=[{"id": 1, "d": "PLANET PLANS/NEM/CALCS", "c": 1600}, {"id": 2, "d": "BATTERY ONLY", "c": 950}];
D["favi"]=[{"id": 1, "d": "Favi Paperwork", "c": 800}];
D["office"]=[{"id": 1, "d": "Office Work", "c": 500}];
D["financing"]=[{"id": 1, "d": "CASH", "apr1": 0, "apr2": 0, "term": 0, "c": 0, "minLoan": 0, "f1": 0, "f2": 0, "grp": "cash"}, {"id": 2, "d": "5.99% / 10yr", "apr1": 5.99, "apr2": 7.99, "term": 120, "c": 0.06, "minLoan": 3500, "f1": 0.01109, "f2": 0.01213, "grp": "5.99"}, {"id": 3, "d": "5.99% / 12yr", "apr1": 5.99, "apr2": 7.99, "term": 144, "c": 0.08, "minLoan": 7500, "f1": 0.00975, "f2": 0.01082, "grp": "5.99"}, {"id": 4, "d": "5.99% / 15yr", "apr1": 5.99, "apr2": 7.99, "term": 180, "c": 0.09, "minLoan": 7500, "f1": 0.00843, "f2": 0.00955, "grp": "5.99"}, {"id": 5, "d": "5.99% / 20yr", "apr1": 5.99, "apr2": 7.99, "term": 240, "c": 0.12, "minLoan": 15000, "f1": 0.00716, "f2": 0.00836, "grp": "5.99"}, {"id": 6, "d": "6.99% / 3yr", "apr1": 6.99, "apr2": 8.99, "term": 36, "c": 0, "minLoan": 3500, "f1": 0.03087, "f2": 0.0318, "grp": "6.99"}, {"id": 7, "d": "6.99% / 10yr", "apr1": 6.99, "apr2": 8.99, "term": 120, "c": 0.03, "minLoan": 3500, "f1": 0.01161, "f2": 0.01266, "grp": "6.99"}, {"id": 8, "d": "6.99% / 12yr", "apr1": 6.99, "apr2": 8.99, "term": 144, "c": 0.04, "minLoan": 7500, "f1": 0.01028, "f2": 0.01138, "grp": "6.99"}, {"id": 9, "d": "6.99% / 15yr", "apr1": 6.99, "apr2": 8.99, "term": 180, "c": 0.06, "minLoan": 7500, "f1": 0.00898, "f2": 0.01014, "grp": "6.99"}, {"id": 10, "d": "6.99% / 20yr", "apr1": 6.99, "apr2": 8.99, "term": 240, "c": 0.09, "minLoan": 15000, "f1": 0.00775, "f2": 0.00899, "grp": "6.99"}, {"id": 11, "d": "7.99% / 5yr", "apr1": 7.99, "apr2": 9.99, "term": 60, "c": 0, "minLoan": 3500, "f1": 0.02027, "f2": 0.02124, "grp": "7.99"}, {"id": 12, "d": "7.99% / 10yr", "apr1": 7.99, "apr2": 9.99, "term": 120, "c": 0, "minLoan": 3500, "f1": 0.01213, "f2": 0.01321, "grp": "7.99"}, {"id": 13, "d": "7.99% / 12yr", "apr1": 7.99, "apr2": 9.99, "term": 144, "c": 0.02, "minLoan": 7500, "f1": 0.01082, "f2": 0.01195, "grp": "7.99"}, {"id": 14, "d": "7.99% / 15yr", "apr1": 7.99, "apr2": 9.99, "term": 180, "c": 0.03, "minLoan": 7500, "f1": 0.00955, "f2": 0.01074, "grp": "7.99"}, {"id": 15, "d": "7.99% / 20yr", "apr1": 7.99, "apr2": 9.99, "term": 240, "c": 0.06, "minLoan": 15000, "f1": 0.00836, "f2": 0.00964, "grp": "7.99"}, {"id": 16, "d": "8.99% / 12yr", "apr1": 8.99, "apr2": 10.99, "term": 144, "c": 0, "minLoan": 7500, "f1": 0.01138, "f2": 0.01253, "grp": "8.99"}, {"id": 17, "d": "8.99% / 15yr", "apr1": 8.99, "apr2": 10.99, "term": 180, "c": 0, "minLoan": 7500, "f1": 0.01014, "f2": 0.01136, "grp": "8.99"}, {"id": 18, "d": "8.99% / 20yr", "apr1": 8.99, "apr2": 10.99, "term": 240, "c": 0.03, "minLoan": 15000, "f1": 0.00899, "f2": 0.01032, "grp": "8.99"}, {"id": 19, "d": "9.99% / 20yr", "apr1": 9.99, "apr2": 0, "term": 240, "c": 0, "minLoan": 15000, "f1": 0.00964, "f2": 0, "grp": "9.99"}, {"id": 20, "d": "9.99% / 25yr", "apr1": 9.99, "apr2": 0, "term": 300, "c": 0.06, "minLoan": 30000, "f1": 0.00908, "f2": 0, "grp": "9.99"}];
D["samecash"]=[{"id": 1, "d": "CASH", "c": 0, "apr": 0, "rate": 0, "term": 0, "minLoan": 0, "f1": 0}, {"id": 2, "d": "12MO Deferred 8.38%/11.99% 5yr", "apr": 8.38, "rate": 11.99, "term": 60, "c": 0.08, "minLoan": 3500, "f1": 0.02224}, {"id": 3, "d": "12MO Deferred 12.25%/14.99% 12yr", "apr": 12.25, "rate": 14.99, "term": 144, "c": 0.12, "minLoan": 7500, "f1": 0.015}];
D["car_charger"]=[{"id": 1, "d": "20FT w/ Battery", "c": 0}, {"id": 2, "d": "20-49 FT", "c": 200}, {"id": 3, "d": "50-100 FT", "c": 300}];
D["bird_netting"]=[{"id": 1, "d": "Bird Netting", "c": 0.12, "pw": 1}];
D["steep_roof"]=[{"id": 1, "d": "Over 35 DEG", "c": 0.2, "pw": 1}];
D["travel"]=[{"id": 1, "d": "61-100 Miles", "c": 250}, {"id": 2, "d": "Over 100 Miles", "c": 500}];
D["mult_arr"]=[{"id": 1, "d": "3 Arrays", "c": 350}, {"id": 2, "d": "5 Arrays", "c": 500}];
D["salesteam"]=[{"id": 1, "d": "Josh", "rate": 200, "battBonus": 500, "genBonus": 300}, {"id": 2, "d": "Maria", "rate": 150, "battBonus": 400, "genBonus": 250}];
D["cfg"]={"comm": 0, "mgr": 0, "addcomm": "Disable", "fed": 0, "minMargin": 18, "maxMargin": 35, "cc_addon_base": 600, "cc_standalone_base": 1100, "cc_perfoot": 30, "cc_free_feet": 5};
D["users"]=[{"id": 1, "u": "Admin", "p": "pellsolar100", "role": "admin"}, {"id": 2, "u": "Sales", "p": "pellsolar200", "role": "sales"}];
recalcAll();
// ===== END USER DATA OVERRIDE =====


// ===== LOGIN =====
var currentUser=null;
function doLogin(){
  var uv=_id('lu').value.trim();var pv=_id('lp').value.trim();
  var found=null;
  for(var i=0;i<D.users.length;i++){if(D.users[i].u===uv&&D.users[i].p===pv){found=D.users[i];break;}}
  if(found){
    currentUser=found;
    _id('LO').classList.add('hidden');_id('app').classList.add('on');buildAside();showSec('panels');
    var unEl=document.querySelector('.tnu');if(unEl)unEl.textContent=found.u;
    // Wake up Render API
    try{fetch('https://pell-solar-contract-api.onrender.com/health',{method:'GET',mode:'no-cors'}).catch(function(){});}catch(e){}
  }else{_id('le').style.display='block';setTimeout(function(){_id('le').style.display='none';},3000);}
}
var lpEl=_id('lp');if(lpEl)lpEl.onkeydown=function(ev){if(ev.key==='Enter')doLogin();};
function doLogout(){currentUser=null;_id('LO').classList.remove('hidden');_id('app').classList.remove('on');_id('lu').value='';_id('lp').value='';}

// ===== NAV =====
function goPage(p,el){
  var pages=document.querySelectorAll('.page');for(var i=0;i<pages.length;i++)pages[i].classList.remove('on');
  var tabs=document.querySelectorAll('.tab');for(var i=0;i<tabs.length;i++)tabs[i].classList.remove('on');
  _id('p-'+p).classList.add('on');el.classList.add('on');if(p==='ca')renderCA();
}

function buildAside(){
var cats=[
['Product Catalog',[['panels','Panels'],['inverters','Microinverters'],['string_inv','String Inverters'],['optimizers','Optimizers'],['racking','Racking'],['monitoring','Monitoring']]],
['Tesla System',[['tesla_pkgs','Battery Packages'],['tesla_labor','Battery Labor']]],
['Enphase IQ Battery 5P',[['enphase_5p_pkgs','5P Packages'],['enphase_5p_labor','5P Labor'],['enphase_labor','4th Gen Labor']]],
['Franklin aPower',[['franklin_ap2_pkgs','aPower 2 Packages'],['franklin_aps_pkgs','aPower S Packages'],['franklin_adders','Franklin Adders']]],
['Job Costs',[['permits','Permits'],['labor','Install Labor'],['electrical','Electrical'],['trenching','Trenching'],['sitesurvey','Site Survey'],['nem','NEM Paperwork'],['favi','Favi Paperwork'],['office','Office Work'],['generators','Generators'],['gen_labor','Generator Labor'],['bollards','Bollards'],['smoke_det','Smoke Detectors']]],
['Extras',[['car_charger','Car Charger'],['bird_netting','Bird Netting'],['steep_roof','Steep Roof'],['travel','Travel'],['mult_arr','Multiple Arrays']]],
['Finance & Config',[['financing','Financing'],['samecash','Same as Cash'],['salesteam','Sales Team'],['comp','Component Pricing'],['cfg','Configuration'],['users','Users']]]
];
var h='';
for(var ci=0;ci<cats.length;ci++){
  var cat=cats[ci];
  h+='<div class="aside-t">'+cat[0]+'</div>';
  for(var ii=0;ii<cat[1].length;ii++){
    var it=cat[1][ii];
    h+='<div class="ni'+(ci===0&&ii===0?' on':'')+'" onclick="showSec(\''+it[0]+'\',this)"><span class="dot"></span>'+it[1]+'</div>';
  }
  if(ci<cats.length-1)h+='<div class="ndiv"></div>';
}
_id('asideNav').innerHTML=h;
}
function showSec(k,el){var nils=document.querySelectorAll('.ni');for(var i=0;i<nils.length;i++)nils[i].classList.remove('on');if(el)el.classList.add('on');renderSec(k);}

// ===== ADMIN RENDER =====
var META={
panels:{t:"Solar Panels",s:"Panel brands, wattage & pricing",cols:['model:Model #:25%','d:Description:25%','w:Wattage:10%:r','c:Cost:12%:r:m'],f:'model:Model #:text,d:Description:text,w:Wattage:number,c:Cost ($):number'},
inverters:{t:"Microinverters",s:"Enphase IQ8 — one per panel",cols:['model:Model #:30%','d:Description:30%','c:Cost:18%:r:m'],f:'model:Model #:text,d:Description:text,c:Cost ($):number'},
string_inv:{t:"String Inverters",s:"Standalone inverters (no-battery systems only)",cols:['model:Model #:30%','d:Description:30%','c:Cost:18%:r:m'],f:'model:Model #:text,d:Description:text,c:Cost ($):number'},
optimizers:{t:"Optimizers / MCI",s:"By panel count — 1 optimizer per 3 panels. p = panels covered.",cols:['model:Model #:20%','d:Description:25%','p:Panels:10%:r','c:Cost:15%:r:m'],f:'model:Model #:text,d:Description:text,p:Panels Covered:number,c:Cost ($):number'},
racking:{t:"Solar Racking",s:"Set default for all projects",cols:['model:Model #:20%','d:Description:25%','c:Cost/Panel:15%:r:m','def:Default:10%:c:def'],f:'model:Model #:text,d:Description:text,c:Cost ($):number'},
monitoring:{t:"Monitoring",s:"Envoy & monitoring",cols:['model:Model #:30%','d:Description:30%','c:Cost:18%:r:m'],f:'model:Model #:text,d:Description:text,c:Cost ($):number'},
tesla_pkgs:{t:"Tesla Battery Packages",s:"Each row = complete battery combo + controller. svc = 200A or 400A. batt = total battery count (for labor auto-match). $0 = fill in later.",cols:['d:Description:25%','svc:Service:8%','batt:Batts:6%:r','kwh:kWh:8%:r','kw:kW:8%:r','a:Amps:7%:r','c:Cost:12%:r:m'],f:'d:Name:text,svc:Service (200A/400A):text,batt:Total Batteries:number,kwh:kWh:number,kw:kW Output:number,a:Amps:number,c:Cost ($):number'},
tesla_labor:{t:"Tesla Battery Labor",s:"Install labor by battery count. 200A = Smart Meter jobs, 400A = Gateway jobs. Matched automatically by service panel + battery count.",cols:['d:Description:35%','svc:Service:10%','batt:Batts:8%:r','c:Cost:15%:r:m'],f:'d:Name:text,svc:Service (200A/400A):text,batt:Battery Count:number,c:Cost ($):number'},
enphase_5p_pkgs:{t:"Enphase IQ Battery 5P Packages",s:"AUTO-CALCULATED from Component Pricing. IQ Battery 5P DOM (5kWh/unit, 3.84kW cont., LFP, 15yr warranty). Max 4 batteries. Includes: Battery x N + System Controller 3M + Combiner 5 or 5C + Control Cable + Comms Kit 2.",cols:['d:Description:35%','batt:Batts:7%:r','kwh:kWh:9%:r','kw:kW:9%:r','comb:Combiner:8%','c:Total w/Tax:14%:r:m'],f:'d:Name:text,batt:Batteries:number,kwh:kWh:number,kw:kW Output:number,comb:Combiner (c5/c5c):text,c:Total w/Tax ($):number'},
enphase_5p_labor:{t:"Enphase 5P Battery Labor",s:"Install labor by battery count",cols:['d:Description:45%','batt:Batts:10%:r','c:Cost:18%:r:m'],f:'d:Name:text,batt:Battery Count:number,c:Cost ($):number'},
enphase_labor:{t:"Enphase 4th Gen Battery Labor",s:"Legacy labor rates for 4th gen (10C) installs",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
franklin_ap2_pkgs:{t:"FranklinWH aPower 2 Packages",s:"AUTO-CALCULATED. AC-coupled battery — requires existing solar inverter. 15kWh/unit, 10kW continuous. Includes: aPower 2 x N + aGate X + MAC + 2x CT Kit + APBox + Lug Kit + Main Load Relay + EQB Backup Switch.",cols:['d:Description:35%','batt:Batts:7%:r','kwh:kWh:9%:r','kw:kW:9%:r','c:Total w/Tax:14%:r:m'],f:'d:Name:text,batt:Batteries:number,kwh:kWh:number,kw:kW Output:number,c:Total w/Tax ($):number'},
franklin_aps_pkgs:{t:"FranklinWH aPower S Packages",s:"AUTO-CALCULATED. All-in-one with built-in solar inverter — no separate inverter needed. 15kWh/unit, 10kW continuous (11.5kW w/ PV). Same base components as aPower 2.",cols:['d:Description:35%','batt:Batts:7%:r','kwh:kWh:9%:r','kw:kW:9%:r','c:Total w/Tax:14%:r:m'],f:'d:Name:text,batt:Batteries:number,kwh:kWh:number,kw:kW Output:number,c:Total w/Tax ($):number'},
franklin_adders:{t:"FranklinWH Optional Adders",s:"Available for both aPower 2 and aPower S. aHub = multi-array/generator/EV. Smart Circuits = control 3 individual loads. Generator Module = backup generator integration.",cols:['d:Description:40%','sku:SKU:20%','c:Cost w/Tax:14%:r:m'],f:'d:Name:text,sku:SKU:text,c:Cost w/Tax ($):number'},
generators:{t:"Generators",s:"Generac & Kohler",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
gen_labor:{t:"Generator Labor",s:"Installation labor for generators — shows on Contractor PDF as a paid item",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
bollards:{t:"Bollards",s:"Bollards for garage battery installations",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
smoke_det:{t:"Smoke Detectors",s:"Smoke detectors required for garage battery installations",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
permits:{t:"Permits",s:"Permit & placard costs",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
labor:{t:"Installation Labor",s:"Rate per watt by service panel size. 200A and 400A have different rates.",cols:['d:Description:35%','svc:Service:12%','c:$/Watt:15%:r:m'],f:'d:Description:text,svc:Service (200A/400A):text,c:$/Watt:number'},
electrical:{t:"Electrical Upgrades",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
trenching:{t:"Trenching/Pipe/Wire",s:"By footage",cols:['d:Distance:50%','c:Cost:18%:r:m'],f:'d:Distance:text,c:Cost ($):number'},
sitesurvey:{t:"Site Survey",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
nem:{t:"NEM Paperwork",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
favi:{t:"Favi Paperwork",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
office:{t:"Office Work",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
financing:{t:"Financing",s:"Salal Dealer Direct — Tier 1 (680+) / Tier 2 (640-679). Rates incl .25% APR auto-pay discount.",cols:['grp:APR Group:8%','d:Description:18%','apr1:T1 APR:8%:r','apr2:T2 APR:8%:r','term:Term (mo):8%:r','c:Dealer Fee:8%:r','minLoan:Min Loan:10%:r:m','f1:Factor T1:9%:r','f2:Factor T2:9%:r'],f:'d:Name:text,grp:APR Group:text,apr1:T1 APR %:number,apr2:T2 APR %:number,term:Term (months):number,c:Dealer Fee (decimal):number,minLoan:Min Loan $:number,f1:Factor T1:number,f2:Factor T2:number'},
samecash:{t:"12 Month Deferred",s:"Tier 1 only, excl. MI & NJ. Max $35,000. No payments/interest during deferred period.",cols:['d:Description:25%','apr:APR:10%:r','rate:Rate:10%:r','term:Term (mo):10%:r','c:Dealer Fee:10%:r','minLoan:Min Loan:12%:r:m','f1:Factor T1:10%:r'],f:'d:Name:text,apr:APR %:number,rate:Rate %:number,term:Term (months):number,c:Dealer Fee (decimal):number,minLoan:Min Loan $:number,f1:Factor T1:number'},
salesteam:{t:"Sales Team",s:"Add salespeople with solar rate per kW + flat bonuses for battery and generator sales",cols:['d:Name:25%','rate:Solar ($/kW):15%:r','battBonus:Battery Bonus:15%:r:m','genBonus:Generator Bonus:15%:r:m'],f:'d:Name:text,rate:Solar Rate $/kW:number,battBonus:Battery Bonus $:number,genBonus:Generator Bonus $:number'},
car_charger:{t:"Car Charger",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
bird_netting:{t:"Bird Netting",cols:['d:Description:50%','c:$/Watt:18%:r'],f:'d:Name:text,c:$/Watt:number'},
steep_roof:{t:"Steep Roof",cols:['d:Description:50%','c:$/Watt:18%:r'],f:'d:Name:text,c:$/Watt:number'},
travel:{t:"Travel Distance",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'},
mult_arr:{t:"Multiple Arrays",cols:['d:Description:50%','c:Cost:18%:r:m'],f:'d:Name:text,c:Cost ($):number'}
};

function parseCols(arr){
  var out=[];
  for(var i=0;i<arr.length;i++){
    var p=arr[i].split(':');
    out.push({k:p[0],l:p[1],w:p[2]||'auto',r:p[3]==='r'||p[3]==='c',c:p[3]==='c',m:p[4]==='m'||p[3]==='m',sp:p[4]==='def'||p[3]==='def'?'def':null});
  }
  return out;
}
function parseFields(s){
  var parts=s.split(',');var out=[];
  for(var i=0;i<parts.length;i++){
    var p=parts[i].split(':');
    out.push({k:p[0],l:p[1],t:p[2]});
  }
  return out;
}

// ===== EXPORT / IMPORT DATA =====
function exportData(){
  // Build export object — everything in D except strip passwords for safety note
  var exp={_exported:new Date().toISOString(),_version:'SolarPro-1.0'};
  var keys=Object.keys(D);
  for(var i=0;i<keys.length;i++){
    exp[keys[i]]=D[keys[i]];
  }
  var json=JSON.stringify(exp,null,2);
  var blob=new Blob([json],{type:'application/json'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;
  var d=new Date();
  a.download=tsFilename('AdminData','json');
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  toast('Data exported!');
}
function triggerImport(){_id('import-file').click();}
function importData(input){
  if(!input.files||!input.files[0])return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var imp=JSON.parse(e.target.result);
      if(!imp._version){toast('Invalid file — not a Solar Pro export');return;}
      // Confirm before overwriting
      if(!confirm('This will replace ALL admin data (panels, inverters, batteries, pricing, config, users, salesteam, etc.) with the imported file.\n\nDate exported: '+(imp._exported||'unknown')+'\n\nContinue?'))return;
      // Merge all keys from import into D
      var keys=Object.keys(imp);
      var count=0;
      for(var i=0;i<keys.length;i++){
        if(keys[i].charAt(0)==='_')continue; // skip meta keys
        D[keys[i]]=imp[keys[i]];
        count++;
      }
      // Recalculate dependent prices
      recalcAll();
      // Refresh current admin view
      buildAside();showSec('panels');
      toast('Imported '+count+' sections!');
    }catch(err){
      alert('Import failed: '+err.message);
    }
  };
  reader.readAsText(input.files[0]);
  input.value=''; // reset so same file can be re-imported
}


function renderSec(k){
  var c=_id('adC');
  if(k==='cfg'){renderCfg(c);return;}
  if(k==='users'){renderUsers(c);return;}
  if(k==='comp'){renderComp(c);return;}
  if(k==='tesla_pkgs'){renderTeslaPkgs(c);return;}
  if(k==='enphase_5p_pkgs'){renderEnphase5pPkgs(c);return;}
  if(k==='franklin_ap2_pkgs'){renderFranklinPkgs(c,'ap2');return;}
  if(k==='franklin_aps_pkgs'){renderFranklinPkgs(c,'aps');return;}
  if(k==='car_charger'){renderCarCharger(c);return;}
  var mt=META[k];if(!mt||!D[k])return;
  var cols=parseCols(mt.cols);
  var h='<div class="sh"><div><div class="st">'+mt.t+'</div>'+(mt.s?'<div class="ss">'+mt.s+'</div>':'')+'</div><button class="btn btn-ac" onclick="openM(\''+k+'\')">+ Add New</button></div>';
  h+='<div class="dtw"><table class="dt"><thead><tr><th style="width:30px">#</th>';
  for(var ci=0;ci<cols.length;ci++){
    var col=cols[ci];
    h+='<th style="width:'+col.w+'"'+(col.r?' class="r"':'')+(col.c?' class="c"':'')+'>'+col.l+'</th>';
  }
  h+='<th class="r" style="width:80px">Actions</th></tr></thead><tbody>';
  var data=D[k];
  for(var ri=0;ri<data.length;ri++){
    var it=data[ri];
    h+='<tr><td class="d">'+(ri+1)+'</td>';
    for(var ci=0;ci<cols.length;ci++){
      var col=cols[ci];
      if(col.sp==='def'){
        h+='<td class="c"><input type="radio" name="def-'+k+'" '+(it.def?'checked':'')+' onchange="setDef(\''+k+'\','+it.id+')" style="cursor:pointer;width:16px;height:16px;accent-color:var(--gold)"></td>';
      }else if(col.m){
        h+='<td class="r m">'+fm(it[col.k]||0)+'</td>';
      }else if(col.r){
        h+='<td class="r">'+(it[col.k]!=null?it[col.k]:'')+'</td>';
      }else{
        h+='<td>'+(it[col.k]!=null?it[col.k]:'')+'</td>';
      }
    }
    h+='<td class="r"><button class="btn" style="font-size:10px;padding:3px 7px" onclick="editI(\''+k+'\','+it.id+')">Edit</button> <button class="btn btn-rd" style="font-size:10px;padding:3px 7px" onclick="delI(\''+k+'\','+it.id+')">✕</button></td></tr>';
  }
  h+='</tbody></table></div>';
  c.innerHTML=h;
}

function renderTeslaPkgs(c){
  var g=D.comp;
  var h='<div class="sh"><div><div class="st">Tesla Battery Packages <span style="background:var(--gnbg);color:var(--gn);padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;margin-left:10px">\uD83D\uDD12 AUTO-CALCULATED</span></div><div class="ss">Read-only. Package prices are automatically calculated from component prices in Component Pricing + '+fp(g.tax)+' tax. To change package totals, edit the component unit prices.</div></div></div>';
  h+='<div class="dtw"><table class="dt"><thead><tr><th style="width:30px">#</th><th style="width:25%">Description</th><th>Service</th><th class="r">Batts</th><th class="r">kWh</th><th class="r">kW</th><th class="r">Amps</th><th class="r">PW3</th><th class="r">Exp</th><th class="r">GW</th><th class="r">SM</th><th class="r" style="width:10%">Total</th><th style="width:30px"></th></tr></thead><tbody>';
  for(var i=0;i<D.tesla_pkgs.length;i++){
    var p=D.tesla_pkgs[i];
    h+='<tr><td>'+p.id+'</td><td>'+p.d+'</td><td>'+p.svc+'</td><td class="r">'+p.batt+'</td><td class="r">'+p.kwh+'</td><td class="r">'+p.kw+'</td><td class="r">'+p.a+'</td><td class="r">'+(p.pw3||0)+'</td><td class="r">'+(p.exp||0)+'</td><td class="r">'+(p.gw||0)+'</td><td class="r">'+(p.sm||0)+'</td><td class="r m">'+fm(p.c)+'</td>';
    h+='<td class="c"><span style="cursor:pointer;font-size:16px;color:var(--bl)" onclick="togglePkgDetail('+p.id+')" title="Show parts" id="pkg-btn-'+p.id+'">+</span></td></tr>';
    h+='<tr id="pkg-detail-t-'+p.id+'" style="display:none"><td colspan="13" style="padding:0"><div style="background:var(--bg);padding:10px 18px 10px 40px;border-top:1px dashed var(--bd)">';
    h+=teslaPkgParts(p);
    h+='</div></td></tr>';
  }
  h+='</tbody></table></div>';
  c.innerHTML=h;
}
// togglePkgDetail defined above
function renderEnphase5pPkgs(c){
  var g=D.comp;
  var h='<div class="sh"><div><div class="st">Enphase IQ Battery 5P Packages <span style="background:var(--gnbg);color:var(--gn);padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;margin-left:10px">\uD83D\uDD12 AUTO-CALCULATED</span></div><div class="ss">Read-only. Prices auto-calculated from Component Pricing + '+fp(g.tax)+' tax. To change totals, edit component prices.</div></div></div>';
  h+='<div class="dtw"><table class="dt"><thead><tr><th style="width:30px">#</th><th style="width:32%">Description</th><th class="r">Batts</th><th class="r">kWh</th><th class="r">kW</th><th>Combiner</th><th class="r" style="width:12%">Total w/Tax</th><th style="width:30px"></th></tr></thead><tbody>';
  for(var i=0;i<D.enphase_5p_pkgs.length;i++){
    var p=D.enphase_5p_pkgs[i];
    h+='<tr><td>'+p.id+'</td><td>'+p.d+'</td><td class="r">'+p.batt+'</td><td class="r">'+p.kwh+'</td><td class="r">'+p.kw+'</td><td>'+(p.comb==='c5c'?'5C (Cellular)':'5 (WiFi/Eth)')+'</td><td class="r m">'+fm(p.c)+'</td>';
    h+='<td class="c"><span style="cursor:pointer;font-size:16px;color:var(--bl)" onclick="togglePkgDetail(\'e5p-'+p.id+'\',this)" title="Show parts">+</span></td></tr>';
    h+='<tr id="pkg-detail-e5p-'+p.id+'" style="display:none"><td colspan="8" style="padding:0"><div style="background:var(--bg);padding:10px 18px 10px 40px;border-top:1px dashed var(--bd)">';
    h+=enph5pPkgParts(p);
    h+='</div></td></tr>';
  }
  h+='</tbody></table></div>';
  c.innerHTML=h;
}
function enph5pPkgParts(p){
  var g=D.comp;var parts=[];
  parts.push({model:g.enph_bat5p.model,sku:g.enph_bat5p.sku,qty:p.batt,unit:g.enph_bat5p.c});
  parts.push({model:g.enph_ctrl3m.model,sku:g.enph_ctrl3m.sku,qty:1,unit:g.enph_ctrl3m.c});
  var comb=(p.comb==='c5c')?g.enph_comb5c:g.enph_comb5;
  parts.push({model:comb.model,sku:comb.sku,qty:1,unit:comb.c});
  if(g.enph_ctrl_cable&&g.enph_ctrl_cable.c>0)parts.push({model:g.enph_ctrl_cable.model,sku:g.enph_ctrl_cable.sku,qty:1,unit:g.enph_ctrl_cable.c});
  if(g.enph_comms_kit&&g.enph_comms_kit.c>0)parts.push({model:g.enph_comms_kit.model,sku:g.enph_comms_kit.sku,qty:1,unit:g.enph_comms_kit.c});
  return buildPkgPartsTable(parts,g.tax);
}
function renderFranklinPkgs(c,type){
  var g=D.comp;
  var pkgs=(type==='aps')?D.franklin_aps_pkgs:D.franklin_ap2_pkgs;
  var title=(type==='aps')?'FranklinWH aPower S Packages':'FranklinWH aPower 2 Packages';
  var subtitle=(type==='aps')?'All-in-one with built-in solar inverter — no separate inverter needed. 15kWh/unit, 10kW continuous.':'AC-coupled battery — requires existing solar inverter. 15kWh/unit, 10kW continuous.';
  var h='<div class="sh"><div><div class="st">'+title+' <span style="background:var(--gnbg);color:var(--gn);padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;margin-left:10px">\uD83D\uDD12 AUTO-CALCULATED</span></div><div class="ss">'+subtitle+' Prices = components + '+fp(g.tax)+' tax. Edit component prices to update.</div></div></div>';
  h+='<div class="dtw"><table class="dt"><thead><tr><th style="width:30px">#</th><th style="width:32%">Description</th><th class="r">Batts</th><th class="r">kWh</th><th class="r">kW</th><th class="r" style="width:14%">Total w/Tax</th><th style="width:30px"></th></tr></thead><tbody>';
  for(var i=0;i<pkgs.length;i++){
    var p=pkgs[i];var pfx=type+'-'+p.id;
    h+='<tr><td>'+p.id+'</td><td>'+p.d+'</td><td class="r">'+p.batt+'</td><td class="r">'+p.kwh+'</td><td class="r">'+p.kw+'</td><td class="r m">'+fm(p.c)+'</td>';
    h+='<td class="c"><span style="cursor:pointer;font-size:16px;color:var(--bl)" onclick="togglePkgDetail(\'fwh-'+pfx+'\',this)" title="Show parts">+</span></td></tr>';
    h+='<tr id="pkg-detail-fwh-'+pfx+'" style="display:none"><td colspan="7" style="padding:0"><div style="background:var(--bg);padding:10px 18px 10px 40px;border-top:1px dashed var(--bd)">';
    h+=franklinPkgParts(p,type);
    h+='</div></td></tr>';
  }
  h+='</tbody></table></div>';
  c.innerHTML=h;
}
function franklinPkgParts(p,type){
  var g=D.comp;var parts=[];
  var bat=(type==='aps')?g.fwh_aps:g.fwh_ap2;
  parts.push({model:bat.model,sku:bat.sku,qty:p.batt,unit:bat.c});
  var baseKeys=['fwh_agate','fwh_mac','fwh_ct200','fwh_apbox','fwh_lugkit','fwh_mainrelay','fwh_eqb'];
  for(var i=0;i<baseKeys.length;i++){var comp=g[baseKeys[i]];if(comp)parts.push({model:comp.model,sku:comp.sku,qty:1,unit:comp.c});}
  return buildPkgPartsTable(parts,g.tax);
}
function buildPkgPartsTable(parts,tax){
  var h='<table style="width:100%;font-size:11px;border-collapse:collapse">';
  h+='<tr style="color:var(--tx3);font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.5px"><td style="padding:4px 8px">Model #</td><td style="padding:4px 8px">Description</td><td style="padding:4px 8px;text-align:right">Qty</td><td style="padding:4px 8px;text-align:right">Unit (pre-tax)</td><td style="padding:4px 8px;text-align:right">Ext</td></tr>';
  var pretax=0;
  for(var i=0;i<parts.length;i++){
    var pt=parts[i];var ext=pt.qty*pt.unit;pretax+=ext;
    h+='<tr style="border-top:1px solid var(--bd)"><td style="padding:4px 8px;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--bl)">'+pt.model+'</td><td style="padding:4px 8px;color:var(--navy)">'+pt.sku+'</td><td style="padding:4px 8px;text-align:right">'+pt.qty+'</td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(pt.unit)+'</td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(ext)+'</td></tr>';
  }
  var taxAmt=Math.round(pretax*tax*100)/100;
  h+='<tr style="border-top:2px solid var(--gold);font-weight:700"><td colspan="2" style="padding:4px 8px">Subtotal (pre-tax)</td><td></td><td></td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(pretax)+'</td></tr>';
  h+='<tr><td colspan="2" style="padding:4px 8px;color:var(--tx3)">Tax ('+(tax*100).toFixed(2)+'%)</td><td></td><td></td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace;color:var(--tx3)">'+fm(taxAmt)+'</td></tr>';
  h+='<tr style="font-weight:700;color:var(--gn)"><td colspan="2" style="padding:4px 8px">Total</td><td></td><td></td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(wTax(pretax))+'</td></tr>';
  h+='</table>';
  return h;
}
function togglePkgDetail(pid,btn){
  var row=_id('pkg-detail-'+pid);
  if(!row)return;
  if(row.style.display==='none'){row.style.display='';if(btn){btn.textContent='\u2212';btn.style.color='var(--rd)';}}
  else{row.style.display='none';if(btn){btn.textContent='+';btn.style.color='var(--bl)';}}
}

function teslaPkgParts(p){
  var g=D.comp;var parts=[];
  if(p.pw3>0)parts.push({model:g.tesla_pw3.model||'',sku:g.tesla_pw3.sku||g.tesla_pw3.d,qty:p.pw3,unit:g.tesla_pw3.c});
  if(p.exp>0){
    parts.push({model:g.tesla_exp_batt.model||'',sku:g.tesla_exp_batt.sku||g.tesla_exp_batt.d,qty:p.exp,unit:g.tesla_exp_batt.c});
    parts.push({model:g.tesla_exp_harness.model||'',sku:g.tesla_exp_harness.sku||g.tesla_exp_harness.d,qty:p.exp,unit:g.tesla_exp_harness.c});
    parts.push({model:g.tesla_exp_wall.model||'',sku:g.tesla_exp_wall.sku||g.tesla_exp_wall.d,qty:p.exp,unit:g.tesla_exp_wall.c});
  }
  if(p.gw>0)parts.push({model:g.tesla_gw.model||'',sku:g.tesla_gw.sku||g.tesla_gw.d,qty:p.gw,unit:g.tesla_gw.c});
  if(p.sm>0){
    parts.push({model:g.tesla_bsw.model||'',sku:g.tesla_bsw.sku||g.tesla_bsw.d,qty:p.sm,unit:g.tesla_bsw.c});
    parts.push({model:g.tesla_rem.model||'',sku:g.tesla_rem.sku||g.tesla_rem.d,qty:p.sm,unit:g.tesla_rem.c});
  }
  var h='<table style="width:100%;font-size:11px;border-collapse:collapse">';
  h+='<tr style="color:var(--tx3);font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.5px"><td style="padding:4px 8px">Model #</td><td style="padding:4px 8px">Description</td><td style="padding:4px 8px;text-align:right">Qty</td><td style="padding:4px 8px;text-align:right">Unit (pre-tax)</td><td style="padding:4px 8px;text-align:right">Ext</td></tr>';
  var pretax=0;
  for(var i=0;i<parts.length;i++){
    var pt=parts[i];var ext=pt.qty*pt.unit;pretax+=ext;
    h+='<tr style="border-top:1px solid var(--bd)"><td style="padding:4px 8px;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--bl)">'+pt.model+'</td><td style="padding:4px 8px;color:var(--navy)">'+pt.sku+'</td><td style="padding:4px 8px;text-align:right">'+pt.qty+'</td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(pt.unit)+'</td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(ext)+'</td></tr>';
  }
  var taxAmt=Math.round(pretax*g.tax*100)/100;
  h+='<tr style="border-top:2px solid var(--gold);font-weight:700"><td colspan="2" style="padding:4px 8px">Subtotal (pre-tax)</td><td></td><td></td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(pretax)+'</td></tr>';
  h+='<tr><td colspan="2" style="padding:4px 8px;color:var(--tx3)">Tax ('+fp(g.tax)+')</td><td></td><td></td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace;color:var(--tx3)">'+fm(taxAmt)+'</td></tr>';
  h+='<tr style="font-weight:700;color:var(--gn)"><td colspan="2" style="padding:4px 8px">Total</td><td></td><td></td><td style="padding:4px 8px;text-align:right;font-family:JetBrains Mono,monospace">'+fm(wTax(pretax))+'</td></tr>';
  h+='</table>';
  return h;
}

function renderCarCharger(c){
  var cfg=D.cfg;
  var h='<div class="sh"><div><div class="st">Car Charger</div><div class="ss">Configure pricing for EV charger installations \u2014 both as a system add-on and standalone.</div></div></div>';

  h+='<div style="margin-top:16px;padding:20px;background:var(--card);border:1px solid var(--bd);border-radius:8px">';
  h+='<div style="font-weight:700;font-size:14px;color:var(--navy);margin-bottom:4px">\uD83D\uDD0C Add-On (with Solar/Battery System)</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">When customer is getting a full system install and adds a car charger</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
  h+='<div><label style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--tx3)">Base Install Price ($)</label>';
  h+='<input type="number" class="cipt" id="cc-addon-base" value="'+(cfg.cc_addon_base||600)+'" style="width:100%;margin-top:4px;font-size:14px;font-weight:600"></div>';
  h+='<div><label style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--tx3)">Per Foot Over Free ($)</label>';
  h+='<input type="number" class="cipt" id="cc-perfoot" value="'+(cfg.cc_perfoot||30)+'" style="width:100%;margin-top:4px;font-size:14px;font-weight:600"></div>';
  h+='</div></div>';

  h+='<div style="margin-top:12px;padding:20px;background:var(--card);border:1px solid var(--bd);border-radius:8px">';
  h+='<div style="font-weight:700;font-size:14px;color:var(--navy);margin-bottom:4px">\u26A1 Standalone (Car Charger Only)</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">When customer only wants a car charger installed \u2014 no solar or battery</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
  h+='<div><label style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--tx3)">Contractor Base Price ($)</label>';
  h+='<input type="number" class="cipt" id="cc-sa-base" value="'+(cfg.cc_standalone_base||1100)+'" style="width:100%;margin-top:4px;font-size:14px;font-weight:600"></div>';
  h+='<div><label style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--tx3)">Per Foot Rate (shared)</label>';
  h+='<div class="cipt" style="width:100%;margin-top:4px;font-size:14px;font-weight:600;background:var(--bg);color:var(--tx3)">$'+(cfg.cc_perfoot||30)+'/ft</div></div>';
  h+='</div>';
    h+='<div style="margin-top:12px"><label style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--tx3)">Pell Solar Profit ($)</label>';
  h+='<input type="number" class="cipt" id="cc-owner-profit" value="'+(cfg.cc_owner_profit||1000)+'" style="width:100%;margin-top:4px;font-size:14px;font-weight:600"></div>';
  h+='<div style="font-size:10px;color:var(--tx3);margin-top:6px;font-style:italic">Profit auto-applies on standalone jobs. Per-foot rate shared with add-on.</div>';
  h+='</div>';

  h+='<div style="margin-top:12px;padding:20px;background:var(--card);border:1px solid var(--bd);border-radius:8px">';
  h+='<div style="font-weight:700;font-size:14px;color:var(--navy);margin-bottom:4px">\u2699\uFE0F Shared Settings</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
  h+='<div><label style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--tx3)">Free Feet Included</label>';
  h+='<input type="number" class="cipt" id="cc-free-feet" value="'+(cfg.cc_free_feet||5)+'" style="width:100%;margin-top:4px;font-size:14px;font-weight:600"></div>';
  h+='<div></div>';
  h+='</div></div>';

  h+='<div style="margin-top:16px;text-align:right"><button class="btn btn-ac" style="padding:10px 24px;font-size:13px" onclick="saveCarChargerCfg()">Save Car Charger Settings</button></div>';
  c.innerHTML=h;
}
function saveCarChargerCfg(){
  D.cfg.cc_addon_base=parseFloat(_id('cc-addon-base').value)||600;
  D.cfg.cc_standalone_base=parseFloat(_id('cc-sa-base').value)||1100;
  D.cfg.cc_perfoot=parseFloat(_id('cc-perfoot').value)||30;
  D.cfg.cc_free_feet=parseFloat(_id('cc-free-feet').value)||5;
  D.cfg.cc_owner_profit=parseFloat(_id('cc-owner-profit').value)||1000;
  toast('Car Charger settings saved');
  renderCarCharger(_id('adC'));
}

function renderCfg(c){
  var g=D.cfg;
  if(!g.surveyor_email)g.surveyor_email='info@pellsolar.com';
  c.innerHTML='<div class="sh"><div><div class="st">Configuration</div><div class="ss">Commissions, tax rates & sale price guardrails</div></div><button class="btn btn-gn" onclick="saveCfg()">Save Changes</button></div>'+
  '<div style="margin-bottom:18px;padding:16px 18px;background:var(--bg);border:1.5px solid var(--bd);border-radius:var(--r)">'+
  '<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:10px">📧 Site Survey Email</div>'+
  '<div style="font-size:11px;color:var(--tx3);margin-bottom:8px">PDF emailed here when Send to Site Survey is clicked.</div>'+
  '<input class="cii" type="email" id="cf-surveyor-email" value="'+g.surveyor_email+'" style="width:100%;max-width:320px">'+
  '</div>'+
  '<div class="cg">'+
  '<div class="ci"><div class="cil">Federal Tax Credit</div><input class="cii" type="number" step="0.01" id="cf-fed" value="'+g.fed+'"><div style="font-size:10px;color:var(--tx3);margin-top:3px">Current: '+fp(g.fed)+'</div></div>'+
  '<div class="ci"><div class="cil">Commission (Solar)</div><input class="cii" type="number" step="0.01" id="cf-comm" value="'+g.comm+'"></div>'+
  '<div class="ci"><div class="cil">Sales Mgr Comm ($/kW)</div><input class="cii" type="number" step="0.01" id="cf-mgr" value="'+g.mgr+'"></div>'+
  '<div class="ci"><div class="cil">Additional Commission</div><select class="cis" id="cf-ac"><option '+(g.addcomm==='Disable'?'selected':'')+'>Disable</option><option '+(g.addcomm==='Enable'?'selected':'')+'>Enable</option></select></div>'+
  '</div>'+
  '<div style="margin-top:18px;padding:16px 18px;background:var(--bg);border:2px solid var(--gold);border-radius:var(--r)">'+
  '<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\u26A0 Margin Guardrails</div>'+
  '<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Set the minimum and maximum profit margin %. Cost Analysis will block deals outside this range. Margin = (Sale \u2212 Job Cost \u2212 Dealer Fee) \u00F7 Sale Price.</div>'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'+
  '<div class="ci" style="border-color:rgba(220,38,38,.3);background:var(--rdbg)"><div class="cil" style="color:var(--rd)">MIN MARGIN (FLOOR)</div><input class="cii" type="number" step="1" min="0" max="100" id="cf-minmargin" value="'+g.minMargin+'"><div style="font-size:10px;color:var(--tx3);margin-top:3px">Cannot sell below this margin %</div></div>'+
  '<div class="ci" style="border-color:rgba(220,38,38,.3);background:var(--rdbg)"><div class="cil" style="color:var(--rd)">MAX MARGIN (CEILING)</div><input class="cii" type="number" step="1" min="0" max="100" id="cf-maxmargin" value="'+g.maxMargin+'"><div style="font-size:10px;color:var(--tx3);margin-top:3px">Cannot sell above this margin %</div></div>'+
  '</div>'+
  '<div style="margin-top:10px;font-size:11px;color:var(--tx2)">Current range: <b style="color:var(--gn)">'+g.minMargin+'%</b> \u2014 <b style="color:var(--gn)">'+g.maxMargin+'%</b></div>'+
  '</div>';
}
function saveCfg(){D.cfg.fed=parseFloat(_id('cf-fed').value)||0;D.cfg.comm=parseFloat(_id('cf-comm').value)||0;D.cfg.mgr=parseFloat(_id('cf-mgr').value)||0;D.cfg.addcomm=_id('cf-ac').value;D.cfg.minMargin=parseFloat(_id('cf-minmargin').value)||0;D.cfg.maxMargin=parseFloat(_id('cf-maxmargin').value)||0;if(D.cfg.minMargin>D.cfg.maxMargin&&D.cfg.maxMargin>0){toast('Warning: Min is higher than Max!');return;}var em=_id('cf-surveyor-email');if(em)D.cfg.surveyor_email=em.value.trim()||'info@pellsolar.com';toast('Config saved');renderCfg(_id('adC'));}
function setDef(k,id){
  var arr=D[k];
  for(var i=0;i<arr.length;i++){arr[i].def=(arr[i].id===id);}
  toast('Default updated');showSec(k,document.querySelector('.ni.on'));
}

// ===== USERS MANAGEMENT =====
function renderUsers(c){
  var h='<div class="sh"><div><div class="st">User Management</div><div class="ss">Add, edit, or remove user accounts. Changes take effect on next login.</div></div>';
  h+='<button class="btn btn-ac" onclick="openUserModal()">+ Add User</button></div>';
  h+='<div class="dtw"><table class="dt"><thead><tr><th style="width:30px">#</th><th style="width:25%">Username</th><th style="width:25%">Password</th><th style="width:15%">Role</th><th style="width:15%">Actions</th></tr></thead><tbody>';
  for(var i=0;i<D.users.length;i++){
    var u=D.users[i];
    h+='<tr><td>'+(i+1)+'</td><td style="font-weight:600">'+u.u+'</td>';
    h+='<td><span id="pw-mask-'+u.id+'" style="cursor:pointer;color:var(--tx3)" onclick="togglePW('+u.id+')">••••••••</span><span id="pw-show-'+u.id+'" style="display:none;font-family:JetBrains Mono,monospace;font-size:12px">'+u.p+'</span></td>';
    h+='<td><span style="display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;'+(u.role==='admin'?'background:var(--pubg);color:var(--pu)':'background:var(--goldbg);color:var(--goldd)')+'">'+u.role+'</span></td>';
    h+='<td><button class="btn" style="font-size:12px" onclick="editUser('+u.id+')">Edit</button> ';
    if(u.id!==1)h+='<button class="btn" style="font-size:12px;color:var(--rd);border-color:var(--rd)" onclick="delUser('+u.id+')">✕</button>';
    h+='</td></tr>';
  }
  h+='</tbody></table></div>';

  // Change own password section
  h+='<div class="card" style="margin-top:20px"><div class="ch"><div class="cht">Change Your Password</div></div><div class="cb">';
  h+='<div style="display:flex;gap:12px;align-items:end;flex-wrap:wrap">';
  h+='<div style="flex:1;min-width:180px"><label style="font-size:12px;font-weight:600;color:var(--tx3);display:block;margin-bottom:4px">Current Password</label><input type="password" id="cp-old" class="fi" placeholder="Current password"></div>';
  h+='<div style="flex:1;min-width:180px"><label style="font-size:12px;font-weight:600;color:var(--tx3);display:block;margin-bottom:4px">New Password</label><input type="password" id="cp-new" class="fi" placeholder="New password"></div>';
  h+='<div style="flex:1;min-width:180px"><label style="font-size:12px;font-weight:600;color:var(--tx3);display:block;margin-bottom:4px">Confirm New Password</label><input type="password" id="cp-conf" class="fi" placeholder="Confirm password"></div>';
  h+='<button class="btn btn-ac" onclick="changeOwnPW()">Update Password</button>';
  h+='</div></div></div>';
  c.innerHTML=h;
}

function togglePW(id){
  var mask=_id('pw-mask-'+id);var show=_id('pw-show-'+id);
  if(mask.style.display!=='none'){mask.style.display='none';show.style.display='inline';}
  else{mask.style.display='inline';show.style.display='none';}
}

function changeOwnPW(){
  if(!currentUser){toast('Not logged in');return;}
  var old=_id('cp-old').value;var nw=_id('cp-new').value;var conf=_id('cp-conf').value;
  if(!old||!nw||!conf){toast('Fill in all fields');return;}
  if(old!==currentUser.p){toast('Current password is incorrect');return;}
  if(nw!==conf){toast('New passwords do not match');return;}
  if(nw.length<6){toast('Password must be at least 6 characters');return;}
  for(var i=0;i<D.users.length;i++){if(D.users[i].id===currentUser.id){D.users[i].p=nw;currentUser.p=nw;break;}}
  toast('Password updated');renderUsers(_id('adC'));
}

function openUserModal(editId){
  var u=null;
  if(editId){for(var i=0;i<D.users.length;i++){if(D.users[i].id===editId){u=D.users[i];break;}}}
  _id('mT').textContent=u?'Edit User':'Add User';
  var h='';
  h+='<div class="mf"><label>Username</label><input id="mu-name" class="fi" value="'+(u?u.u:'')+'"></div>';
  h+='<div class="mf"><label>Password</label><input id="mu-pass" class="fi" type="text" value="'+(u?u.p:'')+'"></div>';
  h+='<div class="mf"><label>Role</label><select id="mu-role" class="fi"><option value="admin"'+(u&&u.role==='admin'?' selected':'')+'>Admin</option><option value="sales"'+(u&&u.role==='sales'?' selected':'')+'>Sales</option><option value="viewer"'+(u&&u.role==='viewer'?' selected':'')+'>Viewer</option></select></div>';
  _id('mF').innerHTML=h;
  _id('mS').textContent='Save';
  _id('mS').onclick=function(){saveUser(editId||null);};
  _id('moO').classList.add('show');
}

function closeMo(){_id('moO').classList.remove('show');}
function editUser(id){openUserModal(id);}

function saveUser(editId){
  var name=_id('mu-name').value.trim();var pass=_id('mu-pass').value.trim();var role=_id('mu-role').value;
  if(!name||!pass){toast('Username and password required');return;}
  if(pass.length<6){toast('Password must be at least 6 characters');return;}
  // Check duplicate username
  for(var i=0;i<D.users.length;i++){
    if(D.users[i].u===name&&D.users[i].id!==editId){toast('Username already exists');return;}
  }
  if(editId){
    for(var i=0;i<D.users.length;i++){if(D.users[i].id===editId){D.users[i].u=name;D.users[i].p=pass;D.users[i].role=role;break;}}
    toast('User updated');
  }else{
    D.users.push({id:gid(),u:name,p:pass,role:role});
    toast('User added');
  }
  closeMo();renderUsers(_id('adC'));
}

function delUser(id){
  if(!confirm('Remove this user?'))return;
  D.users=D.users.filter(function(u){return u.id!==id;});
  toast('User removed');renderUsers(_id('adC'));
}

// ===== MODAL =====
var mSec=null,mEd=null;
function openM(k){
  mSec=k;mEd=null;var mt=META[k];if(!mt)return;
  var fields=parseFields(mt.f);
  _id('mT').textContent='Add New';
  var h='';
  for(var i=0;i<fields.length;i++){
    var f=fields[i];
    h+='<div class="mf"><label>'+f.l+'</label><input type="'+f.t+'" id="mf-'+f.k+'" step="any"></div>';
  }
  _id('mF').innerHTML=h;_id('moO').classList.add('show');
  _id('mS').onclick=saveM;
}
function closeM(){_id('moO').classList.remove('show');}
function saveM(){
  var data=D[mSec];if(!data){closeM();return;}
  var mt=META[mSec];var fields=parseFields(mt.f);
  var item=null;
  if(mEd){
    for(var i=0;i<data.length;i++){if(data[i].id===mEd){item=data[i];break;}}
  }
  if(!item){item={id:gid()};}
  for(var i=0;i<fields.length;i++){
    var f=fields[i];
    var el=_id('mf-'+f.k);
    if(el){item[f.k]=el.type==='number'?parseFloat(el.value)||0:el.value;}
  }
  if(!mEd)data.push(item);
  closeM();showSec(mSec,document.querySelector('.ni.on'));toast(mEd?'Updated':'Added');
}
function editI(k,id){
  var arr=D[k];var it=null;
  for(var i=0;i<arr.length;i++){if(arr[i].id===id){it=arr[i];break;}}
  if(!it)return;
  openM(k);mEd=id;_id('mT').textContent='Edit Item';
  var mt=META[k];var fields=parseFields(mt.f);
  for(var i=0;i<fields.length;i++){
    var f=fields[i];var el=_id('mf-'+f.k);
    if(el)el.value=it[f.k]!=null?it[f.k]:'';
  }
}
function delI(k,id){
  if(!confirm('Delete this item?'))return;
  var arr=D[k];var out=[];
  for(var i=0;i<arr.length;i++){if(arr[i].id!==id)out.push(arr[i]);}
  D[k]=out;
  showSec(k,document.querySelector('.ni.on'));toast('Deleted');
}


// ===== COMPONENT PRICING =====
function renderComp(c){
  var g=D.comp;
  var sm=g.tesla_bsw.c+g.tesla_rem.c;
  var expAcc=g.tesla_exp_harness.c+g.tesla_exp_wall.c;
  var h='<div class="sh"><div><div class="st">Component Pricing</div><div class="ss">Master unit prices (pre-tax from supplier). Change here \u2192 recalculates all packages & line items automatically.</div></div><button class="btn btn-gn" onclick="saveComp()">Save & Recalculate All</button></div>';

  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:2px solid var(--gold);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px">\uD83D\uDCCA Sales Tax Rate</div>';
  h+='<div style="display:flex;gap:12px;align-items:center">';
  h+='<input class="cii" type="number" step="0.0025" id="comp-tax" value="'+g.tax+'" style="width:120px">';
  h+='<span style="font-size:12px;color:var(--tx2)">Currently: '+(g.tax*100).toFixed(2)+'% \u2014 Applied to all equipment totals</span>';
  h+='</div></div>';

  // Solar Panels
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\u2600\uFE0F Solar Panels</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Unit cost per panel. Changing here updates Product Catalog.</div>';
  h+='<div class="cg">';
  h+=compRow('hyund435',g.hyund435);h+=compRow('hyund405',g.hyund405);h+=compRow('qcell410',g.qcell410);h+=compRow('qtron430',g.qtron430);
  h+='</div></div>';

  // Batteries - Tesla
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\u26A1 Batteries \u2014 Tesla</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Pre-tax unit prices from Greentech invoices. Package totals = (components \u00D7 qty) + tax.</div>';
  h+='<div class="cg">';
  h+=compRow('tesla_pw3',g.tesla_pw3);h+=compRow('tesla_exp_batt',g.tesla_exp_batt);h+=compRow('tesla_gw',g.tesla_gw);h+=compRow('tesla_bsw',g.tesla_bsw);h+=compRow('tesla_rem',g.tesla_rem);h+=compRow('tesla_exp_harness',g.tesla_exp_harness);h+=compRow('tesla_exp_wall',g.tesla_exp_wall);h+=compRow('tesla_exp_stack',g.tesla_exp_stack);h+=compRow('tesla_rsd',g.tesla_rsd);
  h+='</div>';
  h+='<div style="margin-top:10px;font-size:11px;color:var(--tx2)"><b>Smart Meter Kit</b> (BSK + REM) = '+fm(sm)+' pre-tax \u2192 <b>'+fm(wTax(sm))+'</b> w/tax &nbsp;|&nbsp; <b>Exp Accessories</b> (Harness + Wall Mount) = '+fm(expAcc)+'/ea pre-tax \u2192 <b>'+fm(wTax(expAcc))+'</b>/ea w/tax</div>';
  h+='</div>';

  // Batteries - Enphase IQ Battery 5P
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\u26A1 Batteries \u2014 Enphase IQ Battery 5P</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:6px">Pre-tax unit prices. Package totals auto-recalculate when saved.</div>';
  h+='<div style="font-size:11px;color:var(--bl);margin-bottom:12px;font-weight:600">Note: Control Cable and Comms Kit 2 prices TBD \u2014 enter when Greentech invoice received. Leave $0 until then.</div>';
  h+='<div class="cg">';
  h+=compRow('enph_bat5p',g.enph_bat5p);h+=compRow('enph_ctrl3m',g.enph_ctrl3m);h+=compRow('enph_comb5',g.enph_comb5);h+=compRow('enph_comb5c',g.enph_comb5c);h+=compRow('enph_ctrl_cable',g.enph_ctrl_cable);h+=compRow('enph_comms_kit',g.enph_comms_kit);
  h+='</div>';
  var enph5pBase=g.enph_ctrl3m.c+(g.enph_ctrl_cable?g.enph_ctrl_cable.c:0)+(g.enph_comms_kit?g.enph_comms_kit.c:0);
  h+='<div style="margin-top:10px;font-size:11px;color:var(--tx2)"><b>Fixed base per system</b> (Controller 3M + Cable + Comms): '+fm(enph5pBase)+' pre-tax \u2192 <b>'+fm(wTax(enph5pBase))+'</b> w/tax</div>';
  h+='</div>';

  // Batteries - Franklin aPower
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\u26A1 Batteries \u2014 FranklinWH aPower</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Pre-tax unit prices from Greentech Q1391851. Base components included in every package regardless of battery count.</div>';
  h+='<div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:6px">Batteries</div>';
  h+='<div class="cg">';
  h+=compRow('fwh_ap2',g.fwh_ap2);h+=compRow('fwh_aps',g.fwh_aps);
  h+='</div>';
  h+='<div style="font-size:12px;font-weight:700;color:var(--navy);margin:12px 0 6px">Standard Base Components (every package)</div>';
  h+='<div class="cg">';
  h+=compRow('fwh_agate',g.fwh_agate);h+=compRow('fwh_mac',g.fwh_mac);h+=compRow('fwh_ct200',g.fwh_ct200);h+=compRow('fwh_apbox',g.fwh_apbox);h+=compRow('fwh_lugkit',g.fwh_lugkit);h+=compRow('fwh_mainrelay',g.fwh_mainrelay);h+=compRow('fwh_eqb',g.fwh_eqb);
  h+='</div>';
  h+='<div style="font-size:12px;font-weight:700;color:var(--navy);margin:12px 0 6px">Optional Adders</div>';
  h+='<div class="cg">';
  h+=compRow('fwh_ahub',g.fwh_ahub);h+=compRow('fwh_smartcirc',g.fwh_smartcirc);h+=compRow('fwh_genmod',g.fwh_genmod);
  h+='</div>';
  var fwhBase=g.fwh_agate.c+g.fwh_mac.c+g.fwh_ct200.c+g.fwh_apbox.c+g.fwh_lugkit.c+g.fwh_mainrelay.c+g.fwh_eqb.c;
  h+='<div style="margin-top:10px;font-size:11px;color:var(--tx2)"><b>Base components total</b>: '+fm(fwhBase)+' pre-tax \u2192 <b>'+fm(wTax(fwhBase))+'</b> w/tax</div>';
  h+='</div>';

  // New Enphase inverters section
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\uD83D\uDD0C IQ8 Battery-Compatible Inverters</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Used with Enphase 5P battery systems. Priced individually per quote Q1392173.</div>';
  h+='<div class="cg">';
  h+=compRow('iq8hc',g.iq8hc);h+=compRow('iq8ac',g.iq8ac);h+=compRow('iq8x',g.iq8x);h+=compRow('iq8mc',g.iq8mc);
  h+='</div></div>';

  // Inverters
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\uD83D\uDD0C Inverters</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Unit cost per inverter.</div>';
  h+='<div class="cg">';
  h+=compRow('iq8m',g.iq8m);h+=compRow('iq8plus',g.iq8plus);h+=compRow('iq8a',g.iq8a);h+=compRow('iq7plus',g.iq7plus);h+=compRow('tesla_standalone',g.tesla_standalone);
  h+='</div></div>';

  // Monitoring
  h+='<div style="margin-bottom:18px;padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:4px">\uD83D\uDCE1 Monitoring</div>';
  h+='<div style="font-size:11px;color:var(--tx3);margin-bottom:12px">Envoy monitoring equipment.</div>';
  h+='<div class="cg">';
  h+=compRow('envoy_combo',g.envoy_combo);h+=compRow('envoy_5yr',g.envoy_5yr);
  h+='</div></div>';

  // Package totals preview
  h+='<div style="padding:14px 18px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r)">';
  h+='<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:8px">\uD83D\uDCE6 Tesla Package Totals (with tax, excl. stacking kit)</div>';
  h+='<div class="dtw"><table class="dt"><thead><tr><th>Package</th><th>Svc</th><th class="r">PW3</th><th class="r">Exp</th><th class="r">GW</th><th class="r">SM</th><th class="r">Total</th></tr></thead><tbody>';
  for(var i=0;i<D.tesla_pkgs.length;i++){var p=D.tesla_pkgs[i];h+='<tr><td>'+p.d+'</td><td>'+p.svc+'</td><td class="r">'+(p.pw3||0)+'</td><td class="r">'+(p.exp||0)+'</td><td class="r">'+(p.gw||0)+'</td><td class="r">'+(p.sm||0)+'</td><td class="r m">'+fm(p.c)+'</td></tr>';}
  h+='</tbody></table></div></div>';
  c.innerHTML=h;
}

function compRow(key,obj){
  return '<div class="ci"><div class="cil">'+obj.d+'</div><div style="display:flex;align-items:center;gap:4px"><span style="font-size:14px;font-weight:700;color:var(--navy)">$</span><input class="cii" type="number" step="0.01" id="comp-'+key+'" value="'+obj.c+'" style="flex:1"></div><div style="font-size:10px;color:var(--tx3);margin-top:3px">w/tax: '+fm(wTax(obj.c))+'</div></div>';
}

function saveComp(){
  var g=D.comp;
  g.tax=parseFloat(_id('comp-tax').value)||0;
  var keys=['tesla_pw3','tesla_exp_batt','tesla_gw','tesla_bsw','tesla_rem','tesla_exp_harness','tesla_exp_wall','tesla_exp_stack','tesla_rsd','hyund435','hyund405','qcell410','qtron430','iq8m','iq8plus','iq8a','iq7plus','tesla_standalone','envoy_combo','envoy_5yr','enph_bat5p','enph_ctrl3m','enph_comb5','enph_comb5c','enph_ctrl_cable','enph_comms_kit','iq8hc','iq8ac','iq8x','iq8mc','fwh_ap2','fwh_aps','fwh_agate','fwh_mac','fwh_ct200','fwh_apbox','fwh_lugkit','fwh_mainrelay','fwh_eqb','fwh_ahub','fwh_smartcirc','fwh_genmod'];
  for(var i=0;i<keys.length;i++){var el=_id('comp-'+keys[i]);if(el)g[keys[i]].c=parseFloat(el.value)||0;}
  recalcAll();
  toast('All prices recalculated!');
  renderComp(_id('adC'));
}

// ===== COST ANALYSIS — v6 =====
var activeAddons = [];
var officeEnabled = true;
var faviEnabled = true;
var activeLoans = []; // 'fin' and/or 'sac'
var bids=[{id:1,name:'Bid 1',state:null,activeLoans:[]}];
var activeBidIdx=0;
var addonState = {};

var ADDON_CATALOG = [
  {key:'electrical',  label:'Electrical Upgrade', dbKey:'electrical'},
  {key:'trenching',   label:'Trench/Pipe/Wire',   dbKey:'trenching'},
  {key:'generators',  label:'Generator',           dbKey:'generators',    tax:true, linked:'gen_labor'},
  {key:'gen_labor',   label:'Generator Labor',     dbKey:'gen_labor',     hidden:true},
  {key:'bird_netting',label:'Bird Netting',        dbKey:'bird_netting',  pw:true},
  {key:'steep_roof',  label:'Steep Roof',          dbKey:'steep_roof',    pw:true},
  {key:'xtravel',     label:'Travel Distance',     dbKey:'travel'},
  {key:'xmult',       label:'Multiple Arrays',     dbKey:'mult_arr'},
  {key:'misc',        label:'Miscellaneous',       dbKey:null}
];

// ===== HELPERS =====
function findOptimizer(pc){if(pc<=0)return null;var best=null;for(var i=0;i<D.optimizers.length;i++){var o=D.optimizers[i];if(o.p>=pc&&(!best||o.p<best.p))best=o;}if(!best&&D.optimizers.length>0){best=D.optimizers[0];for(var i=1;i<D.optimizers.length;i++){if(D.optimizers[i].p>best.p)best=D.optimizers[i];}}return best;}
function findTeslaLabor(bc,svc){if(bc<=0)return null;var svcF=svc||'200A';for(var i=0;i<D.tesla_labor.length;i++){var it=D.tesla_labor[i];if(it.svc===svcF&&it.batt===bc)return it;}for(var i=0;i<D.tesla_labor.length;i++){var it=D.tesla_labor[i];if(it.svc===svcF)return it;}return D.tesla_labor.length>0?D.tesla_labor[D.tesla_labor.length-1]:null;}
function findDefaultRacking(){for(var i=0;i<D.racking.length;i++){if(D.racking[i].def)return D.racking[i];}return D.racking.length>0?D.racking[0]:null;}
function findLabor(svc){var svcF=svc||'200A';for(var i=0;i<D.labor.length;i++){if(D.labor[i].svc===svcF)return D.labor[i];}return D.labor.length>0?D.labor[0]:null;}
function getNemDefault(st){if(!D.nem||D.nem.length===0)return null;if(st==='battonly'&&D.nem.length>1)return D.nem[1];return D.nem[0];}

// ===== ADDON STATE =====
function saveAddonState(){addonState={};for(var i=0;i<activeAddons.length;i++){var key=activeAddons[i];var sel=_id('cs-'+key);var qty=_id('cq-'+key);addonState[key]={s:sel?sel.value:'',q:qty?qty.value:'1'};}}
function restoreAddonState(){for(var i=0;i<activeAddons.length;i++){var key=activeAddons[i];if(addonState[key]){var sel=_id('cs-'+key);var qty=_id('cq-'+key);if(sel)sel.value=addonState[key].s;if(qty)qty.value=addonState[key].q;}}}

// ===== ADDON MANAGEMENT =====
function getAvailableAddons(){var avail=[];for(var i=0;i<ADDON_CATALOG.length;i++){var a=ADDON_CATALOG[i],found=false;if(a.hidden)continue;for(var j=0;j<activeAddons.length;j++){if(activeAddons[j]===a.key){found=true;break;}}if(!found)avail.push(a);}return avail;}
function showAddonPicker(){var avail=getAvailableAddons();if(avail.length===0){toast('All add-ons added');return;}var pk=_id('addon-picker');if(!pk)return;var h='<select class="csel" id="addon-pick-sel" style="width:180px"><option value="">\u2014 Select \u2014</option>';for(var i=0;i<avail.length;i++)h+='<option value="'+avail[i].key+'">'+avail[i].label+'</option>';h+='</select> <button class="btn btn-ac" style="font-size:11px;padding:4px 10px" onclick="confirmAddon()">Add</button> <button class="btn" style="font-size:11px;padding:4px 10px" onclick="hideAddonPicker()">Cancel</button>';pk.innerHTML=h;pk.style.display='flex';}
function hideAddonPicker(){var pk=_id('addon-picker');if(pk){pk.innerHTML='';pk.style.display='none';}}
function confirmAddon(){var sel=_id('addon-pick-sel');if(!sel||!sel.value)return;saveAddonState();activeAddons.push(sel.value);
  // Auto-add linked addon (e.g. Generator → Generator Labor)
  for(var li=0;li<ADDON_CATALOG.length;li++){if(ADDON_CATALOG[li].key===sel.value&&ADDON_CATALOG[li].linked){activeAddons.push(ADDON_CATALOG[li].linked);break;}}
  hideAddonPicker();renderAddonRows();restoreAddonState();calc();}
function removeAddon(key){saveAddonState();var out=[];
  // Find linked addon to also remove
  var linkedKey=null;for(var li=0;li<ADDON_CATALOG.length;li++){if(ADDON_CATALOG[li].key===key&&ADDON_CATALOG[li].linked){linkedKey=ADDON_CATALOG[li].linked;break;}}
  for(var i=0;i<activeAddons.length;i++){if(activeAddons[i]!==key&&activeAddons[i]!==linkedKey)out.push(activeAddons[i]);}activeAddons=out;delete addonState[key];if(linkedKey)delete addonState[linkedKey];renderAddonRows();restoreAddonState();calc();}
function renderAddonRows(){var container=_id('addon-rows');if(!container)return;var h='';for(var i=0;i<activeAddons.length;i++){var key=activeAddons[i];for(var j=0;j<ADDON_CATALOG.length;j++){if(ADDON_CATALOG[j].key===key){h+=mkAddonRow(ADDON_CATALOG[j]);break;}}}container.innerHTML=h;var hint=_id('addon-empty');if(hint)hint.style.display=activeAddons.length>0?'none':'block';}
function mkAddonRow(addon){var key=addon.key;var h='<div class="cr" id="rw-'+key+'">';h+='<div class="ct" style="color:var(--pu)">'+addon.label+' <span onclick="removeAddon(\''+key+'\')" style="color:var(--rd);cursor:pointer;font-size:12px;margin-left:6px" title="Remove">\u2715</span></div>';if(addon.dbKey===null){h+='<div class="cc"><input class="csel" id="cs-'+key+'" placeholder="Description" style="width:100%"></div>';h+='<div class="cn"><input class="cipt" type="number" id="cq-'+key+'" value="0" min="0" onchange="calc()" style="width:55px" placeholder="$"></div>';}else{var opts=D[addon.dbKey]||[];var selH='<select class="csel" id="cs-'+key+'" onchange="calc()"><option value="">none</option>';for(var i=0;i<opts.length;i++)selH+='<option value="'+opts[i].id+'">'+opts[i].d+'</option>';selH+='</select>';h+='<div class="cc">'+selH+'</div>';if(addon.pw)h+='<div class="cn"><span style="font-size:10px;color:var(--tx3)">$/W auto</span></div>';else h+='<div class="cn"><input class="cipt" type="number" id="cq-'+key+'" value="1" min="0" onchange="calc()" style="width:55px"></div>';}h+='<div class="cn" id="cc-'+key+'"><span class="zero">$0</span></div>';h+='<div class="cv" id="cv-'+key+'"><span class="zero">$0</span></div></div>';return h;}

function toggleOffice(){officeEnabled=!officeEnabled;var cb=_id('office-chk');if(cb)cb.checked=officeEnabled;calc();}
function toggleFavi(){faviEnabled=!faviEnabled;var cb=_id('favi-chk');if(cb)cb.checked=faviEnabled;calc();}
function updateDesc(){var el=_id('ca-desc');if(!el)return;var sys=_id('ca-sys');var st=sys?sys.value:'';var names={tesla:'Tesla Solar + Battery System',enphase:'Enphase Solar + Battery System',franklin:'Franklin Solar + Battery System',solaronly:'Solar Panel System',battonly:'Battery Only System'};el.value=names[st]||'';}

// ===== FINANCING as add-style =====
function showLoanPicker(){
  var pk=_id('loan-picker');if(!pk)return;
  var opts=[];
  var hasFin=false,hasSac=false,hasLease=false;
  for(var i=0;i<activeLoans.length;i++){if(activeLoans[i]==='fin')hasFin=true;if(activeLoans[i]==='sac')hasSac=true;if(activeLoans[i]==='lease')hasLease=true;}
  if(!hasFin)opts.push({k:'fin',l:'Financing'});
  if(!hasSac)opts.push({k:'sac',l:'Same as Cash'});
  if(!hasLease)opts.push({k:'lease',l:'Lease'});
  if(opts.length===0){toast('All financing added');return;}
  var h='<select class="csel" id="loan-pick-sel" style="width:180px"><option value="">\u2014 Select \u2014</option>';
  for(var i=0;i<opts.length;i++)h+='<option value="'+opts[i].k+'">'+opts[i].l+'</option>';
  h+='</select> <button class="btn btn-ac" style="font-size:11px;padding:4px 10px" onclick="confirmLoan()">Add</button> <button class="btn" style="font-size:11px;padding:4px 10px" onclick="hideLoanPicker()">Cancel</button>';
  pk.innerHTML=h;pk.style.display='flex';
}
function hideLoanPicker(){var pk=_id('loan-picker');if(pk){pk.innerHTML='';pk.style.display='none';}}
function confirmLoan(){var sel=_id('loan-pick-sel');if(!sel||!sel.value)return;activeLoans.push(sel.value);hideLoanPicker();renderLoanRows();calc();}
function removeLoan(key){var out=[];for(var i=0;i<activeLoans.length;i++){if(activeLoans[i]!==key)out.push(activeLoans[i]);}activeLoans=out;renderLoanRows();calc();}
function renderLoanRows(){
  var container=_id('loan-rows');if(!container)return;
  var h='';
  for(var i=0;i<activeLoans.length;i++){
    var key=activeLoans[i];
    if(key==='fin'){
      h+='<div id="rw-fin" style="border-bottom:1px solid var(--bd);padding:6px 10px">';
      h+='<div style="display:flex;align-items:center;justify-content:space-between;gap:8px">';
      h+='<span style="font-weight:700;color:var(--bl);font-size:11px;white-space:nowrap">FINANCING <span onclick="removeLoan(\'fin\')" style="color:var(--rd);cursor:pointer;font-size:10px;margin-left:4px">\u2715</span></span>';
      h+='<div style="display:flex;gap:2px;background:var(--bg);border-radius:6px;padding:2px;border:1px solid var(--bd)"><label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:13px;font-weight:700;padding:5px 12px;border-radius:5px" id="fin-t1-lbl"><input type="radio" name="fin-tier" value="1" checked onchange="filterFinTier()" style="accent-color:var(--bl);width:16px;height:16px">T1</label>';
      h+='<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:13px;font-weight:700;padding:5px 12px;border-radius:5px" id="fin-t2-lbl"><input type="radio" name="fin-tier" value="2" onchange="filterFinTier()" style="accent-color:var(--pu);width:16px;height:16px">T2</label></div>';
      h+='<select class="csel" id="cs-fin" onchange="calc()" style="flex:1;max-width:180px;font-size:12px;padding:4px 6px">';
      var isBattOnly=(_id('ca-sys')&&_id('ca-sys').value==='battonly');
      for(var j=0;j<D.financing.length;j++){var fi=D.financing[j];if(isBattOnly&&fi.term>144)continue;if(fi.grp==='cash'||fi.apr2>0||fi.apr1>0)h+='<option value="'+fi.id+'" data-grp="'+fi.grp+'" data-t1="'+(fi.apr1||0)+'" data-t2="'+(fi.apr2||0)+'">'+fi.d+'</option>';}
      h+='</select>';
      h+='<span style="font-size:11px;color:var(--tx3);white-space:nowrap" id="cc-finp">0%</span>';
      h+='<span style="font-family:\'JetBrains Mono\',monospace;font-size:12px;font-weight:700;color:var(--bl);white-space:nowrap" id="cv-fin">$0</span>';
      h+='</div></div>';
    }else if(key==='sac'){
      h+='<div class="cr" id="rw-sac"><div class="ct" style="color:var(--bl)">Same as Cash <span onclick="removeLoan(\'sac\')" style="color:var(--rd);cursor:pointer;font-size:12px;margin-left:6px">\u2715</span></div><div class="cc"><select class="csel" id="cs-sac" onchange="calc()">';
      for(var j=0;j<D.samecash.length;j++)h+='<option value="'+D.samecash[j].id+'">'+D.samecash[j].d+'</option>';
      h+='</select></div><div class="cn">\u2014</div><div class="cn" id="cc-sacp">0%</div><div class="cv" id="cv-sac"><span class="zero">$0</span></div></div>';
    }
    else if(key==='lease'){
      h+='<div id="rw-lease" style="border-bottom:1px solid var(--bd);padding:6px 10px">';
      h+='<div style="display:flex;align-items:center;justify-content:space-between;gap:8px">';
      h+='<span style="font-weight:700;color:#8b5cf6;font-size:11px;white-space:nowrap">LEASE <span onclick="removeLoan(\'lease\')" style="color:var(--rd);cursor:pointer;font-size:10px;margin-left:4px">&#x2715;</span></span>';
      h+='<div style="display:flex;align-items:center;gap:6px"><span style="font-size:10px;color:var(--tx3);font-weight:600">MONTHLY</span><input type="text" inputmode="numeric" class="cipt" id="ca-lease-monthly" value="0" style="width:90px;font-size:13px;font-weight:700;padding:4px 8px;text-align:right;border:2px solid #8b5cf6;border-radius:4px" onchange="calc()" oninput="calc()"><span style="font-size:10px;color:var(--tx3)">/mo</span></div>';
      h+='</div>';
      h+='<div style="display:flex;align-items:center;gap:6px;background:#f5f3ff;border:1px solid #c4b5fd;border-radius:6px;padding:4px 8px">';
      h+='<span style="font-size:10px;color:#6d28d9;font-weight:700;white-space:nowrap">$/WATT — PELL SOLAR</span>';
      h+='<span style="font-size:10px;color:#6d28d9">$</span>';
      h+='<input type="number" min="0.01" max="9.99" step="0.01" class="cipt" id="ca-lease-ppw" placeholder="0.00" style="width:70px;font-size:13px;font-weight:700;padding:4px 6px;text-align:right;border:1.5px solid #8b5cf6;border-radius:4px;background:#fff" oninput="calcLeasePPW()" onblur="clampLeasePPW()">';
      h+='</div>';
      h+='</div>';
    }
  }
  container.innerHTML=h;
  var hint=_id('loan-empty');if(hint)hint.style.display=activeLoans.length>0?'none':'block';
  filterFinTier();
}
function clampLeasePPW(){
  var ppwEl=_id('ca-lease-ppw');if(!ppwEl)return;
  var ppw=parseFloat(ppwEl.value)||0;
  if(ppw<=0){ppwEl.value='';return;}
  if(ppw>9.99){ppwEl.value='9.99';}
  ppwEl.value=parseFloat(ppwEl.value).toFixed(2);
  calcLeasePPW();
}
function calcLeasePPW(){
  var ppwEl=_id('ca-lease-ppw');if(!ppwEl)return;
  var ppw=parseFloat(ppwEl.value)||0;
  if(ppw<=0||ppw>9.99)return;  // guard: reject anything that looks like a whole dollar amount
  var qty=parseFloat((_id('cq-panels')?_id('cq-panels').value:0))||0;
  var panelSel=_id('cs-panels');var panelW=0;
  if(panelSel&&panelSel.value){
    for(var i=0;i<D.panels.length;i++){if(String(D.panels[i].id)===String(panelSel.value)){panelW=D.panels[i].w||0;break;}}
  }
  var totalW=qty*panelW;if(totalW<=0)return;
  var siEl=_id('ca-si');if(siEl){siEl.value=Math.round(ppw*totalW);calc();}
}
function filterFinTier(){
  var sel=_id('cs-fin');if(!sel)return;
  var radios=document.querySelectorAll('input[name="fin-tier"]');var tier=1;
  for(var r=0;r<radios.length;r++){if(radios[r].checked){tier=parseInt(radios[r].value);break;}}
  var opts=sel.options;var firstValid=-1;
  for(var i=0;i<opts.length;i++){
    var grp=opts[i].getAttribute('data-grp');
    var t2=parseFloat(opts[i].getAttribute('data-t2'))||0;
    if(grp==='cash'){opts[i].style.display='';if(firstValid<0)firstValid=i;continue;}
    if(tier===2&&t2===0){opts[i].style.display='none';if(sel.selectedIndex===i)sel.selectedIndex=-1;}
    else{opts[i].style.display='';if(firstValid<0)firstValid=i;}
  }
  if(sel.selectedIndex<0&&firstValid>=0)sel.selectedIndex=firstValid;
  calc();
}

// ===== RESET on service panel change =====
function onSvcChange(){
  var psel=_id('cs-panels');if(psel)psel.value='';
  var pq=_id('cq-panels');if(pq)pq.value='0';
  // For Tesla, service panel change means different hardware (Smart Meter vs Gateway), so reset battery pkg
  var sysEl=_id('ca-sys');var st=sysEl?sysEl.value:'';
  if(st==='tesla'||st==='battonly'){
    // These systems need battery re-selection since package list changes with 200A/400A
    activeAddons=[];addonState={};activeLoans=[];officeEnabled=true;faviEnabled=true;
  }
  // For Enphase and Franklin, service panel doesn't change available packages — just recalc
  rebuildRows();
}



function formatPhone(el){var v=el.value.replace(/\D/g,'');if(v.length>10)v=v.slice(0,10);if(v.length>=7)el.value='('+v.slice(0,3)+') '+v.slice(3,6)+'-'+v.slice(6);else if(v.length>=4)el.value='('+v.slice(0,3)+') '+v.slice(3);else if(v.length>0)el.value='('+v;else el.value='';}

function renderCA(){
  activeAddons=[];officeEnabled=true;faviEnabled=true;addonState={};activeLoans=[];
  var c=_id('caC');

  var left='<div style="display:flex;flex-direction:column;gap:14px">';

  // Project Details
  left+='<div class="card"><div class="ch"><div class="cht">Project Details</div></div><div class="cb" style="padding:12px 18px">';
  // ROW 1: Date | Customer + Search | Jurisdiction
  left+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px;display:flex;align-items:center;justify-content:space-between">Date<button id="btn-date-mode" onclick="toggleDateMode()" style="font-size:9px;font-weight:700;padding:2px 7px;border-radius:10px;border:none;cursor:pointer;background:#2BABE2;color:#fff;letter-spacing:.3px">AUTO</button></div><input type="date" class="cipt" id="ca-date" style="width:100%;background:var(--bg);color:var(--tx3);cursor:default" readonly><div id="ca-date-blank-row" style="display:none;margin-top:5px"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-date-blank" onchange="onDateBlankChange()" style="width:13px;height:13px;accent-color:#C0282D"><span style="font-size:10px;font-weight:700;color:#C0282D;text-transform:uppercase">Leave date blank on contract</span></label></div></div>';
  left+='<div style="position:relative"><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Customer <span id="pd-status" style="font-size:9px;font-weight:400;color:#2BABE2;text-transform:none"></span></div><div style="display:flex;gap:4px"><input type="text" class="cipt" id="ca-cust" placeholder="Customer name" style="flex:1;text-align:left" oninput="pdSearchDebounce()"><button onclick="pdSearch()" style="padding:0 8px;background:#2BABE2;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap">Search</button></div><div id="pd-results" style="display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.15);z-index:9999;max-height:200px;overflow-y:auto;margin-top:2px"></div></div>';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Jurisdiction</div><input type="text" class="cipt" id="ca-jur" placeholder="Area" value="California" style="width:100%;text-align:left"></div>';
  left+='</div>';
  // ROW 2: Co-Applicant checkbox — inline, expands when checked
  left+='<div style="margin-top:8px;display:flex;align-items:center;gap:10px">';
  left+='<label style="display:flex;align-items:center;gap:6px;cursor:pointer;white-space:nowrap"><input type="checkbox" id="cb-cobuyer" onchange="toggleCobuyer()" style="width:14px;height:14px;accent-color:var(--bl)"><span style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase">Co-Applicant</span></label>';
  left+='<div id="cobuyer-field" style="display:none;flex:1"><input type="text" class="cipt" id="ca-cobuyer" placeholder="Co-applicant full name" style="width:100%;text-align:left"></div>';
  left+='</div>';
  // ROW 3: Create in Aurora | Fetch Layout | Aurora ID
  left+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px;align-items:end">';
  left+='<button onclick="createAuroraProject()" id="btn-aurora" style="padding:8px 10px;border:none;border-radius:6px;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-weight:700;font-size:11px;cursor:pointer;letter-spacing:.3px;width:100%">&#x2600;&#xFE0F; Create in Aurora</button>';
  left+='<button onclick="fetchAuroraLayout()" id="btn-aurora-layout" style="padding:8px 10px;border:1.5px dashed #f97316;border-radius:6px;background:transparent;color:#ea580c;font-weight:700;font-size:11px;cursor:pointer;letter-spacing:.3px;width:100%;display:none">&#x1F5BC; Fetch Layout</button>';
  left+='<div><div style="font-size:10px;font-weight:700;color:#f97316;text-transform:uppercase;margin-bottom:3px">Aurora ID <span style="font-size:9px;font-weight:400;color:#888;text-transform:none">(auto or manual)</span></div><input type="text" class="cipt" id="ca-aurora-id" placeholder="Auto-filled or enter manually" oninput="onAuroraIdManualInput()" style="width:100%;text-align:left;font-size:11px"></div>';
  left+='</div>';
  left+='<div id="aurora-status" style="display:none;margin-top:4px;padding:6px 10px;border-radius:6px;font-size:11px;font-weight:600;text-align:center"></div>';
  left+='<input type="hidden" id="ca-aurora-layout-url" value="">';
  left+='<div id="aurora-layout-preview" style="display:none;margin-top:6px;border-radius:8px;overflow:hidden;border:2px solid #f97316">';
  left+='<div style="background:#f97316;color:#fff;font-size:10px;font-weight:700;padding:4px 8px;letter-spacing:.5px;display:flex;justify-content:space-between;align-items:center"><span>&#x2600;&#xFE0F; AURORA LAYOUT</span><button onclick="clearAuroraLayout()" style="background:rgba(0,0,0,.2);border:none;color:#fff;font-size:10px;border-radius:4px;padding:1px 6px;cursor:pointer">&#x2715; Clear</button></div>';
  left+='<img id="aurora-layout-img" src="" style="width:100%;display:block;max-height:200px;object-fit:cover">';
  left+='</div>';
  // ROW 4: System Type | Service Panel | Description
  left+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:10px">';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">System Type</div><select class="csel cipt-hl" id="ca-sys" onchange="updateDesc();rebuildRows()" style="width:100%"><option value="">— Select —</option><option value="tesla">Tesla System</option><option value="enphase">Enphase System</option><option value="franklin">Franklin System</option><option value="solaronly">Solar Only</option><option value="battonly">Battery Only</option><option value="carcharger">Car Charger Only</option></select></div>';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Service Panel</div><select class="csel" id="ca-svc" onchange="onSvcChange()" style="width:100%"><option value="200">200A</option><option value="400">400A</option></select></div>';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Description</div><input type="text" class="cipt" id="ca-desc" placeholder="Auto-fills from system" style="width:100%;text-align:left;font-size:11px;min-height:28px"></div>';
  left+='</div>';
  // Property Address full width
  left+='<div style="margin-top:10px"><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Property Address</div><input type="text" class="cipt" id="ca-addr" placeholder="Street, City, State ZIP" style="width:100%;text-align:left"></div>';
  // Email | Pipedrive ID
  left+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px"><div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Email</div><input type="email" class="cipt" id="ca-email" placeholder="customer@email.com" style="width:100%;text-align:left"></div><div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Pipedrive ID <span id="pd-id-status" style="font-size:9px;font-weight:400;color:#888;text-transform:none"></span></div><input type="text" class="cipt" id="ca-pd-id" placeholder="Auto-filled from search" readonly style="width:100%;text-align:left;background:var(--bg);color:var(--tx3);font-size:11px;cursor:default"></div></div>';
  // Phone | Created
  left+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Phone Number</div><input type="tel" class="cipt" id="ca-phone" placeholder="(555) 555-5555" oninput="formatPhone(this)" style="width:100%;text-align:left"></div>';
  left+='<div><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Created</div><input type="text" class="cipt" id="ca-timestamp" readonly style="width:100%;text-align:left;background:var(--bg);color:var(--tx3);font-size:11px;cursor:default"></div>';
  left+='</div>';
  // Notes full width
  left+='<div style="margin-top:10px"><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:4px">Notes</div><textarea class="cipt" id="ca-notes" placeholder="Project notes — transfers to all PDFs" rows="3" style="width:100%;text-align:left;font-size:12px;resize:vertical;min-height:60px"></textarea></div>';
  left+='</div></div>';

  // ⚡ Utility Data card
  left+='<div class="card"><div class="ch"><div class="cht">⚡ Utility Data</div></div><div class="cb" style="padding:12px 18px">';
  // Hidden storage fields
  left+='<input type="hidden" id="ca-bill-avg"><input type="hidden" id="ca-bill-annual-kwh"><input type="hidden" id="ca-bill-rate"><input type="hidden" id="ca-bill-monthly-json"><input type="hidden" id="ca-bill-source">';
  // Upload buttons row
  left+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
  left+='<div><input type="file" id="up-bill-pdf" accept=".pdf" style="display:none" onchange="handleBillPDF(this)"><div id="drop-pdf" onclick="_id(\'up-bill-pdf\').click()" ondragover="billDragOver(event,\'drop-pdf\')" ondragleave="billDragLeave(\'drop-pdf\')" ondrop="billDrop(event,\'pdf\')" style="width:100%;padding:9px 10px;border:1.5px dashed #2BABE2;border-radius:6px;background:rgba(43,171,226,.06);color:#2BABE2;font-weight:700;font-size:11px;cursor:pointer;letter-spacing:.3px;text-align:center;box-sizing:border-box;transition:background .15s">📄 Upload Bill (PDF)<div style="font-size:9px;font-weight:400;color:#2BABE2;opacity:.7;margin-top:2px">or drag &amp; drop</div></div></div>';
  left+='<div><input type="file" id="up-bill-csv" accept=".csv" style="display:none" onchange="handleBillCSV(this)"><div id="drop-csv" onclick="_id(\'up-bill-csv\').click()" ondragover="billDragOver(event,\'drop-csv\')" ondragleave="billDragLeave(\'drop-csv\')" ondrop="billDrop(event,\'csv\')" style="width:100%;padding:9px 10px;border:1.5px dashed #22C55E;border-radius:6px;background:rgba(34,197,94,.06);color:#15803d;font-weight:700;font-size:11px;cursor:pointer;letter-spacing:.3px;text-align:center;box-sizing:border-box;transition:background .15s">📊 Upload CSV (Green Button)<div style="font-size:9px;font-weight:400;color:#15803d;opacity:.7;margin-top:2px">or drag &amp; drop</div></div></div>';
  left+='</div>';
  // CSV rate input — hidden until CSV upload
  left+='<div id="bill-rate-row" style="display:none;margin-top:8px"><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:3px">Avg Rate (¢/kWh) <span style="font-size:9px;font-weight:400;text-transform:none;color:#888">used to estimate monthly bill</span></div><input type="number" class="cipt" id="ca-bill-rate-cents" value="41" min="1" max="99" step="0.1" oninput="recalcCSVBill()" style="width:90px;text-align:center"></div>';
  // Status / spinner
  left+='<div id="bill-status" style="display:none;margin-top:8px;padding:6px 10px;border-radius:6px;font-size:11px;font-weight:600;text-align:center"></div>';
  // Results panel — hidden until data loaded
  left+='<div id="bill-results" style="display:none;margin-top:10px">';
  left+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">';
  left+='<div style="background:var(--bg);border-radius:6px;padding:8px 10px"><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Avg Monthly Bill</div><div id="bill-disp-avg" style="font-size:15px;font-weight:800;color:var(--navy)">—</div></div>';
  left+='<div style="background:var(--bg);border-radius:6px;padding:8px 10px"><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Annual kWh</div><div id="bill-disp-annual" style="font-size:15px;font-weight:800;color:var(--navy)">—</div></div>';
  left+='<div style="background:var(--bg);border-radius:6px;padding:8px 10px"><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Monthly kWh</div><div id="bill-disp-monthly" style="font-size:15px;font-weight:800;color:var(--navy)">—</div></div>';
  left+='<div style="background:var(--bg);border-radius:6px;padding:8px 10px"><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Rate $/kWh</div><div id="bill-disp-rate" style="font-size:15px;font-weight:800;color:var(--navy)">—</div></div>';
  left+='</div>';
  // Monthly breakdown collapsible
  left+='<div id="bill-monthly-wrap" style="display:none;margin-top:8px"><div onclick="toggleBillMonthly()" style="font-size:10px;font-weight:700;color:#2BABE2;cursor:pointer;margin-bottom:4px">▶ Monthly Breakdown</div><div id="bill-monthly-detail" style="display:none;font-size:10px;color:var(--tx3);background:var(--bg);border-radius:6px;padding:8px 10px;line-height:1.8"></div></div>';
  // Edit / Clear row
  left+='<div style="display:flex;gap:8px;margin-top:8px">';
  left+='<button onclick="toggleBillEdit()" id="btn-bill-edit" style="flex:1;padding:6px;border:1px solid var(--bd);border-radius:6px;background:var(--white);color:var(--navy);font-size:10px;font-weight:700;cursor:pointer">✏ Edit</button>';
  left+='<button onclick="clearBillData()" style="flex:1;padding:6px;border:1px solid var(--rd);border-radius:6px;background:var(--rdbg);color:var(--rd);font-size:10px;font-weight:700;cursor:pointer">✕ Clear</button>';
  left+='</div>';
  // Edit fields (hidden by default)
  left+='<div id="bill-edit-fields" style="display:none;margin-top:8px">';
  left+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">';
  left+='<div><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:3px">Avg Monthly Bill ($)</div><input type="number" class="cipt" id="bill-edit-avg" placeholder="0.00" oninput="applyBillEdit()" style="width:100%"></div>';
  left+='<div><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:3px">Annual kWh</div><input type="number" class="cipt" id="bill-edit-annual" placeholder="0" oninput="applyBillEdit()" style="width:100%"></div>';
  left+='<div><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:3px">Monthly kWh</div><input type="number" class="cipt" id="bill-edit-monthly" placeholder="0" oninput="applyBillEdit()" style="width:100%"></div>';
  left+='<div><div style="font-size:9px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin-bottom:3px">Rate $/kWh</div><input type="number" class="cipt" id="bill-edit-rate" placeholder="0.00" step="0.001" oninput="applyBillEdit()" style="width:100%"></div>';
  left+='</div></div>';
  left+='</div>'; // end bill-results
  left+='</div></div>'; // end card

  // Cost Breakdown
  left+='<div class="card"><div class="ch"><div class="cht">Cost Breakdown</div>';
  left+='</div>';
  left+='<div id="ca-rows"></div></div>';

  // Stats bar
  left+='<div class="sbar">';
  left+='<div class="sc"><div class="scl">Job Cost</div><div class="scv" style="color:var(--navy)" id="sb-jc">$0</div></div>';
  left+='<div class="sc"><div class="scl">$/W Cost</div><div class="scv" id="sb-wc">$0</div></div>';
  left+='<div class="sc" id="sc-wr"><div class="scl">$/W Retail</div><div class="scv" style="color:var(--bl)" id="sb-wr">$0</div></div>';
  left+='<div class="sc hl"><div class="scl">Margin</div><div class="scv" style="color:var(--gn);font-size:26px;font-weight:800" id="sb-mg">$0</div></div>';
  left+='</div></div>';


  // RIGHT SIDEBAR
  var right='<div style="display:flex;flex-direction:column;gap:14px;position:sticky;top:65px;height:fit-content">';
  // Pricing with editable deposit
  right+='<div class="card"><div class="ch"><div class="cht">Pricing</div></div><div class="cb">';
  right+='<div class="tr"><span>Sale Price</span><span style="color:var(--navy);font-weight:700;font-size:16px" id="sp-sp">$0</span></div>';
  right+='<div class="tr"><span>Deposit</span><input type="text" inputmode="numeric" class="cipt cipt-hl" id="ca-dep-r" value="0" style="width:100px" onchange="syncDep(\'r\');calc()"></div>';
  right+='<div class="tr" style="font-weight:700"><span>Balance</span><span style="color:var(--gn);font-size:16px" id="sp-bl">$0</span></div>';
  right+='<div class="tr"><span>w/ Finance</span><span style="color:var(--bl);font-weight:600" id="sp-wf">$0</span></div>';
  right+='<div class="tr"><span>Est. Monthly</span><span style="color:var(--gn);font-weight:700;font-size:14px" id="sp-mo">\u2014</span></div>';
  right+='<div style="text-align:right;font-size:10px;color:var(--tx3);margin-top:-4px" id="sp-moterm"></div>';
  right+='</div></div>';

  // Tax Credit
  right+='<div class="card"><div class="ch"><div class="cht">Federal Tax Credit</div></div><div class="cb">';
  right+='<div class="tr"><span style="font-weight:600">Tax Credit %</span><div style="display:flex;align-items:center;gap:4px"><input type="number" class="cipt" id="ca-fed" value="'+(D.cfg.fed*100)+'" min="0" max="100" step="1" style="width:55px" oninput="updateFed();calc()" onchange="updateFed();calc()"><span style="font-size:12px;color:var(--tx3)">%</span></div></div>';
  right+='<div style="font-size:10px;color:var(--tx3);padding:2px 0 6px">Set to 0% if no tax credit. Adjust default in Admin Config.</div>';
  right+='</div></div>';

  // System Specs
  right+='<div class="card"><div class="ch"><div class="cht">System Specs</div></div><div class="cb">';
  right+='<div class="tr"><span>System</span><span style="color:var(--bl);font-weight:700" id="ps-sys">\u2014</span></div>';
  right+='<div class="tr"><span>Panel</span><span style="color:var(--navy);font-weight:600" id="ps-pan">\u2014</span></div>';
  right+='<div class="tr"><span>Qty / Size</span><span id="ps-qty">\u2014</span></div>';
  right+='<div class="tr"><span>Battery</span><span style="color:var(--pu);font-weight:600" id="ps-bat">\u2014</span></div>';
  right+='<div class="tr"><span>Storage</span><span id="ps-sto">\u2014</span></div>';
  right+='<div class="tr"><span>Optimizer</span><span id="ps-opt">\u2014</span></div>';
  right+='<div class="tr"><span>Racking</span><span id="ps-rk">\u2014</span></div>';
  right+='<div class="tr"><span>Labor</span><span id="ps-lab">\u2014</span></div>';
  right+='<div class="tr"><span>$/Watt</span><span style="font-weight:700" id="ps-cw">\u2014</span></div>';
  right+='</div></div>';

  // Cash Split
  right+='<div class="card"><div class="ch"><div class="cht">Cash Split</div></div><div class="cb">';
  right+='<div class="tr"><span>System Cost</span><span style="color:var(--navy);font-weight:700" id="cs-s">$0</span></div>';
  right+='<div class="tr"><span>Deposit</span><span style="color:var(--tx2)" id="cs-dep">-$0</span></div>';
  right+='<div class="tr" id="cs-fed-row"><span>Tax Credit (<span id="cs-p">0</span>%)</span><span style="color:var(--gn)" id="cs-t">-$0</span></div>';
  right+='<div class="tr tf"><span>Net Price</span><span style="color:var(--gn)" id="cs-n">$0</span></div>';
  right+='</div></div>';

  // Finance Split
  right+='<div class="card"><div class="ch"><div class="cht">Finance Split</div></div><div class="cb">';
  right+='<div class="tr"><span>Cost + Fees</span><span style="color:var(--navy);font-weight:700" id="fs-s">$0</span></div>';
  right+='<div class="tr"><span>Deposit</span><span style="color:var(--tx2)" id="fs-dep">-$0</span></div>';
  right+='<div class="tr" id="fs-fed-row"><span>Tax Credit (<span id="fs-p">0</span>%)</span><span style="color:var(--gn)" id="fs-t">-$0</span></div>';
  right+='<div class="tr tf"><span>Net Price</span><span style="color:var(--gn)" id="fs-n">$0</span></div>';
  right+='</div></div>';

  // PDF Buttons — Redesigned v3.9
  // ─── PROJECT ───
  right+='<div style="margin-top:8px">';
  right+='<div style="font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#888;font-weight:600;margin-bottom:6px">Project</div>';
  right+='<div style="display:flex;gap:5px;margin-bottom:4px">';
  right+='<button onclick="saveProject()" style="flex:1;padding:7px 4px;border:1px solid var(--navy);border-radius:var(--rs);background:transparent;color:var(--navy);font-weight:700;font-size:10.5px;cursor:pointer">&#x1F4BE; Save</button>';
  right+='<button onclick="showProjectList()" style="flex:1;padding:7px 4px;border:1px solid var(--navy);border-radius:var(--rs);background:transparent;color:var(--navy);font-weight:700;font-size:10.5px;cursor:pointer">&#x1F4C2; Load</button>';
  right+='<button onclick="resetForm()" style="flex:1;padding:7px 4px;border:1px solid var(--rd);border-radius:var(--rs);background:transparent;color:var(--rd);font-weight:700;font-size:10.5px;cursor:pointer">&#x1F504; Reset</button>';
  right+='</div>';
  // ─── SUMMARY ───
  right+='<div style="font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#888;font-weight:600;margin-top:10px;margin-bottom:6px">Summary</div>';
  right+='<button onclick="genProjectPDF()" style="width:100%;padding:10px;border:none;border-radius:var(--rs);background:var(--navy);color:#fff;font-weight:700;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;letter-spacing:.5px;margin-bottom:4px"><span style="font-size:14px">&#x1F4C4;</span> PROJECT SUMMARY</button>';
  right+='<button onclick="savePDFToPipedrive(\'project_summary\')" style="width:100%;padding:5px;border:1px solid var(--navy);border-radius:var(--rs);background:#fff;color:var(--navy);font-weight:700;font-size:10px;cursor:pointer;margin-bottom:6px">&#x1F4BE; Save Summary to Pipedrive</button>';
  right+='<button onclick="genContractorPDF()" style="width:100%;padding:10px;border:none;border-radius:var(--rs);background:var(--gold);color:var(--navy);font-weight:700;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;letter-spacing:.5px"><span style="font-size:14px">&#x1F4CB;</span> CONTRACTOR INVOICE</button>';
  right+='<button id="btn-comm" onclick="genCommissionPDF()" style="display:none;width:100%;margin-top:6px;padding:10px;border:none;border-radius:var(--rs);background:#15803d;color:#fff;font-weight:700;font-size:11px;cursor:pointer;text-align:center;letter-spacing:.5px">&#x1F4B5; COMMISSION STATEMENT</button>';
  // ─── SOLD TOGGLE ───
  right+='<div style="font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#888;font-weight:600;margin-top:10px;margin-bottom:6px">Status</div>';
  right+='<button id="btn-sold" onclick="toggleSold()" style="width:100%;padding:13px;border:2px dashed #3a3a5a;border-radius:var(--rs);background:transparent;color:#6060a0;font-weight:700;font-size:13px;cursor:pointer;letter-spacing:.03em">&#x1F91D; Mark as Sold</button>';
  right+='<div style="text-align:center;font-size:9.5px;color:#aaa;margin-top:4px;margin-bottom:2px" id="sold-hint-text">— closing docs locked until sold —</div>';
  // ─── CLOSING DOCS (hidden until sold) ───
  right+='<div id="closing-docs-section" style="display:none">';
  right+='<div style="font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#888;font-weight:600;margin-top:10px;margin-bottom:6px">Closing Docs</div>';
  right+='<button onclick="genSiteSurveyPDF()" style="width:100%;padding:10px;border:none;border-radius:var(--rs);background:#2BABE2;color:#fff;font-weight:700;font-size:11px;cursor:pointer;text-align:center;letter-spacing:.5px;margin-bottom:4px">&#x1F4CB; SITE SURVEY</button>';
  right+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px">';
  right+='<button onclick="savePDFToPipedrive(\'site_survey\')" style="padding:6px 4px;border:1px solid #2BABE2;border-radius:var(--rs);background:#fff;color:#2BABE2;font-weight:700;font-size:10px;cursor:pointer">&#x1F4BE; Save to PD</button>';
  right+='<button onclick="emailSiteSurvey()" style="padding:6px 4px;border:1px solid #2BABE2;border-radius:var(--rs);background:#fff;color:#2BABE2;font-weight:700;font-size:10px;cursor:pointer">&#x2709; Email Survey</button>';
  right+='</div>';
  right+='<button onclick="openProposalModal()" id="btn-proposal" style="width:100%;padding:12px;border:none;border-radius:var(--rs);background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-weight:700;font-size:12px;cursor:pointer;text-align:center;letter-spacing:.5px;box-shadow:0 4px 14px rgba(249,115,22,.35);margin-bottom:6px">&#x1F4E4; GENERATE PROPOSAL</button>';
  right+='<button onclick="genContract()" id="btn-contract" style="width:100%;padding:12px;border:none;border-radius:var(--rs);background:linear-gradient(135deg,#0d3a52,#1e5c7a);color:#fff;font-weight:700;font-size:12px;cursor:pointer;text-align:center;letter-spacing:.5px;box-shadow:0 4px 14px rgba(13,58,82,.4)">&#x1F4DC; GENERATE CONTRACT</button>';
  right+='</div>';
  right+='</div>';

  c.innerHTML='<div class="cag">'+left+right+'</div><div id="bid-bar-wrap">'+buildBidBar()+'</div>';
  rebuildRows();
  var tsEl=_id('ca-timestamp');
  if(tsEl){var now=new Date();tsEl.value=now.toLocaleDateString('en-US',{month:'2-digit',day:'2-digit',year:'numeric'})+'  '+now.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true});}
  var dateEl2=_id('ca-date');if(dateEl2){var now2=new Date();dateEl2.value=now2.getFullYear()+'-'+String(now2.getMonth()+1).padStart(2,'0')+'-'+String(now2.getDate()).padStart(2,'0');}
  window._dateModeAuto=true;
}

// Sync deposit between top bar and sidebar
function syncDep(src){
  var topEl=_id('ca-di');var rightEl=_id('ca-dep-r');
  if(src==='r'&&rightEl&&topEl)topEl.value=rightEl.value;
  if(src==='t'&&topEl&&rightEl)rightEl.value=topEl.value;
}
// Update fed tax credit from sidebar input
function updateFed(){
  var el=_id('ca-fed');if(!el)return;
  var pct=parseFloat(el.value)||0;
  D.cfg.fed=pct/100;
}

// ===== REBUILD ROWS =====
function rebuildRows(){
  var body=_id('ca-rows');if(!body)return;
  var sysType='';var sysEl=_id('ca-sys');if(sysEl)sysType=sysEl.value||'';
  var svc='200';var svcEl=_id('ca-svc');if(svcEl)svc=svcEl.value||'200';
  var h='';

  h+='<div class="cr crh"><div>Type</div><div>Selection</div><div style="justify-content:flex-end">Qty</div><div style="justify-content:flex-end">Cost</div><div style="justify-content:flex-end">Total</div></div>';

  // If no system type selected, show prompt and stop
  if(!sysType){
    h+='<div style="padding:30px;text-align:center;color:var(--tx3)"><div style="font-size:28px;margin-bottom:8px">\u2191</div><div style="font-size:14px;font-weight:600">Select a System Type above to begin</div></div>';
    body.innerHTML=h;return;
  }

  // Only show solar section for non-battery-only systems
  if(sysType!=='battonly'){
  h+='<div class="slbl c-ac">Solar System</div>';
  h+='<div class="cr" id="rw-panels"><div class="ct req">PANELS</div><div class="cc"><select class="csel" id="cs-panels" onchange="calc()"><option value="">none</option>';
  for(var i=0;i<D.panels.length;i++)h+='<option value="'+D.panels[i].id+'">'+D.panels[i].d+'</option>';
  h+='</select></div><div class="cn"><input class="cipt cipt-hl" type="number" id="cq-panels" value="0" min="0" onchange="calc()" style="width:50px"></div><div class="cn" id="cc-panels"><span class="zero">$0</span></div><div class="cv" id="cv-panels"><span class="zero">$0</span></div></div>';

  var dr=findDefaultRacking();
  h+='<div class="cr" id="rw-racking"><div class="ct">RACKING</div><div class="cc"><span style="color:var(--tx3)" id="rk-name">'+(dr?dr.d:'\u2014')+'</span></div><div class="cn"><span id="rk-qty" style="color:var(--tx3)">auto</span></div><div class="cn" id="cc-racking"><span class="zero">$0</span></div><div class="cv" id="cv-racking"><span class="zero">$0</span></div></div>';
  h+='<div class="cr" id="rw-optimizer"><div class="ct">MCI OPTIMIZER</div><div class="cc"><span style="color:var(--tx3)" id="opt-name">auto</span></div><div class="cn"><span id="opt-qty" style="color:var(--tx3)">\u2014</span></div><div class="cn" id="cc-optimizer"><span class="zero">$0</span></div><div class="cv" id="cv-optimizer"><span class="zero">$0</span></div></div>';

  // Solar Only gets inverter selection
  if(sysType==='solaronly'){
    h+='<div class="cr" id="rw-sinv"><div class="ct req">INVERTER</div><div class="cc"><select class="csel" id="cs-sinv" onchange="calc()"><option value="">\u2014 Select \u2014</option>';
    for(var i=0;i<D.string_inv.length;i++)h+='<option value="'+D.string_inv[i].id+'">'+D.string_inv[i].d+'</option>';
    h+='</select></div><div class="cn"><input class="cipt cipt-hl" type="number" id="cq-sinv" value="1" min="1" onchange="calc()" style="width:50px"></div><div class="cn" id="cc-sinv"><span class="zero">$0</span></div><div class="cv" id="cv-sinv"><span class="zero">$0</span></div></div>';
  }

  h+='<div class="cr" id="rw-labor"><div class="ct">INST. LABOR</div><div class="cc"><span id="lb-desc" style="color:var(--tx3)">Auto</span></div><div class="cn"><span id="lb-qty">\u2014</span></div><div class="cn" id="cc-labor"><span class="zero">$0</span></div><div class="cv" id="cv-labor"><span class="zero">$0</span></div></div>';
  }

  if(sysType==='tesla'){
    h+='<div class="slbl c-bl">Tesla Battery System</div>';
    var svcF=(svc==='400')?'400A':'200A';
    h+='<div class="cr" id="rw-tpkg"><div class="ct req">BATTERY PKG</div><div class="cc"><select class="csel" id="cs-tpkg" onchange="calc()"><option value="">\u2014 Select \u2014</option>';
    for(var i=0;i<D.tesla_pkgs.length;i++){var pk=D.tesla_pkgs[i];if(pk.svc===svcF)h+='<option value="'+pk.id+'">'+pk.d+'</option>';}
    h+='</select></div><div class="cn">\u2014</div><div class="cn" id="cc-tpkg"><span class="zero">$0</span></div><div class="cv" id="cv-tpkg"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-tinfo" style="border-bottom:none"><div class="ct" style="color:var(--tx3);font-size:10px">SPECS</div><div class="cc"><span style="color:var(--tx3)" id="tpkg-info">Select above</span></div><div class="cn"></div><div class="cn"></div><div class="cv"></div></div>';
    h+='<div class="cr" id="rw-tstack" style="display:none"><div class="ct" style="color:var(--pu)">STACKING KIT</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-tstack" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600" id="tstack-label">Add stacking kit</span></label></div><div class="cn" id="tstack-qty">\u2014</div><div class="cn" id="cc-tstack"><span class="zero">$0</span></div><div class="cv" id="cv-tstack"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-trsd"><div class="ct" style="color:var(--pu)">RAPID SHUTDOWN</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-trsd" onchange="calc()" style="width:16px;height:16px;accent-color:var(--gn)"><span style="font-size:11px;color:var(--gn);font-weight:600" id="trsd-label">Battery &gt;5ft from panel</span></label></div><div class="cn" id="trsd-qty">\u2014</div><div class="cn" id="cc-trsd"><span class="zero">$0</span></div><div class="cv" id="cv-trsd"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-tlabor"><div class="ct">BATT LABOR</div><div class="cc"><span style="color:var(--tx3)" id="tlab-name">auto</span></div><div class="cn">\u2014</div><div class="cn" id="cc-tlabor"><span class="zero">$0</span></div><div class="cv" id="cv-tlabor"><span class="zero">$0</span></div></div>';
    h+='<div class="slbl" style="color:var(--pu)">Battery Location Options</div>';
    h+='<div class="cr" id="rw-bollards"><div class="ct" style="color:var(--pu)">BOLLARDS</div><div class="cc" style="display:flex;align-items:center;gap:8px"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-bollards" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Bollards needed</span></label><select class="csel" id="cs-bollards-qty" onchange="calc()" style="font-size:11px;width:55px"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div class="cn">\u2014</div><div class="cn" id="cc-bollards"><span class="zero">$0</span></div><div class="cv" id="cv-bollards"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-smokedet"><div class="ct" style="color:var(--pu)">SMOKE DET</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-smokedet" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Smoke detectors</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-smokedet"><span class="zero">$0</span></div><div class="cv" id="cv-smokedet"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-cc-addon"><div class="ct" style="color:#2BABE2">EV CHARGER</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-cc-addon" onchange="calc()" style="width:16px;height:16px;accent-color:#2BABE2"><span style="font-size:11px;color:#2BABE2;font-weight:600">Add Car Charger</span></label></div><div class="cn"><select class="csel" id="cs-cc-feet" onchange="calc()" style="font-size:11px;width:70px"><option value="0">0 ft</option><option value="5">5 ft</option><option value="10">10 ft</option><option value="15">15 ft</option><option value="20">20 ft</option><option value="25">25 ft</option><option value="30">30 ft</option><option value="40">40 ft</option><option value="50">50 ft</option><option value="75">75 ft</option><option value="100">100 ft</option></select></div><div class="cn" id="cc-cc-addon"><span class="zero">$0</span></div><div class="cv" id="cv-cc-addon"><span class="zero">$0</span></div></div>';
  }else if(sysType==='enphase'){
    h+='<div class="slbl c-bl">Enphase IQ Battery 5P</div>';
    h+='<div class="cr" id="rw-e5ppkg"><div class="ct req">BATTERY PKG</div><div class="cc"><select class="csel" id="cs-e5ppkg" onchange="calc()" style="width:100%"><option value="">\u2014 Select Package \u2014</option>';
    for(var i=0;i<D.enphase_5p_pkgs.length;i++){var pk=D.enphase_5p_pkgs[i];h+='<option value="'+pk.id+'">'+pk.d+'</option>';}
    h+='</select></div><div class="cn">\u2014</div><div class="cn" id="cc-e5ppkg"><span class="zero">$0</span></div><div class="cv" id="cv-e5ppkg"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-e5pinfo" style="border-bottom:none"><div class="ct" style="color:var(--tx3);font-size:10px">SPECS</div><div class="cc"><span style="color:var(--tx3)" id="e5ppkg-info">Select package above</span></div><div class="cn"></div><div class="cn"></div><div class="cv"></div></div>';
    h+='<div class="cr" id="rw-e5plabor"><div class="ct">BATT LABOR</div><div class="cc"><span style="color:var(--tx3)" id="e5plab-name">auto</span></div><div class="cn">\u2014</div><div class="cn" id="cc-e5plabor"><span class="zero">$0</span></div><div class="cv" id="cv-e5plabor"><span class="zero">$0</span></div></div>';
    h+='<div class="slbl" style="color:var(--pu)">Battery Location Options</div>';
    h+='<div class="cr" id="rw-bollards"><div class="ct" style="color:var(--pu)">BOLLARDS</div><div class="cc" style="display:flex;align-items:center;gap:8px"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-bollards" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Bollards needed</span></label><select class="csel" id="cs-bollards-qty" onchange="calc()" style="font-size:11px;width:55px"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div class="cn">\u2014</div><div class="cn" id="cc-bollards"><span class="zero">$0</span></div><div class="cv" id="cv-bollards"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-smokedet"><div class="ct" style="color:var(--pu)">SMOKE DET</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-smokedet" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Smoke detectors</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-smokedet"><span class="zero">$0</span></div><div class="cv" id="cv-smokedet"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-cc-addon"><div class="ct" style="color:#2BABE2">EV CHARGER</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-cc-addon" onchange="calc()" style="width:16px;height:16px;accent-color:#2BABE2"><span style="font-size:11px;color:#2BABE2;font-weight:600">Add Car Charger</span></label></div><div class="cn"><select class="csel" id="cs-cc-feet" onchange="calc()" style="font-size:11px;width:70px"><option value="0">0 ft</option><option value="5">5 ft</option><option value="10">10 ft</option><option value="15">15 ft</option><option value="20">20 ft</option><option value="25">25 ft</option><option value="30">30 ft</option><option value="40">40 ft</option><option value="50">50 ft</option><option value="75">75 ft</option><option value="100">100 ft</option></select></div><div class="cn" id="cc-cc-addon"><span class="zero">$0</span></div><div class="cv" id="cv-cc-addon"><span class="zero">$0</span></div></div>';
  }else if(sysType==='franklin'){
    h+='<div class="slbl c-bl">FranklinWH aPower Battery</div>';
    h+='<div class="cr"><div class="ct" style="color:var(--navy);font-size:10px;font-weight:700">BATTERY TYPE</div><div class="cc"><select class="csel" id="cs-fwhtype" onchange="calc()" style="font-size:12px;font-weight:600;color:var(--navy)"><option value="ap2">FranklinWH aPower 2 (AC-coupled — needs inverter)</option><option value="aps">FranklinWH aPower S (All-in-one — built-in inverter)</option></select></div><div class="cn">\u2014</div><div class="cn"></div><div class="cv"></div></div>';
    h+='<div class="cr" id="rw-fwhpkg"><div class="ct req">BATTERY PKG</div><div class="cc"><select class="csel" id="cs-fwhpkg" onchange="calc()" style="width:100%"><option value="">\u2014 Select Package \u2014</option>';
    for(var i=0;i<D.franklin_ap2_pkgs.length;i++){var pk=D.franklin_ap2_pkgs[i];h+='<option value="ap2-'+pk.id+'">'+pk.d+'</option>';}
    for(var i=0;i<D.franklin_aps_pkgs.length;i++){var pk=D.franklin_aps_pkgs[i];h+='<option value="aps-'+pk.id+'">'+pk.d+'</option>';}
    h+='</select></div><div class="cn">\u2014</div><div class="cn" id="cc-fwhpkg"><span class="zero">$0</span></div><div class="cv" id="cv-fwhpkg"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-fwhinfo" style="border-bottom:none"><div class="ct" style="color:var(--tx3);font-size:10px">SPECS</div><div class="cc"><span style="color:var(--tx3)" id="fwhpkg-info">Select package above</span></div><div class="cn"></div><div class="cn"></div><div class="cv"></div></div>';
    h+='<div class="slbl" style="color:var(--gold)">Optional Adders</div>';
    h+='<div class="cr" id="rw-fwh-ahub"><div class="ct" style="color:var(--gold)">aHUB</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-fwh-ahub" onchange="calc()" style="width:16px;height:16px;accent-color:var(--gold)"><span style="font-size:11px;color:var(--navy);font-weight:600">Add aHub (Multi-Array / Generator / EV)</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-fwh-ahub"><span class="zero">$0</span></div><div class="cv" id="cv-fwh-ahub"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-fwh-sc"><div class="ct" style="color:var(--gold)">SMART CIRC</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-fwh-sc" onchange="calc()" style="width:16px;height:16px;accent-color:var(--gold)"><span style="font-size:11px;color:var(--navy);font-weight:600">Add Smart Circuits Module (3 Circuits)</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-fwh-sc"><span class="zero">$0</span></div><div class="cv" id="cv-fwh-sc"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-fwh-gen"><div class="ct" style="color:var(--gold)">GEN MODULE</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-fwh-gen" onchange="calc()" style="width:16px;height:16px;accent-color:var(--gold)"><span style="font-size:11px;color:var(--navy);font-weight:600">Add Generator Module</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-fwh-gen"><span class="zero">$0</span></div><div class="cv" id="cv-fwh-gen"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-fwhlabor"><div class="ct">BATT LABOR</div><div class="cc"><span style="color:var(--tx3)" id="fwhlab-name">auto</span></div><div class="cn">\u2014</div><div class="cn" id="cc-fwhlabor"><span class="zero">$0</span></div><div class="cv" id="cv-fwhlabor"><span class="zero">$0</span></div></div>';
    h+='<div class="slbl" style="color:var(--pu)">Battery Location Options</div>';
    h+='<div class="cr" id="rw-bollards"><div class="ct" style="color:var(--pu)">BOLLARDS</div><div class="cc" style="display:flex;align-items:center;gap:8px"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-bollards" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Bollards needed</span></label><select class="csel" id="cs-bollards-qty" onchange="calc()" style="font-size:11px;width:55px"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div class="cn">\u2014</div><div class="cn" id="cc-bollards"><span class="zero">$0</span></div><div class="cv" id="cv-bollards"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-smokedet"><div class="ct" style="color:var(--pu)">SMOKE DET</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-smokedet" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Smoke detectors</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-smokedet"><span class="zero">$0</span></div><div class="cv" id="cv-smokedet"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-cc-addon"><div class="ct" style="color:#2BABE2">EV CHARGER</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-cc-addon" onchange="calc()" style="width:16px;height:16px;accent-color:#2BABE2"><span style="font-size:11px;color:#2BABE2;font-weight:600">Add Car Charger</span></label></div><div class="cn"><select class="csel" id="cs-cc-feet" onchange="calc()" style="font-size:11px;width:70px"><option value="0">0 ft</option><option value="5">5 ft</option><option value="10">10 ft</option><option value="15">15 ft</option><option value="20">20 ft</option><option value="25">25 ft</option><option value="30">30 ft</option><option value="40">40 ft</option><option value="50">50 ft</option><option value="75">75 ft</option><option value="100">100 ft</option></select></div><div class="cn" id="cc-cc-addon"><span class="zero">$0</span></div><div class="cv" id="cv-cc-addon"><span class="zero">$0</span></div></div>';
  }else if(sysType==='battonly'){
    h+='<div class="slbl c-bl">Battery Only System \u2014 No Solar</div>';
    var svcF=(svc==='400')?'400A':'200A';
    h+='<div class="cr" id="rw-tpkg"><div class="ct req">BATTERY PKG</div><div class="cc"><select class="csel" id="cs-tpkg" onchange="calc()"><option value="">\u2014 Select Battery \u2014</option>';
    for(var i=0;i<D.tesla_pkgs.length;i++){var pk=D.tesla_pkgs[i];if(pk.svc===svcF)h+='<option value="'+pk.id+'">'+pk.d+'</option>';}
    h+='</select></div><div class="cn">\u2014</div><div class="cn" id="cc-tpkg"><span class="zero">$0</span></div><div class="cv" id="cv-tpkg"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-tinfo" style="border-bottom:none"><div class="ct" style="color:var(--tx3);font-size:10px">SPECS</div><div class="cc"><span style="color:var(--tx3)" id="tpkg-info">Select above</span></div><div class="cn"></div><div class="cn"></div><div class="cv"></div></div>';
    h+='<div class="cr" id="rw-tstack" style="display:none"><div class="ct" style="color:var(--pu)">STACKING KIT</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-tstack" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600" id="tstack-label">Add stacking kit</span></label></div><div class="cn" id="tstack-qty">\u2014</div><div class="cn" id="cc-tstack"><span class="zero">$0</span></div><div class="cv" id="cv-tstack"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-trsd"><div class="ct" style="color:var(--pu)">RAPID SHUTDOWN</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-trsd" onchange="calc()" style="width:16px;height:16px;accent-color:var(--gn)"><span style="font-size:11px;color:var(--gn);font-weight:600" id="trsd-label">Battery &gt;5ft from panel</span></label></div><div class="cn" id="trsd-qty">\u2014</div><div class="cn" id="cc-trsd"><span class="zero">$0</span></div><div class="cv" id="cv-trsd"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-tlabor"><div class="ct">BATT LABOR</div><div class="cc"><span style="color:var(--tx3)" id="tlab-name">auto</span></div><div class="cn">\u2014</div><div class="cn" id="cc-tlabor"><span class="zero">$0</span></div><div class="cv" id="cv-tlabor"><span class="zero">$0</span></div></div>';
    h+='<div class="slbl" style="color:var(--pu)">Battery Location Options</div>';
    h+='<div class="cr" id="rw-bollards"><div class="ct" style="color:var(--pu)">BOLLARDS</div><div class="cc" style="display:flex;align-items:center;gap:8px"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-bollards" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Bollards needed</span></label><select class="csel" id="cs-bollards-qty" onchange="calc()" style="font-size:11px;width:55px"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><div class="cn">\u2014</div><div class="cn" id="cc-bollards"><span class="zero">$0</span></div><div class="cv" id="cv-bollards"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-smokedet"><div class="ct" style="color:var(--pu)">SMOKE DET</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-smokedet" onchange="calc()" style="width:16px;height:16px;accent-color:var(--pu)"><span style="font-size:11px;color:var(--pu);font-weight:600">Garage - Smoke detectors</span></label></div><div class="cn">\u2014</div><div class="cn" id="cc-smokedet"><span class="zero">$0</span></div><div class="cv" id="cv-smokedet"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-cc-addon"><div class="ct" style="color:#2BABE2">EV CHARGER</div><div class="cc"><label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" id="cb-cc-addon" onchange="calc()" style="width:16px;height:16px;accent-color:#2BABE2"><span style="font-size:11px;color:#2BABE2;font-weight:600">Add Car Charger</span></label></div><div class="cn"><select class="csel" id="cs-cc-feet" onchange="calc()" style="font-size:11px;width:70px"><option value="0">0 ft</option><option value="5">5 ft</option><option value="10">10 ft</option><option value="15">15 ft</option><option value="20">20 ft</option><option value="25">25 ft</option><option value="30">30 ft</option><option value="40">40 ft</option><option value="50">50 ft</option><option value="75">75 ft</option><option value="100">100 ft</option></select></div><div class="cn" id="cc-cc-addon"><span class="zero">$0</span></div><div class="cv" id="cv-cc-addon"><span class="zero">$0</span></div></div>';
  }
  else if(sysType==='carcharger'){
    h+='<div class="cr crh" style="background:var(--bg2)"><div>Type</div><div>Selection</div><div style="justify-content:flex-end">Distance</div><div style="justify-content:flex-end">Cost</div><div style="justify-content:flex-end">Total</div></div>';
    h+='<div class="cr" id="rw-cc-standalone"><div class="ct" style="color:#2BABE2">EV CHARGER</div><div class="cc" style="font-size:12px;font-weight:600;color:#2BABE2">Standalone Car Charger Install</div><div class="cn"><select class="csel" id="cs-cc-feet-sa" onchange="calc()" style="font-size:11px;width:70px"><option value="5">5 ft</option><option value="10">10 ft</option><option value="15">15 ft</option><option value="20">20 ft</option><option value="25">25 ft</option><option value="30">30 ft</option><option value="40">40 ft</option><option value="50">50 ft</option><option value="75">75 ft</option><option value="100">100 ft</option></select></div><div class="cn" id="cc-cc-sa"><span class="zero">$0</span></div><div class="cv" id="cv-cc-sa"><span class="zero">$0</span></div></div>';
    h+='<div class="cr" id="rw-cc-profit"><div class="ct" style="color:var(--gn)">PROFIT</div><div class="cc"><span style="font-size:11px;color:var(--tx3)">Owner Markup</span></div><div class="cn">\u2014</div><div class="cn"><span id="ci-cc-profit-display" style="font-size:12px;font-weight:600;color:var(--gn)">$0</span></div><div class="cv" id="cv-cc-profit"><span class="zero">$0</span></div></div>';
  }
else{
    h+='<div class="slbl c-bl">System</div><div style="padding:14px;text-align:center;color:var(--tx3)">\u2191 Select system type</div>';
  }

  h+='<div class="slbl c-ac">Project Costs</div>';
  // Auto-select correct permit: battery only = id 2, else first
  var permDef=(sysType==='battonly'&&D.permits.length>1)?D.permits[1].id:(D.permits.length>0?D.permits[0].id:0);
  var permName='';
  for(var i=0;i<D.permits.length;i++){if(D.permits[i].id===permDef){permName=D.permits[i].d;break;}}
  h+='<div class="cr" id="rw-permits"><div class="ct">PERMITS</div><div class="cc"><span style="font-weight:700;color:#15803d;font-size:12px">'+permName+'</span><select class="csel" id="cs-permits" onchange="calc()" style="display:none">';
  for(var i=0;i<D.permits.length;i++)h+='<option value="'+D.permits[i].id+'"'+(D.permits[i].id===permDef?' selected':'')+'>'+D.permits[i].d+'</option>';
  h+='</select></div><div class="cn"><input class="cipt" type="number" id="cq-permits" value="1" min="0" onchange="calc()" style="width:50px"></div><div class="cn" id="cc-permits"><span class="zero">$0</span></div><div class="cv" id="cv-permits"><span class="zero">$0</span></div></div>';

  var ssItem=(D.sitesurvey.length>0)?D.sitesurvey[0]:null;
  h+='<div class="cr" id="rw-sitesurvey"><div class="ct">SITE SURVEY</div><div class="cc"><span style="color:var(--tx3)">'+(ssItem?ssItem.d:'\u2014')+'</span></div><div class="cn">\u2014</div><div class="cn" id="cc-sitesurvey"><span class="zero">$0</span></div><div class="cv" id="cv-sitesurvey"><span class="zero">$0</span></div></div>';

  var nemDef=getNemDefault(sysType);
  var nemName='';
  for(var i=0;i<D.nem.length;i++){if(nemDef&&D.nem[i].id===nemDef.id){nemName=D.nem[i].d;break;}}
  h+='<div class="cr" id="rw-xnem"><div class="ct">NEM PAPERWORK</div><div class="cc"><span style="font-weight:700;color:#15803d;font-size:12px">'+nemName+'</span><select class="csel" id="cs-xnem" onchange="calc()" style="display:none">';
  for(var i=0;i<D.nem.length;i++)h+='<option value="'+D.nem[i].id+'"'+(nemDef&&D.nem[i].id===nemDef.id?' selected':'')+'>'+D.nem[i].d+'</option>';
  h+='</select></div><div class="cn"><input class="cipt" type="number" id="cq-xnem" value="1" min="0" onchange="calc()" style="width:50px"></div><div class="cn" id="cc-xnem"><span class="zero">$0</span></div><div class="cv" id="cv-xnem"><span class="zero">$0</span></div></div>';

  // FAVI with checkbox
  var faviItem=(D.favi.length>0)?D.favi[0]:null;
  h+='<div class="cr" id="rw-favi"><div class="ct"><label style="display:flex;align-items:center;gap:5px;cursor:pointer"><input type="checkbox" id="favi-chk" '+(faviEnabled?'checked':'')+' onchange="toggleFavi()" style="accent-color:var(--gold);width:14px;height:14px">FAVI</label></div><div class="cc"><span style="color:var(--tx3)">'+(faviItem?faviItem.d:'\u2014')+'</span></div><div class="cn">\u2014</div><div class="cn" id="cc-favi"><span class="zero">$0</span></div><div class="cv" id="cv-favi"><span class="zero">$0</span></div></div>';

  // Office with checkbox
  var offItem=(D.office.length>0)?D.office[0]:null;
  h+='<div class="cr" id="rw-office"><div class="ct"><label style="display:flex;align-items:center;gap:5px;cursor:pointer"><input type="checkbox" id="office-chk" '+(officeEnabled?'checked':'')+' onchange="toggleOffice()" style="accent-color:var(--gold);width:14px;height:14px">OFFICE WORK</label></div><div class="cc"><span style="color:var(--tx3)">'+(offItem?offItem.d:'\u2014')+'</span><span style="color:var(--rd);margin-left:6px;font-size:10px">\u26A0 Confirm</span></div><div class="cn">\u2014</div><div class="cn" id="cc-office"><span class="zero">$0</span></div><div class="cv" id="cv-office"><span class="zero">$0</span></div></div>';

  // ADD-ONS — rows first, then + button below
  h+='<div class="slbl" style="color:var(--pu)">Optional Add-ons</div>';
  h+='<div id="addon-rows"></div>';
  h+='<div id="addon-empty" style="padding:8px 10px;text-align:center;color:var(--tx3);font-size:11px">No add-ons</div>';
  h+='<div id="addon-picker" style="display:none;padding:8px 10px;gap:8px;align-items:center;background:var(--bg);border-bottom:1px solid var(--bd)"></div>';
  h+='<div style="padding:6px 10px;border-bottom:1px solid var(--bd)"><button class="btn" style="font-size:11px;padding:4px 12px;color:var(--pu);border-color:rgba(124,58,237,.25);background:var(--pubg)" onclick="showAddonPicker()">+ Add Add-on</button></div>';

  // FINANCING — rows first, then + button below
  h+='<div class="slbl c-gn">Financing</div>';
  h+='<div id="loan-rows"></div>';
  h+='<div id="loan-empty" style="padding:8px 10px;text-align:center;color:var(--tx3);font-size:11px">No financing selected</div>';
  h+='<div id="loan-picker" style="display:none;padding:8px 10px;gap:8px;align-items:center;background:var(--bg);border-bottom:1px solid var(--bd)"></div>';
  h+='<div style="padding:6px 10px;border-bottom:1px solid var(--bd)"><button class="btn" style="font-size:11px;padding:4px 12px;color:var(--gn);border-color:rgba(22,163,74,.25);background:var(--gnbg)" onclick="showLoanPicker()">+ Add Financing</button></div>';

  h+='<div class="cr crs"><div></div><div></div><div></div><div style="justify-content:flex-end">Total Job Cost</div><div style="justify-content:flex-end" id="cv-sub">$0</div></div>';

    // SALES COMMISSION
  h+='<div class="slbl" style="color:var(--navy)">Sales Commission</div>';
  h+='<div class="cr" id="rw-commission"><div class="ct" style="color:var(--navy)">SALESPERSON</div><div class="cc"><select class="csel" id="cs-salesperson" onchange="calc()"><option value="">None</option>';
  for(var si=0;si<D.salesteam.length;si++)h+='<option value="'+D.salesteam[si].id+'">'+D.salesteam[si].d+' ($'+D.salesteam[si].rate+'/kW)</option>';
  h+='</select></div><div class="cn" id="comm-rate" style="font-size:13px;color:var(--navy);font-weight:600">\u2014</div><div class="cn" id="comm-kw" style="font-size:13px;color:var(--navy);font-weight:600">\u2014</div><div class="cv" id="cv-commission" style="font-weight:700;color:var(--navy)"><span class="zero">$0</span></div></div>';

// ===== SALE PRICE & DEPOSIT =====
  h+='<div style="margin:16px 0 8px;padding:16px;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:2px solid var(--gn);border-radius:var(--r)">';
  h+='<div style="display:flex;gap:16px;align-items:center;justify-content:center;flex-wrap:wrap">';
  h+='<label style="font-size:14px;font-weight:800;color:#15803d;display:flex;align-items:center;gap:6px">SALE PRICE <input type="text" inputmode="numeric" class="cipt" id="ca-si" value="0" style="width:140px;font-size:16px;font-weight:700;padding:8px 12px;background:#fff;border:2px solid var(--gn);border-radius:6px;text-align:right" onchange="calc()" oninput="calc()"></label>';
  h+='<label style="font-size:14px;font-weight:800;color:#15803d;display:flex;align-items:center;gap:6px">DEPOSIT <input type="text" inputmode="numeric" class="cipt" id="ca-di" value="0" style="width:120px;font-size:16px;font-weight:700;padding:8px 12px;background:#fff;border:2px solid var(--gn);border-radius:6px;text-align:right" onchange="syncDep(\'t\');calc()" oninput="syncDep(\'t\');calc()"></label>';
  h+='</div>';
  h+='<div id="ca-warn" style="margin-top:8px"></div>';
  h+='</div>';

  // ===== CASH vs FINANCED COMPARISON =====
  h+='<div id="deal-compare" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 8px">';

  h+='<div class="card" id="deal-cash" style="border:2px solid var(--gn);border-radius:var(--r);overflow:hidden">';
  h+='<div style="padding:10px 14px;background:#15803d;color:#fff;font-weight:800;font-size:14px;letter-spacing:1px;text-align:center">CASH DEAL</div>';
  h+='<div style="padding:16px 18px">';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="font-size:14px;color:var(--tx3)">Sale Price</span><span style="font-weight:700;font-size:17px;color:var(--navy)" id="dc-sale">$0</span></div>';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="font-size:14px;color:var(--tx3)">Job Cost</span><span style="font-size:16px;color:var(--tx2)" id="dc-cost">$0</span></div>';
  h+='<div style="border-top:2px solid var(--gn);padding-top:10px;margin-top:6px">';
  h+='<div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:15px;font-weight:800;color:#15803d">MARGIN</span><span style="font-weight:800;font-size:22px" id="dc-margin" style="color:#15803d">$0</span></div>';
  h+='<div style="text-align:right;font-size:28px;font-weight:800;margin-top:2px"><span id="dc-pct">0%</span></div>';
  h+='<div style="text-align:center;font-size:15px;font-weight:700;margin-top:8px;padding:6px 10px;border-radius:6px" id="dc-status" style="font-size:14px;font-weight:700">\u2014</div>';
  h+='</div></div></div>';

  h+='<div class="card" id="deal-fin" style="border:2px solid var(--bl);border-radius:var(--r);overflow:hidden">';
  h+='<div style="padding:10px 14px;background:var(--bl);color:#fff;font-weight:800;font-size:14px;letter-spacing:1px;text-align:center">FINANCED DEAL</div>';
  h+='<div style="padding:16px 18px">';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="font-size:14px;color:var(--tx3)">Sale + Fee</span><span style="font-weight:700;font-size:17px;color:var(--navy)" id="df-sale">$0</span></div>';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:14px;color:var(--tx3)">Job Cost</span><span style="font-size:16px;color:var(--tx2)" id="df-cost">$0</span></div>';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="font-size:14px;color:var(--bl)">Dealer Fee</span><span style="font-size:15px;font-weight:600;color:var(--bl)" id="df-fee">$0</span></div>';
  h+='<div style="border-top:2px solid var(--bl);padding-top:10px;margin-top:6px">';
  h+='<div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:15px;font-weight:800;color:var(--bl)">MARGIN</span><span style="font-weight:800;font-size:22px" id="df-margin">$0</span></div>';
  h+='<div style="text-align:right;font-size:28px;font-weight:800;margin-top:2px"><span id="df-pct">0%</span></div>';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><span style="font-size:15px;font-weight:700;padding:6px 10px;border-radius:6px" id="df-status" style="font-size:14px;font-weight:700">\u2014</span><span style="font-size:20px;font-weight:800;color:var(--bl)" id="df-monthly">$0/mo</span></div>';
  h+='</div></div></div>';

  h+='</div>';

  // LEASE OPTION — uses Sale Price as lease total, monthly from financing row
  h+='<div id="lease-section" style="margin:8px 0">';
  h+='<div class="card" id="deal-lease" style="border:2px solid #8b5cf6;border-radius:var(--r);overflow:hidden">';
  h+='<div style="padding:10px 14px;background:#8b5cf6;color:#fff;font-weight:800;font-size:14px;letter-spacing:1px;text-align:center">LEASE</div>';
  h+='<div style="padding:16px 18px">';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:10px"><span style="font-size:14px;color:var(--tx3)">Sale Price</span><span style="font-weight:700;font-size:17px;color:#8b5cf6" id="dl-sale">$0</span></div>';
  h+='<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:14px;color:var(--tx3)">Job Cost</span><span style="font-size:16px;color:var(--tx2)" id="dl-cost">$0</span></div>';
  h+='<div style="border-top:2px solid #8b5cf6;padding-top:10px;margin-top:6px">';
  h+='<div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font-size:15px;font-weight:800;color:#8b5cf6">MARGIN</span><span style="font-weight:800;font-size:22px" id="dl-margin">$0</span></div>';
  h+='<div style="text-align:right;font-size:28px;font-weight:800;margin-top:2px"><span id="dl-pct">0%</span></div>';
  h+='<div style="display:flex;justify-content:space-between;margin-top:8px"><span style="font-size:14px;color:#8b5cf6;font-weight:600">Monthly Payment</span><span style="font-weight:700;font-size:17px;color:#8b5cf6" id="dl-monthly">$0/mo</span></div>';
  h+='<div style="text-align:center;margin-top:8px;padding:8px;border-radius:6px;font-weight:700" id="dl-status"></div>';
  h+='</div></div></div>';
  h+='</div>';

  body.innerHTML=h;
  renderAddonRows();restoreAddonState();
  renderLoanRows();
  calc();
  checkExpiryWarnings();
}

// ===== CELL HELPERS =====
function setCell(id,val){var el=_id(id);if(!el)return;el.innerHTML=val>0?fm(val):'<span class="zero">$0</span>';}
function setRowHv(id,val){var el=_id(id);if(!el)return;if(val>0)el.classList.add('hv');else el.classList.remove('hv');}

// ===== MAIN CALC =====
function calc(){
  var sub=0,pW=0,pQ=0;

  // Highlight empty required fields, remove highlight when filled
  var sysEl=_id('ca-sys');
  if(sysEl){if(sysEl.value)sysEl.classList.remove('cipt-hl');else sysEl.classList.add('cipt-hl');}
  var pQEl=_id('cq-panels');
  if(pQEl){var pqv=parseFloat(pQEl.value)||0;if(pqv>0)pQEl.classList.remove('cipt-hl');else pQEl.classList.add('cipt-hl');}

  var pSelEl=_id('cs-panels');var pSel=pSelEl?(parseInt(pSelEl.value)||0):0;
  var pIt=null;for(var i=0;i<D.panels.length;i++){if(D.panels[i].id===pSel){pIt=D.panels[i];break;}}
  var pQEl=_id('cq-panels');if(pIt){pW=pIt.w||0;pQ=pQEl?(parseFloat(pQEl.value)||0):0;}
  var sysW=pW*pQ,sysKw=sysW/1000;
  var panelCost=pIt?wTax(pIt.c):0,panelTotal=panelCost*pQ;
  setCell('cc-panels',panelCost);setCell('cv-panels',panelTotal);setRowHv('rw-panels',panelTotal);sub+=panelTotal;

  var dr=findDefaultRacking();var rkCost=dr?dr.c:0,rkTotal=rkCost*pQ;
  var rkQtyEl=_id('rk-qty');if(rkQtyEl)rkQtyEl.textContent=pQ>0?pQ:'auto';
  setCell('cc-racking',rkCost);setCell('cv-racking',rkTotal);setRowHv('rw-racking',rkTotal);sub+=rkTotal;

  var optItem=findOptimizer(pQ);var optCost=optItem?wTax(optItem.c):0;
  var on=_id('opt-name');if(on)on.textContent=optItem?optItem.d:'auto';
  var oq=_id('opt-qty');if(oq)oq.textContent=optItem?(optItem.p+' panels'):'\u2014';
  setCell('cc-optimizer',optCost);setCell('cv-optimizer',optCost);setRowHv('rw-optimizer',optCost);sub+=optCost;

  var sysType='';var sysEl=_id('ca-sys');if(sysEl)sysType=sysEl.value||'';
  var svc='200';var svcEl=_id('ca-svc');if(svcEl)svc=svcEl.value||'200';
  var svcF=(svc==='400')?'400A':'200A';

  var labItem=findLabor(svcF);var labRate=labItem?labItem.c:0.65;var labTot=labRate*sysW;
  var lc=_id('cc-labor'),lt=_id('cv-labor'),lq=_id('lb-qty'),ld=_id('lb-desc');
  if(lc)lc.innerHTML=sysW>0?'$'+labRate+'/W':'<span class="zero">$0</span>';
  if(lt)lt.innerHTML=labTot>0?fm(labTot):'<span class="zero">$0</span>';
  if(lq)lq.textContent=sysW>0?sysW.toLocaleString()+'W':'\u2014';
  if(ld)ld.textContent=sysKw>0?sysKw.toFixed(1)+'kW @ $'+labRate+'/W ('+svcF+')':'Auto';
  setRowHv('rw-labor',labTot);sub+=labTot;

  var bKwh=0,bKw=0,battPkgName='';

  if(sysType==='tesla'||sysType==='battonly'){
    var tpkgEl=_id('cs-tpkg');var tpkgId=tpkgEl?(parseInt(tpkgEl.value)||0):0;
    var tpkgItem=null;for(var i=0;i<D.tesla_pkgs.length;i++){if(D.tesla_pkgs[i].id===tpkgId){tpkgItem=D.tesla_pkgs[i];break;}}
    var tpkgCost=tpkgItem?tpkgItem.c:0;if(tpkgItem){bKwh=tpkgItem.kwh;bKw=tpkgItem.kw;battPkgName=tpkgItem.d;}
    setCell('cc-tpkg',tpkgCost);setCell('cv-tpkg',tpkgCost);setRowHv('rw-tpkg',tpkgCost);sub+=tpkgCost;
    var infoEl=_id('tpkg-info');if(infoEl){if(tpkgItem){infoEl.textContent=tpkgItem.kwh+'kWh | '+tpkgItem.kw+'kW | '+tpkgItem.a+'A | '+tpkgItem.batt+' batt';infoEl.style.color='var(--bl)';}else{infoEl.textContent='Select above';infoEl.style.color='var(--tx3)';}}
    // Stacking kit — show only when 2+ batteries
    var battTotal=tpkgItem?tpkgItem.batt||0:0;
    var stackQty=Math.floor(battTotal/2);
    var stackRow=_id('rw-tstack');var stackCb=_id('cb-tstack');var stackLabel=_id('tstack-label');var stackQtyEl=_id('tstack-qty');
    if(stackRow){
      if(battTotal>=2){
        stackRow.style.display='';
        if(stackLabel)stackLabel.textContent='Stacking Kit ($'+D.comp.tesla_exp_stack.c+'/ea \u00D7 '+stackQty+')';
        if(stackQtyEl)stackQtyEl.textContent=stackQty;
        if(stackCb&&stackCb.checked){
          var stackCost=wTax(D.comp.tesla_exp_stack.c*stackQty);
          setCell('cc-tstack',stackCost);setCell('cv-tstack',stackCost);setRowHv('rw-tstack',stackCost);sub+=stackCost;
        }else{setCell('cc-tstack',0);setCell('cv-tstack',0);setRowHv('rw-tstack',0);}
      }else{stackRow.style.display='none';setCell('cc-tstack',0);setCell('cv-tstack',0);setRowHv('rw-tstack',0);if(stackCb)stackCb.checked=false;}
    }
    // Rapid Shutdown (MCI/RSD) — needed when battery >5ft from panel, 1 per project
    var rsdCb=_id('cb-trsd');var rsdRow=_id('rw-trsd');
    if(rsdCb&&rsdCb.checked){
      var rsdCost=wTax(D.comp.tesla_rsd.c);
      var rsdQtyEl=_id('trsd-qty');if(rsdQtyEl)rsdQtyEl.textContent='1';
      setCell('cc-trsd',rsdCost);setCell('cv-trsd',rsdCost);setRowHv('rw-trsd',rsdCost);sub+=rsdCost;
    }else{setCell('cc-trsd',0);setCell('cv-trsd',0);setRowHv('rw-trsd',0);}
    var battCount=tpkgItem?tpkgItem.batt:0;var tLabItem=findTeslaLabor(battCount,svcF);var tlabCost=tLabItem?tLabItem.c:0;
    var tln=_id('tlab-name');if(tln)tln.textContent=tLabItem?tLabItem.d:'auto';
    setCell('cc-tlabor',tlabCost);setCell('cv-tlabor',tlabCost);setRowHv('rw-tlabor',tlabCost);sub+=tlabCost;
    // Bollards checkbox
    var bollCb=_id('cb-bollards');
    if(bollCb&&bollCb.checked){var bollUnitCost=(D.bollards&&D.bollards.length>0)?D.bollards[0].c:500;var bollQtyEl=_id('cs-bollards-qty');var bollQty=bollQtyEl?parseInt(bollQtyEl.value)||1:1;var bollCost=bollUnitCost*bollQty;setCell('cc-bollards',bollCost);setCell('cv-bollards',bollCost);setRowHv('rw-bollards',bollCost);sub+=bollCost;
    }else{setCell('cc-bollards',0);setCell('cv-bollards',0);setRowHv('rw-bollards',0);}
    // Smoke detector checkbox
    var smokeCb=_id('cb-smokedet');
    if(smokeCb&&smokeCb.checked){var smokeCost=(D.smoke_det&&D.smoke_det.length>0)?D.smoke_det[0].c:500;setCell('cc-smokedet',smokeCost);setCell('cv-smokedet',smokeCost);setRowHv('rw-smokedet',smokeCost);sub+=smokeCost;
    }else{setCell('cc-smokedet',0);setCell('cv-smokedet',0);setRowHv('rw-smokedet',0);}

    var ccAddonCb=_id('cb-cc-addon');var ccAddonCost=0;
    if(ccAddonCb&&ccAddonCb.checked){var ccFeetSel=_id('cs-cc-feet');var ccFeet=ccFeetSel?parseFloat(ccFeetSel.value)||0:0;if(ccFeet===0){var ccFtWarn=_id('cc-ev-warn');if(!ccFtWarn){var warnDiv=document.createElement('div');warnDiv.id='cc-ev-warn';warnDiv.style='color:#e55;font-size:10px;margin-top:2px';warnDiv.textContent='⚠ Select distance';var ccRow=_id('rw-cc-addon');if(ccRow)ccRow.appendChild(warnDiv);}else{ccFtWarn.style.display='block';}}else{var ccFtWarn=_id('cc-ev-warn');if(ccFtWarn)ccFtWarn.style.display='none';}var ccBase=D.cfg.cc_addon_base||600;var ccPerFt=D.cfg.cc_perfoot||30;var ccFree=D.cfg.cc_free_feet||5;var ccExtraFt=Math.max(0,ccFeet-ccFree);ccAddonCost=ccBase+(ccExtraFt*ccPerFt);setCell('cc-cc-addon',ccAddonCost);setCell('cv-cc-addon',ccAddonCost);setRowHv('rw-cc-addon',ccAddonCost);sub+=ccAddonCost;}else if(_id('cc-cc-addon')){setCell('cc-cc-addon',0);setCell('cv-cc-addon',0);setRowHv('rw-cc-addon',0);}
    if(sysType==='carcharger'){var ccFeetSa=_id('cs-cc-feet-sa');var ccFeetVal=ccFeetSa?parseFloat(ccFeetSa.value)||5:5;var ccSaBase=D.cfg.cc_standalone_base||1100;var ccPerFtSa=D.cfg.cc_perfoot||30;var ccFreeSa=D.cfg.cc_free_feet||5;var ccExtraFtSa=Math.max(0,ccFeetVal-ccFreeSa);var ccContractorCost=ccSaBase+(ccExtraFtSa*ccPerFtSa);setCell('cc-cc-sa',ccContractorCost);setCell('cv-cc-sa',ccContractorCost);setRowHv('rw-cc-sa',ccContractorCost);sub+=ccContractorCost;var ccProfit=D.cfg.cc_owner_profit||1000;var ccProfitDisp=_id('ci-cc-profit-display');if(ccProfitDisp)ccProfitDisp.textContent=fm(ccProfit);setCell('cv-cc-profit',ccProfit);setRowHv('rw-cc-profit',ccProfit);sub+=ccProfit;}

  }
  if(sysType==='enphase'){
    // Enphase IQ Battery 5P
    var e5pEl=_id('cs-e5ppkg');var e5pId=e5pEl?(parseInt(e5pEl.value)||0):0;
    var e5pItem=null;for(var i=0;i<D.enphase_5p_pkgs.length;i++){if(D.enphase_5p_pkgs[i].id===e5pId){e5pItem=D.enphase_5p_pkgs[i];break;}}
    var e5pCost=e5pItem?e5pItem.c:0;if(e5pItem){bKwh=e5pItem.kwh;bKw=e5pItem.kw;battPkgName=e5pItem.d;}
    setCell('cc-e5ppkg',e5pCost);setCell('cv-e5ppkg',e5pCost);setRowHv('rw-e5ppkg',e5pCost);sub+=e5pCost;
    var e5pInfo=_id('e5ppkg-info');if(e5pInfo){if(e5pItem){e5pInfo.textContent=e5pItem.kwh+'kWh | '+e5pItem.kw+'kW | '+e5pItem.batt+' batt | '+(e5pItem.comb==='c5c'?'Combiner 5C (Cellular)':'Combiner 5 (WiFi/Eth)');e5pInfo.style.color='var(--bl)';}else{e5pInfo.textContent='Select package above';e5pInfo.style.color='var(--tx3)';}}
    var e5pBattCount=e5pItem?e5pItem.batt:0;
    var e5pLabItem=null;for(var i=0;i<D.enphase_5p_labor.length;i++){if(D.enphase_5p_labor[i].batt===e5pBattCount){e5pLabItem=D.enphase_5p_labor[i];break;}}
    var e5pLabCost=e5pLabItem?e5pLabItem.c:0;
    var e5pln=_id('e5plab-name');if(e5pln)e5pln.textContent=e5pLabItem?e5pLabItem.d:'auto';
    setCell('cc-e5plabor',e5pLabCost);setCell('cv-e5plabor',e5pLabCost);setRowHv('rw-e5plabor',e5pLabCost);sub+=e5pLabCost;
    var bollCb=_id('cb-bollards');if(bollCb&&bollCb.checked){var buc=(D.bollards&&D.bollards.length>0)?D.bollards[0].c:500;var bqEl=_id('cs-bollards-qty');var bq=bqEl?parseInt(bqEl.value)||1:1;var bc=buc*bq;setCell('cc-bollards',bc);setCell('cv-bollards',bc);setRowHv('rw-bollards',bc);sub+=bc;}else{setCell('cc-bollards',0);setCell('cv-bollards',0);setRowHv('rw-bollards',0);}
    var smokeCb=_id('cb-smokedet');if(smokeCb&&smokeCb.checked){var sc=(D.smoke_det&&D.smoke_det.length>0)?D.smoke_det[0].c:500;setCell('cc-smokedet',sc);setCell('cv-smokedet',sc);setRowHv('rw-smokedet',sc);sub+=sc;}else{setCell('cc-smokedet',0);setCell('cv-smokedet',0);setRowHv('rw-smokedet',0);}
    var ccAddonCb=_id('cb-cc-addon');if(ccAddonCb&&ccAddonCb.checked){var ccFt=parseFloat((_id('cs-cc-feet')||{}).value)||0;var ccBase=D.cfg.cc_addon_base||600;var ccPerFt=D.cfg.cc_perfoot||30;var ccFree=D.cfg.cc_free_feet||5;var ccExFt=Math.max(0,ccFt-ccFree);var ccC=ccBase+(ccExFt*ccPerFt);setCell('cc-cc-addon',ccC);setCell('cv-cc-addon',ccC);setRowHv('rw-cc-addon',ccC);sub+=ccC;}else if(_id('cc-cc-addon')){setCell('cc-cc-addon',0);setCell('cv-cc-addon',0);setRowHv('rw-cc-addon',0);}
  }
  if(sysType==='franklin'){
    // FranklinWH aPower
    var fwhPkgEl=_id('cs-fwhpkg');var fwhPkgVal=fwhPkgEl?fwhPkgEl.value:'';
    var fwhItem=null;
    if(fwhPkgVal){
      var fwhParts=fwhPkgVal.split('-');var fwhType2=fwhParts[0];var fwhId2=parseInt(fwhParts[1])||0;
      var fwhArr=(fwhType2==='aps')?D.franklin_aps_pkgs:D.franklin_ap2_pkgs;
      for(var i=0;i<fwhArr.length;i++){if(fwhArr[i].id===fwhId2){fwhItem=fwhArr[i];break;}}
    }
    var fwhCost=fwhItem?fwhItem.c:0;if(fwhItem){bKwh=fwhItem.kwh;bKw=fwhItem.kw;battPkgName=fwhItem.d;}
    setCell('cc-fwhpkg',fwhCost);setCell('cv-fwhpkg',fwhCost);setRowHv('rw-fwhpkg',fwhCost);sub+=fwhCost;
    var fwhInfo=_id('fwhpkg-info');if(fwhInfo){if(fwhItem){fwhInfo.textContent=fwhItem.kwh+'kWh | '+fwhItem.kw+'kW cont. | '+fwhItem.batt+' batt';fwhInfo.style.color='var(--bl)';}else{fwhInfo.textContent='Select package above';fwhInfo.style.color='var(--tx3)';}}
    // Adders
    var ahubCb=_id('cb-fwh-ahub');var ahubCost=0;if(ahubCb&&ahubCb.checked&&D.franklin_adders[0]){ahubCost=D.franklin_adders[0].c;}setCell('cc-fwh-ahub',ahubCost);setCell('cv-fwh-ahub',ahubCost);setRowHv('rw-fwh-ahub',ahubCost);sub+=ahubCost;
    var scCb=_id('cb-fwh-sc');var scCost=0;if(scCb&&scCb.checked&&D.franklin_adders[1]){scCost=D.franklin_adders[1].c;}setCell('cc-fwh-sc',scCost);setCell('cv-fwh-sc',scCost);setRowHv('rw-fwh-sc',scCost);sub+=scCost;
    var genModCb=_id('cb-fwh-gen');var genModCost=0;if(genModCb&&genModCb.checked&&D.franklin_adders[2]){genModCost=D.franklin_adders[2].c;}setCell('cc-fwh-gen',genModCost);setCell('cv-fwh-gen',genModCost);setRowHv('rw-fwh-gen',genModCost);sub+=genModCost;
    // Labor — use Enphase 5P labor by batt count as proxy
    var fwhBattCount=fwhItem?fwhItem.batt:0;
    var fwhLabItem=null;for(var i=0;i<D.enphase_5p_labor.length;i++){if(D.enphase_5p_labor[i].batt===fwhBattCount){fwhLabItem=D.enphase_5p_labor[i];break;}}
    if(!fwhLabItem&&D.enphase_5p_labor.length>0)fwhLabItem=D.enphase_5p_labor[D.enphase_5p_labor.length-1];
    var fwhLabCost=fwhLabItem?fwhLabItem.c:0;
    var fwhln=_id('fwhlab-name');if(fwhln)fwhln.textContent=fwhLabItem?fwhLabItem.d:'auto';
    setCell('cc-fwhlabor',fwhLabCost);setCell('cv-fwhlabor',fwhLabCost);setRowHv('rw-fwhlabor',fwhLabCost);sub+=fwhLabCost;
    var bollCb=_id('cb-bollards');if(bollCb&&bollCb.checked){var buc=(D.bollards&&D.bollards.length>0)?D.bollards[0].c:500;var bqEl=_id('cs-bollards-qty');var bq=bqEl?parseInt(bqEl.value)||1:1;var bc=buc*bq;setCell('cc-bollards',bc);setCell('cv-bollards',bc);setRowHv('rw-bollards',bc);sub+=bc;}else{setCell('cc-bollards',0);setCell('cv-bollards',0);setRowHv('rw-bollards',0);}
    var smokeCb=_id('cb-smokedet');if(smokeCb&&smokeCb.checked){var sc=(D.smoke_det&&D.smoke_det.length>0)?D.smoke_det[0].c:500;setCell('cc-smokedet',sc);setCell('cv-smokedet',sc);setRowHv('rw-smokedet',sc);sub+=sc;}else{setCell('cc-smokedet',0);setCell('cv-smokedet',0);setRowHv('rw-smokedet',0);}
    var ccAddonCb=_id('cb-cc-addon');if(ccAddonCb&&ccAddonCb.checked){var ccFt=parseFloat((_id('cs-cc-feet')||{}).value)||0;var ccBase=D.cfg.cc_addon_base||600;var ccPerFt=D.cfg.cc_perfoot||30;var ccFree=D.cfg.cc_free_feet||5;var ccExFt=Math.max(0,ccFt-ccFree);var ccC=ccBase+(ccExFt*ccPerFt);setCell('cc-cc-addon',ccC);setCell('cv-cc-addon',ccC);setRowHv('rw-cc-addon',ccC);sub+=ccC;}else if(_id('cc-cc-addon')){setCell('cc-cc-addon',0);setCell('cv-cc-addon',0);setRowHv('rw-cc-addon',0);}
  }
  if(sysType==='solaronly'){
    var sinvEl=_id('cs-sinv');var sinvId=sinvEl?(parseInt(sinvEl.value)||0):0;var sinvCost=0;
    if(sinvId){for(var i=0;i<D.string_inv.length;i++){if(D.string_inv[i].id===sinvId){sinvCost=wTax(D.string_inv[i].c);break;}}}
    var sinvQ=_id('cq-sinv');var sinvQty=sinvQ?(parseFloat(sinvQ.value)||0):1;var sinvTot=sinvCost*sinvQty;
    setCell('cc-sinv',sinvCost);setCell('cv-sinv',sinvTot);setRowHv('rw-sinv',sinvTot);sub+=sinvTot;
  }

  var permEl=_id('cs-permits');var permId=permEl?(parseInt(permEl.value)||0):0;var permCost=0;
  if(permId){for(var i=0;i<D.permits.length;i++){if(D.permits[i].id===permId){permCost=D.permits[i].c;break;}}}
  var permQ=_id('cq-permits');var permQty=permQ?(parseFloat(permQ.value)||0):1;var permTot=permCost*permQty;
  setCell('cc-permits',permCost);setCell('cv-permits',permTot);setRowHv('rw-permits',permTot);sub+=permTot;

  var ssItem=(D.sitesurvey.length>0)?D.sitesurvey[0]:null;var ssCost=ssItem?ssItem.c:0;
  setCell('cc-sitesurvey',ssCost);setCell('cv-sitesurvey',ssCost);setRowHv('rw-sitesurvey',ssCost);sub+=ssCost;

  var nemEl=_id('cs-xnem');var nemId=nemEl?(parseInt(nemEl.value)||0):0;var nemCost=0;
  if(nemId){for(var i=0;i<D.nem.length;i++){if(D.nem[i].id===nemId){nemCost=D.nem[i].c;break;}}}
  var nemQ=_id('cq-xnem');var nemQty=nemQ?(parseFloat(nemQ.value)||0):1;var nemTot=nemCost*nemQty;
  setCell('cc-xnem',nemCost);setCell('cv-xnem',nemTot);setRowHv('rw-xnem',nemTot);sub+=nemTot;

  var faviItem=(D.favi.length>0)?D.favi[0]:null;var faviCost=(faviEnabled&&faviItem)?faviItem.c:0;
  setCell('cc-favi',faviCost);setCell('cv-favi',faviCost);setRowHv('rw-favi',faviCost);
  var faviRow=_id('rw-favi');if(faviRow)faviRow.style.opacity=faviEnabled?'1':'0.35';
  sub+=faviCost;

  var offItem=(D.office.length>0)?D.office[0]:null;var offCost=(officeEnabled&&offItem)?offItem.c:0;
  setCell('cc-office',offCost);setCell('cv-office',offCost);setRowHv('rw-office',offCost);
  var offRow=_id('rw-office');if(offRow)offRow.style.opacity=officeEnabled?'1':'0.35';
  sub+=offCost;

  for(var i=0;i<activeAddons.length;i++){
    var key=activeAddons[i];var catEntry=null;
    for(var j=0;j<ADDON_CATALOG.length;j++){if(ADDON_CATALOG[j].key===key){catEntry=ADDON_CATALOG[j];break;}}
    if(!catEntry)continue;
    if(catEntry.dbKey===null){var miscQ=_id('cq-'+key);var miscCost=miscQ?(parseFloat(miscQ.value)||0):0;setCell('cc-'+key,miscCost);setCell('cv-'+key,miscCost);setRowHv('rw-'+key,miscCost);sub+=miscCost;}
    else if(catEntry.pw){var sel=_id('cs-'+key);if(sel){var selId=parseInt(sel.value)||0;var cpw=0;if(selId){var src=D[catEntry.dbKey]||[];for(var xi=0;xi<src.length;xi++){if(src[xi].id===selId){cpw=src[xi].c||0;break;}}}var tot=cpw*sysW;var costEl=_id('cc-'+key);if(costEl)costEl.innerHTML=cpw>0?'$'+cpw+'/W':'<span class="zero">$0</span>';setCell('cv-'+key,tot);setRowHv('rw-'+key,tot);sub+=tot;}}
    else{var sel=_id('cs-'+key);var qty=_id('cq-'+key);if(sel){var selId=parseInt(sel.value)||0;var cost=0;var q=qty?(parseFloat(qty.value)||0):1;if(selId){var src=D[catEntry.dbKey]||[];for(var xi=0;xi<src.length;xi++){if(src[xi].id===selId){cost=catEntry.tax?wTax(src[xi].c||0):(src[xi].c||0);break;}}}var tot=cost*q;setCell('cc-'+key,cost);setCell('cv-'+key,tot);setRowHv('rw-'+key,tot);sub+=tot;}}
  }

  // Financing
  var sale=0;
  var saleEl=_id('ca-si');if(saleEl)sale=parseFloat(saleEl.value)||0;
  var finRate=0,sacRate=0;
  var hasFin=false,hasSac=false;
  for(var i=0;i<activeLoans.length;i++){if(activeLoans[i]==='fin')hasFin=true;if(activeLoans[i]==='sac')hasSac=true;}
  if(hasFin){
    var finId=0;var finEl=_id('cs-fin');if(finEl)finId=parseInt(finEl.value)||0;
    var finIt=null;for(var i=0;i<D.financing.length;i++){if(D.financing[i].id===finId){finIt=D.financing[i];break;}}
    finRate=finIt?finIt.c:0;
    var el=_id('cc-finp');if(el)el.textContent=fp(finRate);
    var finFee=sale*finRate;el=_id('cv-fin');if(el)el.innerHTML=finFee>0?fm(finFee):'<span class="zero">$0</span>';
  }
  if(hasSac){
    var sacId=0;var sacEl=_id('cs-sac');if(sacEl)sacId=parseInt(sacEl.value)||0;
    var sacIt=null;for(var i=0;i<D.samecash.length;i++){if(D.samecash[i].id===sacId){sacIt=D.samecash[i];break;}}
    sacRate=sacIt?sacIt.c:0;
    var el=_id('cc-sacp');if(el)el.textContent=fp(sacRate);
    var sacFee=sale*sacRate;el=_id('cv-sac');if(el)el.innerHTML=sacFee>0?fm(sacFee):'<span class="zero">$0</span>';
  }

  var totalFinRate=finRate+sacRate;
  var finFeeTotal=sale*totalFinRate;var finTot=sale+finFeeTotal;
  // Monthly payment using Salal factor
  var monthlyPay=0;var finFactor=0;var finTerm=0;
  if(hasFin&&finIt&&finIt.f1>0){finFactor=finIt.f1;finTerm=finIt.term;monthlyPay=finTot*finIt.f1;}
  else if(hasSac&&sacIt&&sacIt.f1>0){finFactor=sacIt.f1;finTerm=sacIt.term;monthlyPay=finTot*sacIt.f1;}
  var moEl=_id('sp-mo');if(moEl)moEl.textContent=monthlyPay>0?fm(monthlyPay)+'/mo':'—';
  var moTermEl=_id('sp-moterm');if(moTermEl)moTermEl.textContent=finTerm>0?(finTerm+' months'):'';
  sub+=finFeeTotal;
  var dep=0;var depEl=_id('ca-di');if(depEl)dep=parseFloat(depEl.value)||0;
  // Sync sidebar deposit display
  var depR=_id('ca-dep-r');if(depR&&document.activeElement!==depR)depR.value=dep;
  var bal=sale-dep;
  var costPW=sysW>0?sub/sysW:0;var retPW=sysW>0?sale/sysW:0;var margin=sale-sub;
  var fed=D.cfg.fed;

  var el;
  el=_id('sp-sp');if(el)el.textContent=fm(sale);
  el=_id('sp-bl');if(el)el.textContent=fm(bal);
  el=_id('sp-wf');if(el)el.textContent=fm(finTot);

  // Cash split: sale - deposit - tax credit
  var cashTaxCredit=sale*fed;
  var cashNet=sale-dep-cashTaxCredit;
  el=_id('cs-p');if(el)el.textContent=(fed*100).toFixed(0);
  el=_id('cs-s');if(el)el.textContent=fm(sale);
  el=_id('cs-dep');if(el)el.textContent=dep>0?'-'+fm(dep):'$0.00';
  el=_id('cs-t');if(el)el.textContent=cashTaxCredit>0?'-'+fm(cashTaxCredit):'$0.00';
  // Hide tax credit row if 0%
  var csFedRow=_id('cs-fed-row');if(csFedRow)csFedRow.style.display=fed>0?'flex':'none';
  el=_id('cs-n');if(el)el.textContent=fm(cashNet);

  // Finance split: finTot - deposit - tax credit on finTot
  var finTaxCredit=finTot*fed;
  var finNet=finTot-dep-finTaxCredit;
  el=_id('fs-p');if(el)el.textContent=(fed*100).toFixed(0);
  el=_id('fs-s');if(el)el.textContent=fm(finTot);
  el=_id('fs-dep');if(el)el.textContent=dep>0?'-'+fm(dep):'$0.00';
  el=_id('fs-t');if(el)el.textContent=finTaxCredit>0?'-'+fm(finTaxCredit):'$0.00';
  var fsFedRow=_id('fs-fed-row');if(fsFedRow)fsFedRow.style.display=fed>0?'flex':'none';
  el=_id('fs-n');if(el)el.textContent=fm(finNet);
  // System specs panel
  var sysNames={tesla:'Tesla System',enphase:'Enphase System',franklin:'Franklin System',solaronly:'Solar Only',battonly:'Battery Only'};
  el=_id('ps-sys');if(el)el.textContent=sysNames[sysType]||'\u2014';
  el=_id('ps-pan');if(el)el.textContent=pIt?pIt.d:'\u2014';
  el=_id('ps-qty');if(el)el.textContent=(pQ>0)?pQ+' panels \u2022 '+sysKw.toFixed(2)+' kW':'\u2014';
  el=_id('ps-bat');if(el)el.textContent=battPkgName||'\u2014';
  el=_id('ps-sto');if(el)el.textContent=bKwh>0?bKwh+' kWh \u2022 '+bKw+' kW':'\u2014';
  el=_id('ps-opt');if(el)el.textContent=optItem?optItem.d:'\u2014';
  el=_id('ps-rk');if(el)el.textContent=(dr&&pQ>0)?dr.d+' \u00D7 '+pQ:'\u2014';
  el=_id('ps-lab');if(el)el.textContent=sysW>0?'$'+labRate+'/W \u00D7 '+sysW.toLocaleString()+'W':'\u2014';
  el=_id('ps-cw');if(el)el.textContent=sysW>0?'$'+costPW.toFixed(2)+'/W':'\u2014';

  el=_id('sb-jc');if(el)el.textContent=fm(sub);el=_id('sb-wc');if(el)el.textContent=sysW>0?'$'+costPW.toFixed(2):'$0';
  el=_id('sb-wr');if(el)el.textContent=sysW>0?'$'+retPW.toFixed(2):'$0';// margin display handled in guardrail block below
  el=_id('cv-sub');if(el)el.textContent=fm(sub);

  // Color margin card red if negative
  // margin color handled in guardrail block

  // ===== SALES COMMISSION =====
  var commAmt=0;var commBreakdown='';
  var spEl=_id('cs-salesperson');
  if(spEl&&spEl.value){
    var spId=parseInt(spEl.value)||0;
    var spIt=null;for(var i=0;i<D.salesteam.length;i++){if(D.salesteam[i].id===spId){spIt=D.salesteam[i];break;}}
    if(spIt){
      var solarComm=sysKw>0?spIt.rate*sysKw:0;
      var battComm=0;var genComm=0;
      // Check if system has battery ACTUALLY SELECTED (not just system type)
      var battActuallySelected=false;
      var tpkgChk=_id('cs-tpkg');if(tpkgChk&&parseInt(tpkgChk.value)>0)battActuallySelected=true;
      var e5pChk=_id('cs-e5ppkg');if(e5pChk&&parseInt(e5pChk.value)>0)battActuallySelected=true;
      var fwhChk=_id('cs-fwhpkg');if(fwhChk&&fwhChk.value&&fwhChk.value!=='')battActuallySelected=true;
      if(battActuallySelected&&spIt.battBonus>0)battComm=spIt.battBonus;
      // Check if generator addon is active AND a generator is actually selected from dropdown
      for(var ai=0;ai<activeAddons.length;ai++){if(activeAddons[ai]==='generators'){var genSel=_id('cs-generators');if(genSel&&parseInt(genSel.value)>0&&spIt.genBonus>0)genComm=spIt.genBonus;break;}}
      commAmt=solarComm+battComm+genComm;
      // Build breakdown text
      var parts=[];
      if(solarComm>0)parts.push('$'+spIt.rate+'/kW \u00D7 '+sysKw.toFixed(1)+'kW = '+fm(solarComm));
      if(battComm>0)parts.push('Battery +'+fm(battComm));
      if(genComm>0)parts.push('Generator +'+fm(genComm));
      commBreakdown=parts.join(' | ');
      var crEl=_id('comm-rate');if(crEl)crEl.innerHTML=commBreakdown||'\u2014';
      var ckEl=_id('comm-kw');if(ckEl)ckEl.textContent='';
    }
  }else{var crEl=_id('comm-rate');if(crEl)crEl.textContent='\u2014';}
  setCell('cv-commission',commAmt);setRowHv('rw-commission',commAmt);
  var commBtn=_id('btn-comm');if(commBtn)commBtn.style.display=commAmt>0?'block':'none';
  sub+=commAmt;
  // Update Total Job Cost to include commission
  var subEl=_id('cv-sub');if(subEl)subEl.textContent=fm(sub);

  // ===== MARGIN GUARDRAILS + DEAL COMPARISON =====
  var dealerFeeAmt=sale*totalFinRate;
  var finSaleTotal=sale+dealerFeeAmt;
  
  // Cash deal: margin = sale - jobCost
  var cashMargin=sale>0?(sale-sub):0;
  var cashPct=sale>0?(cashMargin/sale*100):0;
  
  // Financed deal: margin = (sale + dealerFee) - jobCost  
  var finMargin=sale>0?(finSaleTotal-sub):0;
  var finPct=finSaleTotal>0?(finMargin/finSaleTotal*100):0;
  
  // Use financed margin if financing is active, otherwise cash
  var activeMargin=totalFinRate>0?finMargin:cashMargin;
  var activePct=totalFinRate>0?finPct:cashPct;
  
  // Update margin stat card
  var mgEl=_id('sb-mg');
  if(mgEl){mgEl.innerHTML=fm(activeMargin)+'<div style="font-size:13px;margin-top:2px">'+activePct.toFixed(1)+'%</div>';}
  
  // Update Cash card
  var el;
  el=_id('dc-sale');if(el)el.textContent=fm(sale);
  el=_id('dc-cost');if(el)el.textContent=fm(sub);
  el=_id('dc-margin');if(el)el.textContent=fm(cashMargin);
  el=_id('dc-pct');if(el)el.textContent=cashPct.toFixed(1)+'%';
  
  // Update Financed card
  el=_id('df-sale');if(el)el.textContent=fm(finSaleTotal);
  el=_id('df-cost');if(el)el.textContent=fm(sub);
  el=_id('df-fee');if(el)el.textContent=totalFinRate>0?(totalFinRate*100).toFixed(1)+'% = '+fm(dealerFeeAmt):'No financing';
  el=_id('df-margin');if(el)el.textContent=fm(finMargin);
  el=_id('df-pct');if(el)el.textContent=finPct.toFixed(1)+'%';
  el=_id('df-monthly');if(el)el.textContent=monthlyPay>0?fm(monthlyPay)+'/mo':'—';
  
  // Guardrails - check both independently
  var warnEl=_id('ca-warn');
  var blocked=false;
  var minMg=D.cfg.minMargin||0;var maxMg=D.cfg.maxMargin||0;
  if(sysType==='carcharger'){minMg=0;maxMg=0;}
  
  // Cash status
  var cashStatus='';var cashOk=true;
  if(sale>0&&sub>0&&minMg>0&&cashPct<minMg){cashStatus='\u26D4 Below '+minMg+'%';cashOk=false;}
  else if(sale>0&&sub>0&&maxMg>0&&cashPct>maxMg){cashStatus='\u26A0 Above '+maxMg+'%';cashOk=false;}
  else if(sale>0){cashStatus='\u2705 Approved';}
  el=_id('dc-status');if(el){el.textContent=cashStatus;el.style.color='#fff';el.style.background=cashOk?'#15803d':'#b91c1c';el.style.fontSize='15px';el.style.fontWeight='700';el.style.padding='6px 12px';el.style.borderRadius='6px';el.style.textAlign='center';}
  el=_id('dc-pct');if(el)el.style.color=(cashMargin<0)?'#b91c1c':'#15803d';
  el=_id('dc-margin');if(el)el.style.color=(cashMargin<0)?'#b91c1c':'#15803d';
  var cashCard=_id('deal-cash');if(cashCard)cashCard.style.borderColor=cashOk?'var(--gn)':'var(--rd)';
  
  // Financed status
  var finStatus='';var finOk=true;
  if(totalFinRate>0&&sale>0&&sub>0){
    if(minMg>0&&finPct<minMg){finStatus='\u26D4 Below '+minMg+'%';finOk=false;}
    else if(maxMg>0&&finPct>maxMg){finStatus='\u26A0 Above '+maxMg+'%';finOk=false;}
    else{finStatus='\u2705 Approved';}
  }else{finStatus='No financing selected';}
  el=_id('df-status');if(el){el.textContent=finStatus;if(totalFinRate>0){el.style.color='#fff';el.style.background=finOk?'var(--bl)':'#b91c1c';}else{el.style.color='var(--tx3)';el.style.background='var(--bg)';}el.style.fontSize='15px';el.style.fontWeight='700';el.style.padding='6px 12px';el.style.borderRadius='6px';}
  el=_id('df-pct');if(el)el.style.color=(finMargin<0)?'#b91c1c':'var(--bl)';
  el=_id('df-margin');if(el)el.style.color=(finMargin<0)?'#b91c1c':'var(--bl)';
  var finCard=_id('deal-fin');if(finCard)finCard.style.borderColor=totalFinRate>0?(finOk?'var(--bl)':'var(--rd)'):'var(--bd)';
  
  // Lease calculation
  var hasLease=false;for(var lci=0;lci<activeLoans.length;lci++){if(activeLoans[lci]==='lease')hasLease=true;}
  var leaseTotal=hasLease?sale:0;
  var leaseMonthlyEl=_id('ca-lease-monthly');var leaseMonthly=leaseMonthlyEl?parseFloat(leaseMonthlyEl.value.replace(/[^0-9.]/g,''))||0:0;
  var leaseMargin=leaseTotal-sub;var leasePct=leaseTotal>0?(leaseMargin/leaseTotal*100):0;
  el=_id('dl-sale');if(el)el.textContent=fm(sale);
  el=_id('dl-cost');if(el)el.textContent=fm(sub);
  el=_id('dl-margin');if(el){el.textContent=fm(leaseMargin);el.style.color=leaseMargin>=0?'#8b5cf6':'#b91c1c';}
  el=_id('dl-pct');if(el){el.textContent=leasePct.toFixed(1)+'%';el.style.color=leaseMargin>=0?'#8b5cf6':'#b91c1c';}
  var leaseOk=true;var leaseStatus='';
  if(leaseTotal>0&&sub>0&&minMg>0&&leasePct<minMg){leaseStatus='&#x26D4; Below '+minMg+'%';leaseOk=false;}
  else if(leaseTotal>0&&sub>0&&maxMg>0&&leasePct>maxMg){leaseStatus='&#x26A0; Above '+maxMg+'%';leaseOk=false;}
  else if(leaseTotal>0){leaseStatus='&#x2705; Approved';}
  el=_id('dl-status');if(el){el.textContent=leaseStatus;el.style.color='#fff';el.style.background=leaseOk?'#8b5cf6':'#b91c1c';el.style.fontSize='15px';el.style.fontWeight='700';el.style.padding='6px 12px';el.style.borderRadius='6px';el.style.textAlign='center';}
  el=_id('dl-monthly');if(el)el.textContent=leaseMonthly>0?fm(leaseMonthly)+'/mo':'$0/mo';
  var leaseSection=_id('lease-section');if(leaseSection)leaseSection.style.display=hasLease?'':'none';
  var leaseCard=_id('deal-lease');if(leaseCard)leaseCard.style.borderColor=leaseTotal>0?(leaseOk?'#8b5cf6':'#b91c1c'):'var(--bd)';

  // Main warning - only block if BOTH are bad (or the active one is bad)
  if(warnEl){
    var blockMsg='';
    var activeOk=totalFinRate>0?finOk:cashOk;
    if(!cashOk&&(totalFinRate===0)){
      var minSale=sub/(1-(minMg/100));
      // Calculate min $/watt for lease if applicable
      var minPPWLine='';
      var hasLeasePPW=_id('ca-lease-ppw');
      if(hasLeasePPW){
        var qty=parseFloat((_id('cq-panels')?_id('cq-panels').value:0))||0;
        var panelSel=_id('cs-panels');var panelW=0;
        if(panelSel&&panelSel.value){for(var pi=0;pi<D.panels.length;pi++){if(String(D.panels[pi].id)===String(panelSel.value)){panelW=D.panels[pi].w||0;break;}}}
        var totalW=qty*panelW;
        if(totalW>0){var minPPW=minSale/totalW;minPPWLine='<br>Minimum $/watt: <b>$'+minPPW.toFixed(2)+'/W</b>';}
      }
      blockMsg='<div style="background:#b91c1c;color:#fff;border-radius:var(--r);padding:18px 22px;margin:8px 0;font-size:14px;line-height:1.7;display:flex;gap:12px;align-items:flex-start;box-shadow:0 4px 20px rgba(185,28,28,.3)">'
        +'<span style="font-size:28px;flex-shrink:0">\u26D4</span>'
        +'<div><b style="font-size:16px;display:block;margin-bottom:4px">MARGIN TOO LOW</b>'
        +'Cash margin is <b>'+cashPct.toFixed(1)+'%</b> ('+fm(cashMargin)+') — minimum is <b>'+minMg+'%</b><br>'
        +'Minimum sale: <b>'+fm(minSale)+'</b>'+minPPWLine+' or add financing to improve margin.'
        +'</div></div>';
      blocked=true;
    }
    if(blocked){warnEl.innerHTML=blockMsg;}else{warnEl.innerHTML='';}
    
    // Margin stat card color
    var mgCard=mgEl?mgEl.closest('.sc'):null;
    if(mgEl)mgEl.style.color=activeOk?'var(--gn)':'var(--rd)';
    if(mgCard){mgCard.style.borderColor=activeOk?'':'var(--rd)';mgCard.style.boxShadow=activeOk?'':'0 0 20px rgba(220,38,38,.25)';}
  }
}

// ===== PDF GENERATION =====


// ===== PROJECT STORAGE =====
var PROJ_KEY='solar_pro_projects';
var PROJ_EXPIRY_DAYS=120; // 4 months
var PROJ_WARN_DAYS=14; // warn 2 weeks before expiry

function getProjects(){
  try{var raw=localStorage.getItem(PROJ_KEY);if(!raw)return [];var arr=JSON.parse(raw);
  // Auto-delete expired
  var now=Date.now();var kept=[];
  for(var i=0;i<arr.length;i++){if(arr[i].expires>now)kept.push(arr[i]);}
  if(kept.length!==arr.length)localStorage.setItem(PROJ_KEY,JSON.stringify(kept));
  return kept;}catch(e){return [];}
}
function saveProjects(arr){try{localStorage.setItem(PROJ_KEY,JSON.stringify(arr));}catch(e){toast('Storage full - delete old projects');}}

function captureFormState(){
  var state={};
  // Text/number inputs
  var textIds=['ca-cust','ca-phone','ca-addr','ca-email','ca-cobuyer','ca-date','ca-desc','ca-notes','ca-si','ca-di','ca-fed','ca-lease-total','ca-lease-monthly','ca-lease-ppw','ca-pd-id','ca-aurora-id','ca-aurora-layout-url','ca-bill-avg','ca-bill-annual-kwh','ca-bill-rate','ca-bill-monthly-json','ca-bill-source'];
  for(var i=0;i<textIds.length;i++){var el=_id(textIds[i]);if(el)state[textIds[i]]=el.value;}
  // Selects
  var selIds=['ca-sys','ca-svc','ca-jur','cs-panels','cs-sinv','cs-tpkg','cs-permits','cs-xnem','cs-salesperson','cs-dep','cs-cc-feet','cs-cc-feet-sa'];
  for(var i=0;i<selIds.length;i++){var el=_id(selIds[i]);if(el)state[selIds[i]]=el.value;}
  // Quantities
  var qtyIds=['cq-panels','cq-sinv','cq-permits','cq-xnem'];
  for(var i=0;i<qtyIds.length;i++){var el=_id(qtyIds[i]);if(el)state[qtyIds[i]]=el.value;}
  // Checkboxes
  var cbIds=['cb-cobuyer','cb-bollards','cb-smokedet','cb-cc-addon','cb-tstack','cb-trsd'];
  for(var i=0;i<cbIds.length;i++){var el=_id(cbIds[i]);if(el)state[cbIds[i]]=el.checked;}
  // Active addons and loans
  state._activeAddons=activeAddons.slice();
  state._activeLoans=activeLoans.slice();
  bids[activeBidIdx].state=null;
  state._bids=JSON.parse(JSON.stringify(bids));
  state._activeBidIdx=activeBidIdx;
  state._addonState=JSON.parse(JSON.stringify(addonState));
  state._officeEnabled=officeEnabled;
  state._faviEnabled=faviEnabled;
  state._isSold=isSold;
  // Timestamp
  state._savedAt=Date.now();
  return state;
}

var _restoreToken=0;
function restoreFormState(state){
  if(!state)return;
  // Cancel any pending restore from rapid switching
  var myToken=++_restoreToken;
  // System type first (triggers rebuildRows)
  var sysEl=_id('ca-sys');
  if(sysEl&&state['ca-sys']){sysEl.value=state['ca-sys'];updateDesc();rebuildRows();}

  // Wait a tick for rows to build, then restore everything
  setTimeout(function(){
    if(myToken!==_restoreToken)return; // stale — a newer switch fired, bail out
    // Text/number inputs
    var textIds=['ca-cust','ca-phone','ca-addr','ca-email','ca-cobuyer','ca-date','ca-desc','ca-notes','ca-si','ca-di','ca-fed','ca-lease-total','ca-lease-monthly','ca-pd-id','ca-aurora-id','ca-aurora-layout-url','ca-bill-avg','ca-bill-annual-kwh','ca-bill-rate','ca-bill-monthly-json','ca-bill-source'];
    for(var i=0;i<textIds.length;i++){var el=_id(textIds[i]);if(el&&state[textIds[i]]!=null)el.value=state[textIds[i]];}
    // Selects
    var selIds=['ca-svc','ca-jur','cs-panels','cs-sinv','cs-tpkg','cs-permits','cs-xnem','cs-salesperson','cs-dep','cs-cc-feet','cs-cc-feet-sa'];
    for(var i=0;i<selIds.length;i++){var el=_id(selIds[i]);if(el&&state[selIds[i]]!=null)el.value=state[selIds[i]];}
    // Quantities
    var qtyIds=['cq-panels','cq-sinv','cq-permits','cq-xnem'];
    for(var i=0;i<qtyIds.length;i++){var el=_id(qtyIds[i]);if(el&&state[qtyIds[i]]!=null)el.value=state[qtyIds[i]];}
    // Checkboxes
    var cbIds=['cb-cobuyer','cb-bollards','cb-smokedet','cb-cc-addon','cb-tstack','cb-trsd'];
    for(var i=0;i<cbIds.length;i++){var el=_id(cbIds[i]);if(el&&state[cbIds[i]]!=null)el.checked=state[cbIds[i]];}
    // Restore addons
    if(state._activeAddons){activeAddons=state._activeAddons.slice();addonState=state._addonState?JSON.parse(JSON.stringify(state._addonState)):{};renderAddonRows();restoreAddonState();}
    if(state._activeLoans){activeLoans=state._activeLoans.slice();renderLoanRows();}
    // NOTE: do NOT restore _bids/_activeBidIdx here — switchBid already set those correctly
    if(state._officeEnabled!=null)officeEnabled=state._officeEnabled;
    if(state._faviEnabled!=null)faviEnabled=state._faviEnabled;
    if(state._isSold!=null)setSoldState(state._isSold);else setSoldState(false);
    calc();
    // Restore Aurora layout preview panel if URL was saved
    var restoredUrl=state['ca-aurora-layout-url']||'';
    var restoredAuroraId=state['ca-aurora-id']||'';
    if(restoredUrl){
      var img=_id('aurora-layout-img');if(img)img.src=restoredUrl;
      var preview=_id('aurora-layout-preview');if(preview)preview.style.display='block';
      var btnLayout=_id('btn-aurora-layout');if(btnLayout)btnLayout.style.display='block';
    }else if(restoredAuroraId){
      var btnLayout=_id('btn-aurora-layout');if(btnLayout)btnLayout.style.display='block';
    }
    if(restoredAuroraId){
      var btnAurora=_id('btn-aurora');if(btnAurora)btnAurora.textContent='✓ In Aurora — Update';
      var st=_id('aurora-status');
      if(st){st.style.display='block';st.style.background='#dcfce7';st.style.color='#166534';st.textContent='✓ Aurora ID: '+restoredAuroraId;}
    }
    // Restore utility bill display if data was saved
    restoreBillDisplay();
    // Re-render bid bar to reflect correct active tab after restore
    var wrap=_id('bid-bar-wrap');if(wrap)wrap.innerHTML=buildBidBar();
  },100);
}


function resetForm(){
  if(!confirm('Clear all fields and start fresh?'))return;
  activeAddons=[];activeLoans=[];addonState={};officeEnabled=true;faviEnabled=true;
  renderCA();
  toast('Form reset');
}

function saveProject(){
  var nameEl=_id('ca-cust');
  var name=nameEl?nameEl.value.trim():'';
  if(!name){toast('Enter customer name first');if(nameEl)nameEl.focus();return;}
  var state=captureFormState();
  var projects=getProjects();
  // Check if project with same name exists
  var existing=-1;
  for(var i=0;i<projects.length;i++){if(projects[i].name.toLowerCase()===name.toLowerCase()){existing=i;break;}}
  var sysEl=_id('ca-sys');var sysType=sysEl?sysEl.value:'';
  var sysLabels={tesla:'Tesla_System',enphase:'Enphase_System',franklin:'Franklin_System',solaronly:'Solar_Only',battonly:'Battery_Only',carcharger:'Car_Charger'};
  var sysLabel=sysLabels[sysType]||'Project';
  var proj={
    id:existing>=0?projects[existing].id:('p'+Date.now()),
    name:name,
    phone:_id('ca-phone')?_id('ca-phone').value:'',
    sysType:sysType,
    savedAt:Date.now(),
    expires:Date.now()+(PROJ_EXPIRY_DAYS*86400000),
    state:state
  };
  if(existing>=0){projects[existing]=proj;}
  else{projects.unshift(proj);}
  saveProjects(projects);
  // Download individual project file
  var safeName=name.replace(/[^a-zA-Z0-9 ]/g,'').replace(/ +/g,'_');
  var d=new Date();
  var dateStr=(d.getMonth()+1)+'-'+d.getDate()+'-'+d.getFullYear();
  var fileName=safeName+'_Pricing_'+dateStr+'.json';
  var blob=new Blob([JSON.stringify(proj,null,2)],{type:'application/json'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download=fileName;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Saved & downloaded: '+fileName);
}

function showProjectList(){
  var projects=getProjects();
  var moO=_id('moO');if(!moO)return;
  var now=Date.now();
  var warnThreshold=PROJ_WARN_DAYS*86400000;
  var h='<div style="background:#fff;border-radius:12px;width:90%;max-width:600px;max-height:80vh;overflow:hidden;display:flex;flex-direction:column">';
  h+='<div style="padding:16px 20px;border-bottom:1px solid var(--bd);display:flex;justify-content:space-between;align-items:center">';
  h+='<div style="font-weight:800;font-size:16px;color:var(--navy)">Saved Projects ('+projects.length+')</div>';
  h+='<div style="display:flex;gap:6px;align-items:center">';
  h+='<button onclick="exportProjects()" style="font-size:10px;padding:4px 8px;border:1px solid var(--gn);background:#fff;color:var(--gn);border-radius:4px;cursor:pointer;font-weight:600">&#x2B07; Export</button>';
  h+='<button onclick="showImportArea()" style="font-size:10px;padding:4px 8px;border:1px solid var(--bl);background:#fff;color:var(--bl);border-radius:4px;cursor:pointer;font-weight:600">&#x2B06; Import</button>';
  h+='<button onclick="closeM()" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--tx3)">&#x2715;</button>';
  h+='</div>';
  h+='</div>';
  h+='<div style="padding:8px 16px;border-bottom:1px solid var(--bd)"><input type="text" id="proj-search" placeholder="Search by name..." oninput="filterProjectList()" style="width:100%;padding:8px 12px;border:1px solid var(--bd);border-radius:6px;font-size:13px"></div>';
  h+='<div id="proj-list" style="overflow-y:auto;flex:1;padding:8px">';
  if(projects.length===0){
    h+='<div style="padding:40px;text-align:center;color:var(--tx3)">No saved projects</div>';
  }else{
    for(var i=0;i<projects.length;i++){
      var p=projects[i];
      var daysLeft=Math.ceil((p.expires-now)/86400000);
      var isWarning=daysLeft<=PROJ_WARN_DAYS;
      var savedDate=new Date(p.savedAt);
      var dateStr=(savedDate.getMonth()+1)+'/'+savedDate.getDate()+'/'+savedDate.getFullYear();
      var sysLabels={tesla:'Tesla',enphase:'Enphase',franklin:'Franklin',solaronly:'Solar Only',battonly:'Battery Only',carcharger:'Car Charger'};
      var sysLabel=sysLabels[p.sysType]||p.sysType||'—';
      h+='<div class="proj-item" data-name="'+p.name.toLowerCase()+'" style="padding:12px 14px;border:1px solid '+(isWarning?'#f59e0b':'var(--bd)')+';border-radius:8px;margin-bottom:6px;cursor:pointer;background:'+(isWarning?'#fffbeb':'#fff')+'" onclick="loadProject(\''+p.id+'\')">';
      h+='<div style="display:flex;justify-content:space-between;align-items:flex-start">';
      h+='<div><div style="font-weight:700;font-size:14px;color:var(--navy)">'+p.name+'</div>';
      h+='<div style="font-size:11px;color:var(--tx3);margin-top:2px">'+sysLabel+(p.phone?' \u2022 '+p.phone:'')+'</div></div>';
      h+='<div style="text-align:right"><div style="font-size:10px;color:var(--tx3)">'+dateStr+'</div>';
      if(isWarning){
        h+='<div style="font-size:10px;color:#f59e0b;font-weight:700;margin-top:2px">\u26A0 '+daysLeft+' days left</div>';
        h+='<button onclick="event.stopPropagation();extendProject(\''+p.id+'\')" style="font-size:9px;padding:2px 6px;margin-top:2px;border:1px solid #f59e0b;background:#fffbeb;color:#f59e0b;border-radius:4px;cursor:pointer;font-weight:600">+60 days</button>';
      }else{
        h+='<div style="font-size:10px;color:var(--gn);margin-top:2px">'+daysLeft+' days left</div>';
      }
      h+='</div></div>';
      h+='<div style="display:flex;gap:6px;margin-top:8px;justify-content:flex-end">';
      h+='<button onclick="event.stopPropagation();deleteProject(\''+p.id+'\')" style="font-size:10px;padding:3px 8px;border:1px solid var(--rd);background:#fff;color:var(--rd);border-radius:4px;cursor:pointer">Delete</button>';
      h+='</div></div>';
    }
  }
  h+='</div></div>';
  moO.innerHTML='<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:9999" onclick="if(event.target===this)closeM()">'+h+'</div>';
  moO.classList.add('show');
}

function filterProjectList(){
  var q=_id('proj-search');if(!q)return;
  var term=q.value.toLowerCase();
  var items=document.querySelectorAll('.proj-item');
  for(var i=0;i<items.length;i++){
    items[i].style.display=items[i].getAttribute('data-name').indexOf(term)>=0?'':'none';
  }
}

function loadProject(id){
  var projects=getProjects();
  for(var i=0;i<projects.length;i++){
    if(projects[i].id===id){
      closeM();
      restoreFormState(projects[i].state);
      toast('Loaded: '+projects[i].name);
      return;
    }
  }
  toast('Project not found');
}

function deleteProject(id){
  if(!confirm('Delete this project?'))return;
  var projects=getProjects();
  var out=[];
  for(var i=0;i<projects.length;i++){if(projects[i].id!==id)out.push(projects[i]);}
  saveProjects(out);
  showProjectList();
  toast('Project deleted');
}

function extendProject(id){
  var projects=getProjects();
  for(var i=0;i<projects.length;i++){
    if(projects[i].id===id){
      projects[i].expires+=60*86400000; // +60 days
      saveProjects(projects);
      showProjectList();
      toast('Extended by 60 days');
      return;
    }
  }
}

function checkExpiryWarnings(){
  var projects=getProjects();
  var now=Date.now();
  var warnThreshold=PROJ_WARN_DAYS*86400000;
  var warnings=[];
  for(var i=0;i<projects.length;i++){
    var daysLeft=Math.ceil((projects[i].expires-now)/86400000);
    if(daysLeft<=PROJ_WARN_DAYS&&daysLeft>0)warnings.push(projects[i].name+' ('+daysLeft+' days)');
  }
  if(warnings.length>0){
    setTimeout(function(){toast('\u26A0 Expiring soon: '+warnings.join(', '),5000);},2000);
  }
}

function exportProjects(){
  var projects=getProjects();
  if(projects.length===0){toast('No projects to export');return;}
  var data=JSON.stringify(projects,null,2);
  var blob=new Blob([data],{type:'application/json'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;
  var d=new Date();
  a.download=tsFilename('SolarPro_Projects','json');
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Exported '+projects.length+' projects');
}

function showImportArea(){
  // Open a small popup window with drag-and-drop
  var w=500,h=400;
  var left=(screen.width-w)/2,top=(screen.height-h)/2;
  var popup=window.open('','SolarProImport','width='+w+',height='+h+',left='+left+',top='+top+',scrollbars=no,resizable=no');
  if(!popup){toast('Please allow popups for this site');return;}
  var html='<!DOCTYPE html><html><head><title>Import Project</title>';
  html+='<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;background:#f8fafc;display:flex;align-items:center;justify-content:center;height:100vh;padding:20px}';
  html+='.drop{width:100%;max-width:400px;border:3px dashed #3b82f6;border-radius:16px;padding:50px 30px;text-align:center;background:#fff;transition:all .2s}';
  html+='.drop.over{background:#dbeafe;border-color:#2563eb;transform:scale(1.02)}';
  html+='.icon{font-size:48px;margin-bottom:12px}.title{font-size:18px;font-weight:800;color:#1e3a5f;margin-bottom:6px}.sub{font-size:13px;color:#64748b;margin-bottom:16px}';
  html+='.btn{display:inline-block;padding:10px 24px;background:#3b82f6;color:#fff;border:none;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer}';
  html+='.btn:hover{background:#2563eb}.msg{margin-top:16px;font-size:14px;font-weight:700;padding:10px;border-radius:8px}';
  html+='</style></head><body>';
  html+='<div class="drop" id="drop"><div class="icon">&#x1F4C1;</div><div class="title">Drop Project File Here</div><div class="sub">or click to browse</div>';
  html+='<input type="file" id="fi" accept=".json,.txt" style="display:none">';
  html+='<button class="btn" onclick="document.getElementById(\'fi\').click()">Choose File</button>';
  html+='<div class="msg" id="msg"></div></div>';
  html+='<script>';
  html+='var drop=document.getElementById("drop"),fi=document.getElementById("fi"),msg=document.getElementById("msg");';
  html+='drop.ondragover=function(e){e.preventDefault();drop.classList.add("over");};';
  html+='drop.ondragleave=function(e){e.preventDefault();drop.classList.remove("over");};';
  html+='drop.ondrop=function(e){e.preventDefault();drop.classList.remove("over");if(e.dataTransfer.files[0])readF(e.dataTransfer.files[0]);};';
  html+='fi.onchange=function(){if(fi.files[0])readF(fi.files[0]);};';
  html+='function readF(f){var r=new FileReader();r.onload=function(e){try{var d=JSON.parse(e.target.result);if(!d.state){msg.style.background="#fee2e2";msg.style.color="#b91c1c";msg.textContent="Not a valid project file";return;}window.opener.receiveImportedProject(e.target.result);msg.style.background="#dcfce7";msg.style.color="#15803d";msg.textContent="Imported: "+( d.name||"Project")+"!";setTimeout(function(){window.close();},1500);}catch(err){msg.style.background="#fee2e2";msg.style.color="#b91c1c";msg.textContent="Error: "+err.message;}};r.readAsText(f);}';
  html+='<\/script></body></html>';
  popup.document.write(html);
  popup.document.close();
}

function receiveImportedProject(txt){
  importProjectsFromText(txt);
}

function importProjectsFromText(txt){
  try{
    var imported=JSON.parse(txt);
    if(!Array.isArray(imported)){
      if(imported&&typeof imported==='object'&&imported.state){imported=[imported];}
      else{toast('Could not read project data');return;}
    }
    mergeImportedProjects(imported);
  }catch(err){toast('Error: '+err.message);}
}

function doImportPaste(){
  var el=document.getElementById('import-paste');
  if(!el||!el.value.trim()){toast('Paste project data first');return;}
  importProjectsFromText(el.value.trim());
}


function mergeImportedProjects(imported){
  var existing=getProjects();
  var added=0,updated=0;
  for(var i=0;i<imported.length;i++){
    var imp=imported[i];
    if(!imp.state){continue;}
    if(!imp.name&&imp.state['ca-cust'])imp.name=imp.state['ca-cust'];
    if(!imp.name){continue;}
    var found=false;
    for(var j=0;j<existing.length;j++){
      if(existing[j].id===imp.id||existing[j].name.toLowerCase()===imp.name.toLowerCase()){
        existing[j]=imp;found=true;updated++;break;
      }
    }
    if(!found){existing.unshift(imp);added++;}
  }
  saveProjects(existing);
  showProjectList();
  toast('Imported: '+added+' new, '+updated+' updated');
}


function pdfStyle(){
  return '<style>@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#1a1a2e;font-size:11px;padding:0;margin:0}'+
  '.hdr{background:linear-gradient(135deg,#1a8ab8,#2BABE2,#1e8fc4);padding:16px 28px;display:flex;justify-content:space-between;align-items:center}'+
  '.hdr-left{display:flex;align-items:center;gap:14px}'+
  '.hdr-logo{height:55px;width:auto}'+
  '.hdr-info{}.hdr-co{font-size:10px;font-weight:700;color:rgba(255,255,255,.85);letter-spacing:1px}'+
  '.hdr-right{text-align:right}.hdr-title{font-size:16px;font-weight:800;color:#FED44D;letter-spacing:1.5px}.hdr-contact{font-size:10px;color:#fff;margin-top:4px;line-height:1.5;font-weight:500}'+
  '.gold-line{height:4px;background:linear-gradient(90deg,#FED44D,#2BABE2,#22C55E,#FED44D)}'+
  '.content{padding:18px 28px}'+
  '.sec{margin-bottom:12px}.sec-title{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;padding-bottom:3px;border-bottom:2px solid #e8e8e8}'+
  '.sec-title.gold{color:#9a7200;border-bottom-color:#FED44D}.sec-title.blue{color:#1a8ab8;border-bottom-color:#2BABE2}.sec-title.navy{color:#1a1a2e;border-bottom-color:#1a1a2e}.sec-title.green{color:#15803d;border-bottom-color:#22C55E}'+
  'table{width:100%;border-collapse:collapse;margin-bottom:6px}'+
  'th{background:#1a1a2e;color:#fff;padding:5px 10px;text-align:left;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px}'+
  'td{padding:5px 10px;font-size:11px;font-weight:500;border-bottom:1px solid #eef0f5;color:#1a1a2e}'+
  'th.r,td.r{text-align:right}'+
    '.part{font-size:12px;color:#1a1a2e}'+
  '.cat-row td{background:rgba(254,212,77,.12);font-weight:700;font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#a37c00;padding:4px 10px}'+
  '.total-row td{background:linear-gradient(90deg,rgba(254,212,77,.15),rgba(254,212,77,.08));font-weight:800;font-size:12px;color:#1a1a2e;border-top:2px solid #FED44D}'+
  '.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px 20px}.info-grid div{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f0f0f5}.info-grid .lbl{font-weight:600;color:#666;font-size:12px}.info-grid .val{font-weight:700;color:#1a1a2e;font-size:13px}'+
  '.green{color:#15803d}.blue{color:#2BABE2}.purple{color:#7c3aed}.gold-val{color:#a37c00}'+
  '.ftr{background:#f0f2f7;padding:10px 28px;display:flex;justify-content:space-between;font-size:10px;color:#3a4060;border-top:2px solid #FED44D;font-weight:500;margin-top:auto}'+
  '.sig-area{display:flex;gap:60px;margin-top:30px}.sig-block{flex:1}.sig-hdr{font-size:11px;font-weight:800;color:#1a1a2e;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:18px}.sig-line{border-bottom:2px solid #1a1a2e;margin-bottom:5px;height:35px}.sig-label{font-size:10px;color:#3a4060;font-weight:600}'+
  '.addr{font-size:10px;color:rgba(255,255,255,.8);margin-top:3px}'+
  '.ci-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 18px}.ci-item{display:flex;gap:6px;align-items:baseline}.ci-lbl{font-size:10px;font-weight:700;color:#555;white-space:nowrap;text-transform:uppercase;letter-spacing:.3px}.ci-val{font-size:11px;font-weight:700;color:#1a1a2e}'+
  '.job-contract{font-size:11px;line-height:1.6;color:#1a1a2e;background:#fafbfc;border-left:3px solid #2BABE2;padding:10px 14px;border-radius:0 4px 4px 0}'+
  '.scope-box{background:#f8fafd;border:1px solid #e2e8f0;border-radius:4px;padding:8px 12px}'+
  '.scope-cat{font-size:9px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px;padding-bottom:3px;border-bottom:1px solid #e2e8f0}'+
  '.scope-item{padding:3px 0;border-bottom:1px solid #eef0f5;font-size:10px;color:#1a1a2e;display:flex;align-items:baseline;gap:5px}'+
  '.scope-bullet{color:#2BABE2;font-weight:800;font-size:11px;flex-shrink:0}'+
  '.scope-lbl{font-size:9px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.3px;margin-right:3px}'+
  '.notes-box{border:1.5px dashed #c0c6d4;border-radius:4px;min-height:40px;padding:6px 10px;font-size:10px;color:#888}'+
  '.td-desc{font-size:9px;color:#888;margin-top:1px}'+
  '@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}@page{margin:12mm 10mm;size:letter}.page-break{page-break-before:always}.hdr{padding:14px 18px}.ftr{padding:10px 18px}}'+
  '<\/style>';
}

function genProjectPDF(){
  try{
  var d=gatherPDFData();
  if(!d){alert('gatherPDFData returned null');return;}
  var h='<!DOCTYPE html><html><head><title>Pell Solar - Project Summary<\/title>'+pdfStyle()+'<\/head><body>';
  
  // Header
  h+='<div class="hdr"><div class="hdr-left">';
  if(typeof PELL_LOGO!=='undefined')h+='<img src="'+PELL_LOGO+'" class="hdr-logo">';
  h+='<div class="hdr-info"><div class="hdr-co">License #949122 &nbsp;|&nbsp; Tesla Certified Installer</div><div class="addr">1326 Monte Vista Ave #7, Upland, CA 91786</div></div></div>';
  h+='<div class="hdr-right"><div class="hdr-title">PROJECT SUMMARY</div><div class="hdr-contact">(866) 646-8499 &nbsp;|&nbsp; (714) 880-4416<br>pellsolar.com</div></div></div>';
  h+='<div class="gold-line"></div><div class="content">';

  // Project Info
  h+='<div class="sec"><div class="sec-title gold">Project Information</div>';
  h+='<div class="info-grid"><div><span class="lbl">Date</span><span class="val">'+d.date+'</span></div><div><span class="lbl">System</span><span class="val">'+d.sysDesc+'</span></div>';
  h+='<div><span class="lbl">Customer</span><span class="val" style="font-size:14px;font-weight:800">'+d.custName+'</span></div><div><span class="lbl">Phone</span><span class="val">'+(d.phone||'—')+'</span></div>';
  h+='<div><span class="lbl">Address</span><span class="val">'+(d.address||'—')+'</span></div>';
  h+='<div><span class="lbl">Service Panel</span><span class="val">'+d.svc+'</span></div><div><span class="lbl">Jurisdiction</span><span class="val">'+d.jur+'</span></div>';
  h+='<div><span class="lbl">Customer</span><span class="val" style="font-weight:800">'+d.custName+'</span></div><div><span class="lbl">Phone</span><span class="val">'+(d.phone||'\u2014')+'</span></div>';
  h+='<div><span class="lbl">Address</span><span class="val" style="font-size:11px">'+(d.address||'\u2014')+'</span></div><div><span class="lbl">Created</span><span class="val" style="font-size:10px;color:#64748b">'+(d.timestamp||d.date)+'</span></div>';
  h+='</div></div>';

  // System Specs
  h+='<div class="sec"><div class="sec-title blue">System Specifications</div>';
  h+='<div class="info-grid"><div><span class="lbl">Panel</span><span class="val">'+d.panel+'</span></div><div><span class="lbl">Qty / Size</span><span class="val">'+d.panelQty+' panels / '+d.kw+' kW</span></div>';
  if(d.battPkg){h+='<div><span class="lbl">Battery</span><span class="val purple">'+d.battPkg+'</span></div><div><span class="lbl">Storage</span><span class="val">'+d.battSpecs+'</span></div>';}
  if(d.optName){h+='<div><span class="lbl">Optimizer</span><span class="val">'+d.optName+'</span></div><div><span class="lbl">Racking</span><span class="val">'+d.rackingName+'</span></div>';}
  if(d.invName){h+='<div><span class="lbl">Inverter</span><span class="val">'+d.invName+'</span></div><div><span class="lbl">Qty</span><span class="val">'+(d.invQty||'1')+'</span></div>';}
  h+='<div><span class="lbl">Labor</span><span class="val">'+d.laborDesc+'</span></div><div><span class="lbl">$/Watt Cost</span><span class="val">'+d.costPW+'</span></div>';
  h+='</div></div>';

  // Cost Breakdown
  h+='<div class="sec"><div class="sec-title navy">Cost Breakdown</div>';
  h+='<table><thead><tr><th>Item</th><th>Description</th><th>Part #</th><th class="r">Total</th></tr></thead><tbody>';
  if(d.sysType!=='battonly'){
    h+='<tr class="cat-row"><td colspan="4">SOLAR SYSTEM</td></tr>';
    h+='<tr><td>Solar Panels</td><td>'+d.panel+' × '+d.panelQty+'</td><td class="part">'+d.panelModel+'</td><td class="r">'+d.panelCost+'</td></tr>';
    h+='<tr><td>Racking</td><td>'+d.rackingName+'</td><td class="part">'+d.rackingModel+'</td><td class="r">'+d.rackingCost+'</td></tr>';
    h+='<tr><td>MCI Optimizer</td><td>'+d.optName+'</td><td class="part">'+d.optModel+'</td><td class="r">'+d.optimizerCost+'</td></tr>';
    if(d.invName)h+='<tr><td>Inverter</td><td>'+d.invName+' × '+(d.invQty||'1')+'</td><td class="part">'+(d.invModel||'')+'</td><td class="r">'+d.invCost+'</td></tr>';
    if(d.microName)h+='<tr><td>Microinverter</td><td>'+d.microName+' × '+d.panelQty+'</td><td class="part">'+d.microModel+'</td><td class="r">'+d.microCost+'</td></tr>';
    h+='<tr><td>Install Labor</td><td>'+d.laborDesc+'</td><td></td><td class="r">'+d.laborCost+'</td></tr>';
  }
  if(d.sysType==='tesla'||d.sysType==='battonly'){
    h+='<tr class="cat-row"><td colspan="4">'+(d.sysType==='battonly'?'BATTERY ONLY SYSTEM':'TESLA BATTERY')+'</td></tr>';
    h+='<tr><td>Battery Package</td><td>'+d.battPkg+'</td><td></td><td class="r">'+d.battCost+'</td></tr>';
    if(d.battParts&&d.battParts.length>0){for(var bp=0;bp<d.battParts.length;bp++){var pt=d.battParts[bp];h+='<tr style="color:#64748b;font-size:10px"><td style="padding-left:24px">'+pt.qty+' × '+pt.desc+'</td><td></td><td class="part">'+pt.model+'</td><td></td></tr>';}}
    if(d.stackChecked)h+='<tr><td>Stacking Kit</td><td>'+d.stackQty+' × PW3 Expansion Stacking Kit</td><td class="part">'+D.comp.tesla_exp_stack.model+'</td><td class="r">'+d.stackCost+'</td></tr>';
    if(d.rsdChecked)h+='<tr><td>Rapid Shutdown</td><td>MCI/RSD Gen 2</td><td class="part">'+D.comp.tesla_rsd.model+'</td><td class="r">'+d.rsdCost+'</td></tr>';
    h+='<tr><td>Battery Labor</td><td>'+d.battLaborDesc+'</td><td></td><td class="r">'+d.battLabor+'</td></tr>';
  }
  h+='<tr class="cat-row"><td colspan="4">PROJECT COSTS</td></tr>';
  h+='<tr><td>Permits</td><td>'+d.permitName+'</td><td></td><td class="r">'+d.permitCost+'</td></tr>';
  h+='<tr><td>Site Survey</td><td>SOL SOURCE</td><td></td><td class="r">'+d.ssCost+'</td></tr>';
  h+='<tr><td>NEM Paperwork</td><td>'+d.nemName+'</td><td></td><td class="r">'+d.nemCost+'</td></tr>';
  if(d.faviCost!=='$0')h+='<tr><td>Favi Paperwork</td><td>Favi Paperwork</td><td></td><td class="r">'+d.faviCost+'</td></tr>';
  if(d.officeCost!=='$0')h+='<tr><td>Office Work</td><td>Office Work</td><td></td><td class="r">'+d.officeCost+'</td></tr>';
  if(d.bollardsChecked)h+='<tr><td>Bollards</td><td>Garage \u2014 Bollard Installation</td><td></td><td class="r">'+d.bollardsCost+'</td></tr>';
  if(d.smokeDetChecked)h+='<tr><td>Smoke Detectors</td><td>Garage \u2014 Smoke Detector</td><td></td><td class="r">'+d.smokeDetCost+'</td></tr>';
  if(d.ccAddon)h+='<tr><td>Car Charger</td><td>EV Charger Install ('+d.ccAddonFeet+' ft)</td><td></td><td class="r">'+d.ccAddonCost+'</td></tr>';
  if(d.ccStandalone){h+='<tr><td>Car Charger</td><td>EV Charger Installation ('+d.ccSaFeet+' ft)</td><td></td><td class="r">'+d.ccSaCost+'</td></tr>';}
  d.addons.forEach(function(a){h+='<tr><td>'+a.name+'</td><td></td><td></td><td class="r">'+a.cost+'</td></tr>';});
  h+='<tr class="total-row"><td></td><td style="text-align:right;font-weight:800">TOTAL JOB COST</td><td></td><td class="r">'+d.jobCost+'</td></tr>';
  h+='</tbody></table></div>';

  // Sales Commission (only when a salesperson is selected)
  if(d.commName&&d.commAmt!=='$0'){
    h+='<div class="sec"><div class="sec-title" style="color:#1a6b3c;border-bottom-color:#22C55E">Sales Commission</div>';
    h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px">';
    h+='<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f0f0f5"><span class="lbl">Salesperson</span><span class="val" style="font-weight:800">'+d.commName+'</span></div>';
    for(var cbi=0;cbi<d.commBreakdown.length;cbi++){var cb=d.commBreakdown[cbi];h+='<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f0f0f5"><span class="lbl">'+cb.lbl+'</span><span class="val" style="color:#15803d">'+cb.amt+'</span></div>';}
    h+='<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f0f0f5"><span class="lbl" style="font-weight:800;color:#15803d">Total Commission</span><span class="val" style="font-weight:800;color:#15803d;font-size:14px">'+d.commAmt+'</span></div>';
    h+='</div></div>';
  }

  // Pricing Summary
  h+='<div class="sec"><div class="sec-title green">Pricing Summary</div>';
  h+='<div class="info-grid"><div><span class="lbl">Sale Price</span><span class="val">'+d.saleFmt+'</span></div><div><span class="lbl">Job Cost</span><span class="val">'+d.jobCost+'</span></div>';
  h+='<div><span class="lbl">Deposit</span><span class="val">'+d.depositFmt+'</span></div><div><span class="lbl">Cost $/W</span><span class="val">'+d.costPW+'</span></div>';
  h+='<div><span class="lbl">Balance</span><span class="val">'+d.balance+'</span></div><div><span class="lbl">Retail $/W</span><span class="val">'+d.retailPW+'</span></div>';
  h+='<div><span class="lbl">Financing</span><span class="val">'+(d.finName||'None')+'</span></div><div><span class="lbl" style="color:#b91c1c;font-weight:700">Dealer Fee</span><span class="val" style="color:#b91c1c;font-weight:700">'+(d.finFee!=='0%'?d.finFee+' = '+d.finFeeDollar:'None')+'</span></div>';
  h+='<div><span class="lbl" style="color:#15803d;font-weight:700">Margin</span><span class="val" style="color:#15803d;font-weight:700;font-size:14px">'+d.marginDollar+' <span style="font-size:11px;font-weight:600;opacity:0.8">('+d.marginPct+')</span></span></div><div></div>';
  if(d.isLease){h+='<div style="margin-top:12px;padding:12px 16px;border:2px solid #8b5cf6;border-radius:8px;background:#f5f3ff"><div style="font-weight:800;color:#8b5cf6;font-size:13px;letter-spacing:1px;margin-bottom:8px">LEASE</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px"><div><span class="lbl" style="color:#8b5cf6">Lease Total</span><span class="val" style="font-weight:700">'+d.leaseTotalFmt+'</span></div><div><span class="lbl" style="color:#8b5cf6">Monthly Payment</span><span class="val" style="font-weight:700">'+d.leaseMonthlyFmt+'</span></div></div></div>';}
  h+='</div></div>';

  // Cash vs Finance
  h+='<div class="sec"><div class="sec-title navy">Customer Payment Options</div>';
  h+='<table><thead><tr><th></th><th class="r">CASH</th><th class="r">FINANCED</th></tr></thead><tbody>';
  h+='<tr><td>System Cost</td><td class="r">'+d.saleFmt+'</td><td class="r">'+(d.finTotal||d.saleFmt)+'</td></tr>';
  h+='<tr><td>Deposit</td><td class="r">-'+d.depositFmt+'</td><td class="r">-'+d.depositFmt+'</td></tr>';
  h+='<tr><td>Fed Tax Credit ('+d.fedPct+')</td><td class="r green">-'+d.cashCredit+'</td><td class="r green">-'+d.finCredit+'</td></tr>';
  h+='<tr class="total-row"><td style="font-weight:800">NET PRICE</td><td class="r green" style="font-size:14px">'+d.cashNet+'</td><td class="r green" style="font-size:14px">'+d.finNet+'</td></tr>';
  h+='</tbody></table></div>';

  // Aurora Layout Image (if available)
  if(d.auroraLayoutUrl){
    h+='<div class="sec"><div class="sec-title" style="color:#f97316;border-color:#f97316">&#x2600;&#xFE0F; Aurora Solar Design Layout</div>';
    h+='<div style="text-align:center;padding:8px 0">';
    h+='<img src="'+d.auroraLayoutUrl+'" style="max-width:100%;border-radius:8px;border:1px solid #fed7aa">';
    h+='</div></div>';
  }

  // Notes
  if(d.notes){h+='<div class="sec"><div class="sec-title navy">Project Notes</div><div style="padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;font-size:11px;line-height:1.6;color:#1a1a2e;white-space:pre-wrap">'+d.notes+'</div></div>';}

  // Footer
  h+='</div><div class="ftr"><span>Pell Solar, Inc. &nbsp;|&nbsp; 1326 Monte Vista Ave #7, Upland, CA 91786 &nbsp;|&nbsp; (866) 646-8499 &nbsp;|&nbsp; pellsolar.com</span><span>Generated: '+d.date+'</span></div>';
  h+='<\/body><\/html>';

  var w=window.open('','_blank','width=850,height=1100');
  if(!w||w.closed){alert('Popup blocked! Please allow popups for pellsolar.com and try again.');return;}
  w.document.write(h);w.document.close();
  setTimeout(function(){w.print();},500);
  }catch(e){alert('Project PDF Error: '+e.message);}
}

function toggleCobuyer(){
  var cb=_id('cb-cobuyer');var field=_id('cobuyer-field');
  if(field)field.style.display=(cb&&cb.checked)?'block':'none';
  if(cb&&!cb.checked){var el=_id('ca-cobuyer');if(el)el.value='';}
}

// ===== GENERATE CONTRACT =====
function imgUrlToBase64(url, callback) {
  // Route through our own Render proxy to bypass Aurora CDN CORS restrictions.
  // Direct fetch() of Aurora URLs fails because Aurora blocks cross-origin requests.
  // The proxy fetches server-to-server (no CORS), returns raw bytes to the browser,
  // which then converts to base64 and sends to the contract API as a data URI.
  // The Python AuroraBox already handles data:image base64 URIs correctly.
  if (!url) { callback(''); return; }
  var proxyUrl = 'https://pell-solar-contract-api.onrender.com/proxy-image?url=' + encodeURIComponent(url);
  fetch(proxyUrl)
    .then(function(response) {
      if (!response.ok) throw new Error('proxy fetch failed');
      return response.blob();
    })
    .then(function(blob) {
      var reader = new FileReader();
      reader.onloadend = function() { callback(reader.result); };
      reader.onerror   = function() { callback(url); };
      reader.readAsDataURL(blob);
    })
    .catch(function() { callback(url); }); // last-resort fallback
}

function tsFilename(type,ext){
  var cust=(_id('ca-cust')?_id('ca-cust').value.trim():'').replace(/[^a-zA-Z0-9]/g,'_').replace(/_+/g,'_').replace(/^_|_$/g,'');
  if(!cust)cust='Customer';
  var now=new Date();
  var dt=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
  var tm=String(now.getHours()).padStart(2,'0')+String(now.getMinutes()).padStart(2,'0')+String(now.getSeconds()).padStart(2,'0');
  return cust+'_'+type+'_'+dt+'_'+tm+'.'+(ext||'pdf');
}
function savePDFToPipedrive(type){
  var pdId=_id('ca-pd-id')?_id('ca-pd-id').value.trim():'';
  if(!pdId){toast('⚠ Load a customer from Pipedrive first');return;}
  toast('⚠ Save to Pipedrive requires backend update — coming soon');
}
function emailSiteSurvey(){
  var pdId=_id('ca-pd-id')?_id('ca-pd-id').value.trim():'';
  if(!pdId){toast('⚠ Load a customer from Pipedrive first');return;}
  var surveyorEmail=(D.cfg&&D.cfg.surveyor_email)||'info@pellsolar.com';
  toast('⚠ Email feature requires backend update — coming soon (will send to: '+surveyorEmail+')');
}
function genContract(){
  var API_URL = 'https://pell-solar-contract-api.onrender.com/generate-contract';
  var API_KEY = 'd2e921f58677a977c276a466dedb9177';
  try {
    var nameEl = _id('ca-cust');
    if (!nameEl || !nameEl.value.trim()) { toast('Enter customer name before generating contract'); if (nameEl) nameEl.focus(); return; }
    var sysEl = _id('ca-sys');
    if (!sysEl || !sysEl.value) { toast('Select a system type before generating contract'); return; }
    var d = gatherPDFData();
    var coBuyerCb = _id('cb-cobuyer');
    var coBuyerEl = _id('ca-cobuyer');
    d.coBuyerName = (coBuyerCb && coBuyerCb.checked && coBuyerEl) ? coBuyerEl.value.trim() : '';
    var btn = _id('btn-contract');
    var origText = btn ? btn.innerHTML : '';
    if (btn) { btn.innerHTML = '⏳ GENERATING...'; btn.disabled = true; }
    // Convert Aurora layout image to base64 in the browser before sending to API
    // This avoids the server needing to fetch Aurora's image (which may block server requests)
    var layoutUrl = d.auroraLayoutUrl || '';
    function doSend(imageData) {
      if (imageData) d.auroraLayoutUrl = imageData; // replace URL with base64 data URI
      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-API-Key': API_KEY },
        body: JSON.stringify(d)
      })
    .then(function(response) {
      if (!response.ok) { return response.json().then(function(err) { throw new Error(err.error || 'Server error ' + response.status); }); }
      return response.blob();
    })
    .then(function(blob) {
      var safeName = (d.custName || 'Contract').replace(/[^a-zA-Z0-9]/g, '_');
      var filename = tsFilename('Contract','pdf');
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a'); a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast('Contract generated — ' + filename);
    })
    .catch(function(err) { alert('Contract generation failed: ' + err.message); })
    .finally(function() { if (btn) { btn.innerHTML = origText; btn.disabled = false; } });
    } // end doSend
    // If we have a layout URL, convert to base64 first (avoids server-side image fetch blocking)
    if (layoutUrl) {
      imgUrlToBase64(layoutUrl, doSend);
    } else {
      doSend('');
    }
  } catch(e) { alert('Contract error: ' + e.message); }
}

function genContractorPDF(){
  try{
  var d=gatherPDFData();
  var invNum='INV-'+new Date().getFullYear()+'-'+String(new Date().getMonth()+1).padStart(2,'0')+String(new Date().getDate()).padStart(2,'0')+'-'+String(Math.floor(Math.random()*900)+100);

  // Helper: build header HTML
  function pdfHeader(subtitle){
    var hdr='<div class="hdr"><div class="hdr-left">';
    if(typeof PELL_LOGO!=='undefined')hdr+='<img src="'+PELL_LOGO+'" class="hdr-logo">';
    hdr+='<div class="hdr-info"><div class="hdr-co">License #949122 &nbsp;|&nbsp; Tesla Certified Installer</div><div class="addr">1326 Monte Vista Ave #7, Upland, CA 91786</div></div></div>';
    hdr+='<div class="hdr-right"><div class="hdr-title">CONTRACTOR INVOICE</div>';
    hdr+='<div class="hdr-contact">(866) 646-8499 &nbsp;|&nbsp; (714) 880-4416<br>pellsolar.com</div>';
    if(subtitle)hdr+='<div style="font-size:10px;color:rgba(255,255,255,.7);margin-top:3px">'+subtitle+'</div>';
    hdr+='</div></div><div class="gold-line"></div>';
    return hdr;
  }

  var h='<!DOCTYPE html><html><head><title>Pell Solar - Contractor Invoice<\/title>'+pdfStyle()+'<\/head><body>';

  // ========== PAGE 1 ==========
  h+=pdfHeader(d.custName+' &nbsp;|&nbsp; '+d.date);
  h+='<div class="content">';

  // Customer & Job Info
  h+='<div class="sec" style="margin-bottom:10px"><div class="sec-title gold">Customer & Job Information</div>';
  h+='<div class="ci-grid">';
  h+='<div class="ci-item"><span class="ci-lbl">Customer:</span><span class="ci-val">'+(d.custName||'—')+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">Date:</span><span class="ci-val">'+d.date+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">Invoice:</span><span class="ci-val">'+invNum+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">System:</span><span class="ci-val">'+(d.sysDesc||'—')+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">Service:</span><span class="ci-val">'+(d.svc||'200A')+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">Jurisdiction:</span><span class="ci-val">'+(d.jur||'—')+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">Phone:</span><span class="ci-val">'+(d.phone||'—')+'</span></div>';
  h+='<div class="ci-item"><span class="ci-lbl">Address:</span><span class="ci-val" style="font-size:10px">'+(d.address||'—')+'</span></div>';
  h+='</div></div>';

  // Job Contract paragraph
  var totalVal=0;
  // Pre-calculate total for contract paragraph
  var pMoney=function(s){return parseFloat((s||'0').replace(/[$,]/g,''))||0;};
  if(d.sysType!=='battonly')totalVal+=pMoney(d.laborCost);
  totalVal+=pMoney(d.battLabor);
  for(var ai=0;ai<d.addons.length;ai++)totalVal+=pMoney(d.addons[ai].cost);
  if(d.bollardsChecked)totalVal+=pMoney(d.bollardsCost);
  if(d.smokeDetChecked)totalVal+=pMoney(d.smokeDetCost);
  if(d.ccAddon)totalVal+=pMoney(d.ccAddonCost);
  if(d.ccStandalone)totalVal+=pMoney(d.ccSaContractor);

  h+='<div class="job-contract" style="margin-bottom:12px">';
  h+='Subcontractor to install <b>'+(d.projDesc||d.sysDesc||'Solar System')+'</b> to city standards for the amount of <b>'+fm(totalVal)+'</b>. ';
  h+='Electrical Company (Sub) payable thru (General) Pell Solar Inc, payable upon the terms below.';
  h+='</div>';

  // ===== TWO COLUMN: Paid Items (left) | Scope of Work (right) =====
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:12px">';

  // LEFT: Contractor Paid Items
  h+='<div><div class="sec-title navy" style="margin-bottom:5px">Contractor Paid Items</div>';
  h+='<table><thead><tr><th>Service</th><th class="r">Amount</th></tr></thead><tbody>';
  var lineTotal=0;
  if(d.laborCost&&d.laborCost!=='$0'&&d.sysType!=='battonly'){
    h+='<tr><td>Install Labor<div class="td-desc">'+d.laborDesc+'</div></td><td class="r" style="font-weight:700">'+d.laborCost+'</td></tr>';
    lineTotal+=pMoney(d.laborCost);
  }
  if(d.battLabor&&d.battLabor!=='$0'){
    h+='<tr><td>Battery Labor<div class="td-desc">'+d.battLaborDesc+'</div></td><td class="r" style="font-weight:700">'+d.battLabor+'</td></tr>';
    lineTotal+=pMoney(d.battLabor);
  }
  // Add-ons with prices
  for(var ai=0;ai<d.addons.length;ai++){
    var addon=d.addons[ai];
    h+='<tr><td>'+addon.name+'</td><td class="r" style="font-weight:700">'+addon.cost+'</td></tr>';
    lineTotal+=pMoney(addon.cost);
  }
  // Bollards & Smoke Detectors
  if(d.bollardsChecked&&d.bollardsCost!=='$0'){h+='<tr><td>Bollards<div class="td-desc">Garage Installation</div></td><td class="r" style="font-weight:700">'+d.bollardsCost+'</td></tr>';lineTotal+=pMoney(d.bollardsCost);}
  if(d.smokeDetChecked&&d.smokeDetCost!=='$0'){h+='<tr><td>Smoke Detectors<div class="td-desc">Garage Installation</div></td><td class="r" style="font-weight:700">'+d.smokeDetCost+'</td></tr>';lineTotal+=pMoney(d.smokeDetCost);}
  if(d.ccAddon&&d.ccAddonCost!=='$0'){h+='<tr><td>Car Charger<div class="td-desc">EV Charger Install ('+d.ccAddonFeet+' ft)</div></td><td class="r" style="font-weight:700">'+d.ccAddonCost+'</td></tr>';lineTotal+=pMoney(d.ccAddonCost);}
  if(d.ccStandalone){h+='<tr><td>Car Charger<div class="td-desc">Standalone EV Charger ('+d.ccSaFeet+' ft)</div></td><td class="r" style="font-weight:700">'+d.ccSaContractor+'</td></tr>';lineTotal+=pMoney(d.ccSaContractor);}
  h+='<tr class="total-row"><td style="text-align:right;font-size:11px;font-weight:800">TOTAL DUE</td><td class="r" style="font-size:13px">'+fm(lineTotal)+'</td></tr>';
  h+='</tbody></table></div>';

  // RIGHT: Scope of Work
  h+='<div><div class="sec-title blue" style="margin-bottom:5px">Scope of Work</div>';
  h+='<div class="scope-box">';

  // Equipment section
  var hasEquip=false;
  if(d.sysType!=='battonly'&&(d.panel||d.optName||d.rackingName||d.invName)){hasEquip=true;}
  if(d.battPkg)hasEquip=true;
  if(hasEquip){
    h+='<div class="scope-cat">Equipment & Materials Provided</div>';
    if(d.panel&&d.sysType!=='battonly')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Panels</span> '+d.panel+' &times; '+d.panelQty+' ('+d.kw+' kW)</span></div>';
    if(d.optName&&d.optName!=='auto'&&d.sysType!=='battonly')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Optimizer</span> '+d.optName+'</span></div>';
    if(d.rackingName&&d.sysType!=='battonly')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Racking</span> '+d.rackingName+' &times; '+d.panelQty+'</span></div>';
    if(d.invName)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Inverter</span> '+d.invName+' &times; '+(d.invQty||'1')+'</span></div>';
    if(d.battPkg)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Battery</span> '+d.battPkg+'</span></div>';
    if(d.battSpecs&&d.battSpecs!=='Select above')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Storage</span> '+d.battSpecs+'</span></div>';
    if(d.bollardsChecked)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Bollards</span> Garage Installation</span></div>';
    if(d.smokeDetChecked)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Smoke Det</span> Garage Smoke Detector</span></div>';
    if(d.ccAddon)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">EV Charger</span> Car Charger ('+d.ccAddonFeet+' ft)</span></div>';
    if(d.ccStandalone)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">EV Charger</span> Standalone Car Charger ('+d.ccSaFeet+' ft)</span></div>';
  }

  // Project Admin section
  var hasAdmin=(d.permitName||d.nemName||d.ssCost!=='$0'||d.faviCost!=='$0'||d.officeCost!=='$0');
  if(hasAdmin){
    h+='<div class="scope-cat" style="margin-top:8px">Project Administration</div>';
    if(d.permitName)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Permits</span> '+d.permitName+'</span></div>';
    if(d.nemName)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">NEM</span> '+d.nemName+'</span></div>';
    if(d.ssCost!=='$0')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Site Survey</span> Sol Source</span></div>';
    if(d.faviCost!=='$0')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Favi</span> Favi Paperwork</span></div>';
    if(d.officeCost!=='$0')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span><span class="scope-lbl">Office</span> Office Work</span></div>';
  }
  h+='</div></div>';
  h+='</div>'; // end two-column grid

  // Payment Terms
  h+='<div class="sec" style="margin-bottom:10px"><div class="sec-title green" style="margin-bottom:3px">Terms of Repayment — General Contractor thru to Subs</div>';
  h+='<div style="font-size:10px;line-height:1.6;color:#1a1a2e">';
  h+='<p style="margin-bottom:4px"><b>Cash/Purchase:</b> Payment in full no later than 3–4 business days after payment is received from customer. Customer is required to pay in full at the time of job day of completion.</p>';
  h+='<p><b>Financed:</b> Payment in full no later than 5–7 business days of customer signing the Completion form due back to financing company to process disbursements of funds. Customer is required to submit final documents the final day of installation in person or by Docusign.</p>';
  h+='</div></div>';

  // Aurora Layout Image (if available)
  if(d.auroraLayoutUrl){
    h+='<div style="margin-bottom:8px"><div style="font-size:10px;font-weight:800;color:#f97316;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">&#x2600;&#xFE0F; Aurora Solar Design Layout</div>';
    h+='<div style="text-align:center">';
    h+='<img src="'+d.auroraLayoutUrl+'" style="max-width:100%;border-radius:8px;border:1px solid #fed7aa">';
    h+='</div></div>';
  }

  // Notes
  h+='<div style="margin-bottom:0"><div style="font-size:10px;font-weight:800;color:#1a1a2e;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Notes</div>';
  var notesTxt='';
  if(d.battPkg&&d.battSpecs&&d.battSpecs!=='Select above')notesTxt+=d.battPkg+' | '+d.battSpecs;
  if(d.bollardsChecked)notesTxt+=(notesTxt?' | ':'')+'Bollards: Garage';
  if(d.smokeDetChecked)notesTxt+=(notesTxt?' | ':'')+'Smoke Detectors: Garage';
  if(d.notes)notesTxt+=(notesTxt?'\n':'')+'Notes: '+d.notes;
  h+='<div class="notes-box" style="white-space:pre-wrap">'+notesTxt+'</div></div>';

  h+='</div>'; // end content
  h+='<div class="ftr"><span>Pell Solar, Inc. &nbsp;|&nbsp; 1326 Monte Vista Ave #7, Upland, CA 91786 &nbsp;|&nbsp; pellsolar.com</span><span>'+d.date+'</span></div>';

  // ========== PAGE 2 ==========
  h+='<div class="page-break"></div>';
  h+=pdfHeader(d.custName+' &nbsp;|&nbsp; '+d.date);
  h+='<div class="content">';

  // Subcontractor Responsibilities
  h+='<div class="sec"><div class="sec-title blue">Subcontractor Responsibilities</div>';
  h+='<div style="font-size:11px;line-height:1.8;color:#1a1a2e">';
  var resp=[
    'Subcontractors are responsible for all flashing penetrations installed on the roof.',
    'Subcontractors are responsible for mounting and connecting racking system for solar system.',
    'Subcontractors are responsible for mounting solar panels to the racking system.',
    'Subcontractors are responsible for all electrical connections from main electrical panel to solar panels on the roof.',
    'Subcontractors are responsible for picking up and removing all trash on the job site.',
    'Subcontractors are responsible for any leaks caused by the penetrations 8 inches around each of their flashings for 10 years.',
    'Subcontractors are responsible for any damage caused on the job site to the customer\\\'s home. They must find a solution to fix any problem they caused in a timely manner.'
  ];
  for(var ri=0;ri<resp.length;ri++){
    h+='<div style="margin-bottom:4px"><span style="font-weight:800;color:#2BABE2;margin-right:6px">'+(ri+1)+'.</span>'+resp[ri]+'</div>';
  }
  h+='</div></div>';

  // Signatures
  h+='<div class="sig-area">';
  h+='<div class="sig-block"><div class="sig-hdr">Company</div><div class="sig-line"></div><div class="sig-label">Signature</div><div class="sig-line" style="margin-top:18px;height:28px"></div><div class="sig-label">Date</div></div>';
  h+='<div class="sig-block"><div class="sig-hdr">Contractor</div><div class="sig-line"></div><div class="sig-label">Signature</div><div class="sig-line" style="margin-top:18px;height:28px"></div><div class="sig-label">Date</div></div>';
  h+='</div>';

  h+='</div>'; // end content
  h+='<div class="ftr"><span>Pell Solar, Inc. &nbsp;|&nbsp; 1326 Monte Vista Ave #7, Upland, CA 91786 &nbsp;|&nbsp; pellsolar.com</span><span>'+d.date+'</span></div>';
  h+='<\/body><\/html>';

  var w=window.open('','_blank','width=850,height=1100');
  if(!w||w.closed){alert('Popup blocked! Please allow popups for pellsolar.com and try again.');return;}
  w.document.write(h);w.document.close();
  setTimeout(function(){w.print();},500);
  }catch(e){alert('Contractor PDF Error: '+e.message);}
}


// ══════════════════════════════════════════════════════
// PIPEDRIVE SEARCH
// ══════════════════════════════════════════════════════
var pdSearchTimer=null;
var pdSearchAbort=null;
function pdSearchDebounce(){
  clearTimeout(pdSearchTimer);
  var v=_id('ca-cust')?_id('ca-cust').value.trim():'';
  if(v.length<2){var r=_id('pd-results');if(r){r.style.display='none';r.innerHTML='';}return;}
  pdSearchTimer=setTimeout(function(){pdSearch();},450);
}

function pdSearch(){
  var name=_id('ca-cust')?_id('ca-cust').value.trim():'';
  if(!name||name.length<2){return;}
  if(pdSearchAbort){try{pdSearchAbort.abort();}catch(e){}}
  pdSearchAbort=new AbortController();
  var st=_id('pd-status');if(st)st.textContent='⧳';
  var r=_id('pd-results');if(r){r.innerHTML='<div style="padding:10px;font-size:12px;color:#888">Searching...</div>';r.style.display='block';r.style.minHeight='40px';}
  fetch('https://pell-solar-contract-api.onrender.com/search-pipedrive?name='+encodeURIComponent(name),{signal:pdSearchAbort?pdSearchAbort.signal:undefined})
  .then(function(res){return res.json();})
  .then(function(data){
    if(st)st.textContent='';
    if(!data.results||data.results.length===0){
      if(r){r.innerHTML='<div style="padding:10px;font-size:12px;color:#888">No results found</div>';r.style.display='block';}
      return;
    }
    var html='';
    data.results.forEach(function(p){
      html+='<div onclick="pdSelect('+JSON.stringify(p).replace(/"/g,'&quot;')+')" style="padding:10px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;transition:background .15s" onmouseover="this.style.background=\'#f5f9ff\'" onmouseout="this.style.background=\'#fff\'">';
      html+='<div style="font-size:13px;font-weight:600;color:#1a1a2e">'+p.name+'</div>';
      if(p.phone)html+='<div style="font-size:11px;color:#666">'+p.phone+'</div>';
      if(p.email)html+='<div style="font-size:11px;color:#888">'+p.email+'</div>';
      html+='</div>';
    });
    if(r){r.innerHTML=html;r.style.display='block';}
  })
  .catch(function(err){
    if(err&&err.name==='AbortError')return;
    if(st)st.textContent='Error';
    if(r){r.innerHTML='<div style="padding:10px;font-size:12px;color:#c00">Search failed — check connection</div>';r.style.display='block';}
  });
}

function pdSelect(p){
  if(_id('ca-cust'))_id('ca-cust').value=p.name||'';
  if(_id('ca-phone')&&p.phone){_id('ca-phone').value=p.phone;formatPhone(_id('ca-phone'));}
  if(_id('ca-email'))_id('ca-email').value=p.email||'';
  if(_id('ca-addr')&&p.address)_id('ca-addr').value=p.address;
  if(_id('ca-pd-id'))_id('ca-pd-id').value=p.id||'';
  var idst=_id('pd-id-status');if(idst)idst.textContent='✓ Linked';
  var r=_id('pd-results');if(r){r.style.display='none';r.innerHTML='';}
  var st=_id('pd-status');if(st)st.textContent='';
  if(pdSearchAbort){try{pdSearchAbort.abort();}catch(e){}pdSearchAbort=null;}
  toast('✓ Customer loaded from Pipedrive');
  calc();
}

function escHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

function buildBidBar(){
  var h='<div id="bid-bar" style="margin-top:12px;background:#f8fafc;border:1.5px solid var(--bd);border-radius:var(--r);padding:10px 12px">';
  h+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">';
  h+='<span style="font-size:10px;font-weight:800;color:var(--tx3);text-transform:uppercase;letter-spacing:.5px;white-space:nowrap">BIDS</span>';
  for(var i=0;i<bids.length;i++){
    var isActive=(i===activeBidIdx);
    h+='<div style="display:flex;align-items:center;gap:2px;background:'+(isActive?'var(--bl)':'#fff')+';border:1.5px solid '+(isActive?'var(--bl)':'var(--bd)')+';border-radius:6px;padding:4px 8px;cursor:pointer" onclick="switchBid('+i+')">';
    if(isActive){
      h+='<input id="bid-name-'+i+'" value="'+escHtml(bids[i].name)+'" style="background:transparent;border:none;outline:none;font-size:12px;font-weight:700;color:#fff;width:'+(Math.max(bids[i].name.length,4)*8+8)+'px;cursor:text" onclick="event.stopPropagation()" onblur="renameBid('+i+',this.value)" onkeydown="if(event.key===\'Enter\')this.blur()">';
    }else{
      h+='<span style="font-size:12px;font-weight:700;color:var(--navy);pointer-events:none">'+escHtml(bids[i].name)+'</span>';
    }
    if(bids.length>1)h+='<span onclick="event.stopPropagation();deleteBid('+i+')" style="color:'+(isActive?'rgba(255,255,255,.7)':'var(--rd)')+';font-size:11px;cursor:pointer;margin-left:2px">&#x2715;</span>';
    h+='</div>';
  }
  h+='<button onclick="addBid()" style="padding:4px 10px;background:#fff;border:1.5px dashed var(--bl);border-radius:6px;color:var(--bl);font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap">+ New Bid</button>';
  h+='</div></div>';
  return h;
}
function switchBid(idx){
  if(idx===activeBidIdx)return;
  // Cancel any in-flight PD search so stale results don't bleed into new bid
  if(pdSearchAbort){try{pdSearchAbort.abort();}catch(e){}pdSearchAbort=null;}
  var r=_id('pd-results');if(r){r.style.display='none';r.innerHTML='';}
  var st=_id('pd-status');if(st)st.textContent='';
  bids[activeBidIdx].state=captureFormState();
  bids[activeBidIdx].activeLoans=activeLoans.slice();
  activeBidIdx=idx;
  var bid=bids[activeBidIdx];
  activeLoans=bid.activeLoans?bid.activeLoans.slice():[];
  if(bid.state){restoreFormState(bid.state);}else{resetCAForm();}
  var wrap=_id('bid-bar-wrap');if(wrap){wrap.innerHTML=buildBidBar();}else{renderCA();}
}
function addBid(){
  bids[activeBidIdx].state=captureFormState();
  bids[activeBidIdx].activeLoans=activeLoans.slice();
  bids.push({id:Date.now(),name:'Bid '+(bids.length+1),state:null,activeLoans:[]});
  activeBidIdx=bids.length-1;
  activeLoans=[];resetCAForm();
  var wrap=_id('bid-bar-wrap');if(wrap){wrap.innerHTML=buildBidBar();}else{renderCA();}
  toast('New bid tab added');
}
function deleteBid(idx){
  if(bids.length<=1){toast('Cannot delete the only bid');return;}
  if(!confirm('Delete bid "'+bids[idx].name+'"?'))return;
  bids.splice(idx,1);
  if(activeBidIdx>=bids.length)activeBidIdx=bids.length-1;
  var bid=bids[activeBidIdx];
  activeLoans=bid.activeLoans?bid.activeLoans.slice():[];
  if(bid.state){restoreFormState(bid.state);}else{resetCAForm();}
  var wrap=_id('bid-bar-wrap');if(wrap){wrap.innerHTML=buildBidBar();}else{renderCA();}
  toast('Bid deleted');
}
function renameBid(idx,newName){
  newName=(newName||'').trim();if(!newName)newName='Bid '+(idx+1);
  bids[idx].name=newName;
  var wrap=_id('bid-bar-wrap');if(wrap)wrap.innerHTML=buildBidBar();
}
function resetCAForm(){
  // Only reset system/pricing/financing fields — NEVER touch customer identity fields
  var resetIds=['ca-desc','ca-notes','ca-si','ca-di','ca-fed','ca-lease-total','ca-lease-monthly','ca-lease-ppw'];
  for(var i=0;i<resetIds.length;i++){var el=_id(resetIds[i]);if(el)el.value='';}
  var siEl=_id('ca-si');if(siEl)siEl.value='0';
  var diEl=_id('ca-di');if(diEl)diEl.value='0';
  // Reset system type, service panel, inverter, battery, panel selects
  var selIds=['ca-sys','ca-svc'];
  for(var j=0;j<selIds.length;j++){var sel=_id(selIds[j]);if(sel)sel.selectedIndex=0;}
  // Reset sold state
  setSoldState(false);
  activeLoans=[];renderLoanRows();calc();
  // These fields are intentionally preserved on bid switch:
  // ca-cust, ca-phone, ca-addr, ca-email, ca-pd-id, ca-aurora-id,
  // ca-aurora-layout-url, ca-date, ca-jur, ca-cobuyer, cb-cobuyer
}

// Close dropdown when clicking outside
document.addEventListener('click',function(e){
  var wrap=document.querySelector('#pd-results');
  if(wrap&&!wrap.contains(e.target)&&e.target.id!=='ca-cust'){
    wrap.style.display='none';
  }
});

// ══════════════════════════════════════════════════════
// SOLD STATE
// ══════════════════════════════════════════════════════
var isSold=false;
function setSoldState(val){
  isSold=val;
  var soldBtn=_id('btn-sold');
  var closingDocs=_id('closing-docs-section');
  if(soldBtn){
    if(isSold){
      soldBtn.textContent='✅ SOLD — Click to Unmark';
      soldBtn.style.background='linear-gradient(135deg,#16a34a,#15803d)';
      soldBtn.style.color='#fff';
      soldBtn.style.border='none';
      soldBtn.style.boxShadow='0 4px 16px rgba(22,163,74,0.35)';
    }else{
      soldBtn.textContent='🤝 Mark as Sold';
      soldBtn.style.background='transparent';
      soldBtn.style.color='#6060a0';
      soldBtn.style.border='2px dashed #3a3a5a';
      soldBtn.style.boxShadow='none';
    }
  }
  if(closingDocs){closingDocs.style.display=isSold?'block':'none';}
}
function toggleSold(){setSoldState(!isSold);}

// ══════════════════════════════════════════════════════
// AURORA INTEGRATION
// ══════════════════════════════════════════════════════
function onAuroraIdManualInput(){
  // When user manually types an Aurora ID, show the Fetch Layout button
  var aId=_id('ca-aurora-id')?_id('ca-aurora-id').value.trim():'';
  var btnLayout=_id('btn-aurora-layout');
  if(btnLayout){btnLayout.style.display=aId?'block':'none';}
  // If ID was cleared, also hide the aurora status
  if(!aId){
    var st=_id('aurora-status');if(st)st.style.display='none';
  }
}

function createAuroraProject(){
  var name=_id('ca-cust')?_id('ca-cust').value.trim():'';
  var addr=_id('ca-addr')?_id('ca-addr').value.trim():'';
  if(!name){toast('Enter customer name first');return;}
  if(!addr){toast('Enter property address first');return;}

  var btn=_id('btn-aurora');
  var st=_id('aurora-status');
  if(btn){btn.disabled=true;btn.textContent='Creating in Aurora...';}
  if(st){st.style.display='block';st.style.background='#fef9c3';st.style.color='#854d0e';st.textContent='Creating project in Aurora...';}

  var payload={
    name: name,
    address: addr,
    phone: _id('ca-phone')?_id('ca-phone').value:'',
    email: _id('ca-email')?_id('ca-email').value:'',
    pd_id: _id('ca-pd-id')?_id('ca-pd-id').value:''
  };

  fetch('https://pell-solar-contract-api.onrender.com/create-aurora-project',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  })
  .then(function(res){return res.json();})
  .then(function(data){
    if(data.aurora_id){
      if(_id('ca-aurora-id'))_id('ca-aurora-id').value=data.aurora_id;
      if(st){st.style.background='#dcfce7';st.style.color='#166534';st.textContent='✓ Created in Aurora! ID: '+data.aurora_id;}
      if(btn){btn.disabled=false;btn.textContent='✓ In Aurora — Update';}
      // Show fetch layout button now that we have an Aurora ID
      var btnLayout=_id('btn-aurora-layout');if(btnLayout)btnLayout.style.display='block';
      toast('✓ Project created in Aurora');
    } else {
      var errMsg=(data.error||'Unknown error');
      if(data.details)errMsg+=' — '+data.details;
      throw new Error(errMsg);
    }
  })
  .catch(function(err){
    var msg=err.message||'Unknown error';
    if(st){st.style.background='#fee2e2';st.style.color='#991b1b';st.textContent='✗ Aurora error: '+msg;}
    if(btn){btn.disabled=false;btn.innerHTML='&#x2600;&#xFE0F; CREATE IN AURORA';}
    console.error('Aurora create error:',msg);
    toast('Aurora error: '+msg);
  });
}

function fetchAuroraLayout(){
  var aId=_id('ca-aurora-id')?_id('ca-aurora-id').value.trim():'';
  if(!aId){toast('Create Aurora project first');return;}
  var btn=_id('btn-aurora-layout');
  if(btn){btn.disabled=true;btn.textContent='Fetching layout...';}
  fetch('https://pell-solar-contract-api.onrender.com/get-aurora-design?aurora_id='+encodeURIComponent(aId))
  .then(function(res){return res.json();})
  .then(function(data){
    if(data.layout_url){
      if(_id('ca-aurora-layout-url'))_id('ca-aurora-layout-url').value=data.layout_url;
      var img=_id('aurora-layout-img');if(img){img.src=data.layout_url;}
      var preview=_id('aurora-layout-preview');if(preview)preview.style.display='block';
      if(btn){btn.style.display='none';}
      toast('✓ Aurora layout loaded');
    } else {
      throw new Error(data.error||'No layout available yet — try after designing in Aurora');
    }
  })
  .catch(function(err){
    if(btn){btn.disabled=false;btn.textContent='⟳ FETCH AURORA LAYOUT';}
    toast('Aurora layout: '+err.message);
  });
}

function clearAuroraLayout(){
  if(_id('ca-aurora-layout-url'))_id('ca-aurora-layout-url').value='';
  var img=_id('aurora-layout-img');if(img)img.src='';
  var preview=_id('aurora-layout-preview');if(preview)preview.style.display='none';
  var btn=_id('btn-aurora-layout');if(btn){btn.style.display='block';btn.disabled=false;btn.textContent='🖼 FETCH AURORA LAYOUT';}
}

function toggleDateMode(){
  window._dateModeAuto=!window._dateModeAuto;
  var btn=_id('btn-date-mode');
  var dateEl=_id('ca-date');
  var blankRow=_id('ca-date-blank-row');
  var blankCb=_id('cb-date-blank');
  if(window._dateModeAuto){
    // Back to auto — lock field, set today, hide blank option
    if(btn){btn.textContent='AUTO';btn.style.background='#2BABE2';}
    if(dateEl){
      var now=new Date();
      dateEl.value=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
      dateEl.readOnly=true;dateEl.style.background='var(--bg)';dateEl.style.color='var(--tx3)';dateEl.style.cursor='default';
    }
    if(blankRow)blankRow.style.display='none';
    if(blankCb)blankCb.checked=false;
  }else{
    // Custom mode — unlock field, show blank option
    if(btn){btn.textContent='CUSTOM';btn.style.background='#FED44D';btn.style.color='#0d3a52';}
    if(dateEl){
      dateEl.readOnly=false;dateEl.style.background='';dateEl.style.color='';dateEl.style.cursor='';
    }
    if(blankRow)blankRow.style.display='block';
  }
}

function onDateBlankChange(){
  var blankCb=_id('cb-date-blank');
  var dateEl=_id('ca-date');
  if(!dateEl)return;
  if(blankCb&&blankCb.checked){
    dateEl.value='';dateEl.readOnly=true;dateEl.style.background='var(--bg)';dateEl.style.color='var(--tx3)';
  }else{
    dateEl.readOnly=false;dateEl.style.background='';dateEl.style.color='';
  }
}

// ─── Utility Bill Functions ───────────────────────────────────────────────────

// ─── Drag & Drop Handlers ─────────────────────────────────────────────────────
function billDragOver(e,zoneId){
  e.preventDefault();e.stopPropagation();
  var el=_id(zoneId);
  if(el){el.style.background=zoneId==='drop-pdf'?'rgba(43,171,226,.18)':'rgba(34,197,94,.18)';el.style.borderStyle='solid';}
}
function billDragLeave(zoneId){
  var el=_id(zoneId);
  if(el){el.style.background=zoneId==='drop-pdf'?'rgba(43,171,226,.06)':'rgba(34,197,94,.06)';el.style.borderStyle='dashed';}
}
function billDrop(e,type){
  e.preventDefault();e.stopPropagation();
  var zoneId=type==='pdf'?'drop-pdf':'drop-csv';
  billDragLeave(zoneId);
  var files=e.dataTransfer&&e.dataTransfer.files;
  if(!files||!files.length)return;
  var file=files[0];
  if(type==='pdf'&&file.type!=='application/pdf'&&!file.name.toLowerCase().endsWith('.pdf')){
    setBillStatus('✗ Please drop a PDF file','#dc2626');return;
  }
  if(type==='csv'&&!file.name.toLowerCase().endsWith('.csv')){
    setBillStatus('✗ Please drop a CSV file','#dc2626');return;
  }
  var fakeInput={files:[file],value:''};
  if(type==='pdf')handleBillPDF(fakeInput);
  else handleBillCSV(fakeInput);
}

function setBillStatus(msg, color){
  var el=_id('bill-status');
  if(!el)return;
  if(msg){el.style.display='block';el.style.background=color||'rgba(43,171,226,.1)';el.style.color=color?'#fff':'#1a8ab8';el.textContent=msg;}
  else{el.style.display='none';}
}

function renderBillResults(data){
  // Store to hidden fields
  var avg=data.avg_monthly_bill||0;
  var annual=data.annual_kwh||0;
  var monthly=data.monthly_kwh||0;
  var rate=data.rate_per_kwh||0;
  var source=data.source||'manual';
  var monthlyArr=data.monthly_array||null;

  if(_id('ca-bill-avg'))_id('ca-bill-avg').value=avg;
  if(_id('ca-bill-annual-kwh'))_id('ca-bill-annual-kwh').value=annual;
  if(_id('ca-bill-rate'))_id('ca-bill-rate').value=rate;
  if(_id('ca-bill-monthly-json'))_id('ca-bill-monthly-json').value=monthlyArr?JSON.stringify(monthlyArr):'';
  if(_id('ca-bill-source'))_id('ca-bill-source').value=source;

  // Update display tiles
  if(_id('bill-disp-avg'))_id('bill-disp-avg').textContent=avg?'$'+parseFloat(avg).toFixed(2):'—';
  if(_id('bill-disp-annual'))_id('bill-disp-annual').textContent=annual?Math.round(annual).toLocaleString()+' kWh':'—';
  if(_id('bill-disp-monthly'))_id('bill-disp-monthly').textContent=monthly?Math.round(monthly).toLocaleString()+' kWh':'—';
  if(_id('bill-disp-rate'))_id('bill-disp-rate').textContent=rate?'$'+parseFloat(rate).toFixed(4):'—';

  // Monthly breakdown
  if(monthlyArr&&monthlyArr.length){
    var wrap=_id('bill-monthly-wrap');if(wrap)wrap.style.display='block';
    var detail=_id('bill-monthly-detail');
    if(detail){
      var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var html='';
      for(var i=0;i<monthlyArr.length;i++){
        html+='<span style="display:inline-block;width:48%;margin-bottom:2px"><b>'+(months[i]||'M'+(i+1))+':</b> '+Math.round(monthlyArr[i]).toLocaleString()+' kWh</span>';
      }
      detail.innerHTML=html;
    }
  }

  // Show results, hide status
  var res=_id('bill-results');if(res)res.style.display='block';
  setBillStatus('');

  // Populate edit fields
  if(_id('bill-edit-avg'))_id('bill-edit-avg').value=avg?parseFloat(avg).toFixed(2):'';
  if(_id('bill-edit-annual'))_id('bill-edit-annual').value=annual?Math.round(annual):'';
  if(_id('bill-edit-monthly'))_id('bill-edit-monthly').value=monthly?Math.round(monthly):'';
  if(_id('bill-edit-rate'))_id('bill-edit-rate').value=rate?parseFloat(rate).toFixed(4):'';
}

function handleBillPDF(input){
  var file=input.files&&input.files[0];
  if(!file)return;
  setBillStatus('⏳ Reading bill…','#1a8ab8');
  var res=_id('bill-results');if(res)res.style.display='none';
  var reader=new FileReader();
  reader.onload=function(e){
    var base64=e.target.result.split(',')[1];
    fetch('https://pell-solar-contract-api.onrender.com/parse-utility-bill',{
      method:'POST',
      headers:{'Content-Type':'application/json','X-API-Key':'d2e921f58677a977c276a466dedb9177'},
      body:JSON.stringify({pdf_base64:base64,filename:file.name})
    })
    .then(function(r){if(!r.ok)return r.json().then(function(e){throw new Error(e.error||'API error '+r.status);});return r.json();})
    .then(function(data){
      data.source='pdf';
      if(!data.monthly_kwh&&data.annual_kwh)data.monthly_kwh=data.annual_kwh/12;
      renderBillResults(data);
      setBillStatus('✓ PDF parsed successfully','#15803d');
      setTimeout(function(){setBillStatus('');},3000);
    })
    .catch(function(err){setBillStatus('✗ '+err.message,'#dc2626');});
  };
  reader.readAsDataURL(file);
  input.value='';
}

function handleBillCSV(input){
  var file=input.files&&input.files[0];
  if(!file)return;
  setBillStatus('⏳ Reading CSV…','#1a8ab8');
  var res=_id('bill-results');if(res)res.style.display='none';
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var text=e.target.result;
      var lines=text.split('\n').map(function(l){return l.trim();}).filter(function(l){return l;});
      // Find header row
      var headerIdx=-1;
      for(var i=0;i<lines.length;i++){
        if(lines[i].toLowerCase().indexOf('date')>=0&&(lines[i].toLowerCase().indexOf('kwh')>=0||lines[i].toLowerCase().indexOf('consumption')>=0)){
          headerIdx=i;break;
        }
      }
      if(headerIdx<0){setBillStatus('✗ Could not find data columns in CSV','#dc2626');return;}
      var headers=lines[headerIdx].split(',').map(function(h){return h.trim().toLowerCase().replace(/"/g,'');});
      var dateCol=-1,kwhCol=-1;
      for(var i=0;i<headers.length;i++){
        if(headers[i].indexOf('date')>=0||headers[i].indexOf('start')>=0)dateCol=dateCol<0?i:dateCol;
        if(headers[i].indexOf('kwh')>=0||headers[i].indexOf('consumption')>=0||headers[i].indexOf('value')>=0)kwhCol=kwhCol<0?i:kwhCol;
      }
      if(kwhCol<0){setBillStatus('✗ No kWh column found','#dc2626');return;}

      // Parse rows into {date, kwh}
      var rows=[];
      for(var i=headerIdx+1;i<lines.length;i++){
        var cols=lines[i].split(',').map(function(c){return c.trim().replace(/"/g,'');});
        var kwh=parseFloat(cols[kwhCol]);
        if(isNaN(kwh)||kwh<0)continue;
        var dt=dateCol>=0?new Date(cols[dateCol]):null;
        rows.push({dt:dt,kwh:kwh});
      }
      if(!rows.length){setBillStatus('✗ No valid data rows found','#dc2626');return;}

      // Aggregate by month (year-month key), take most recent 12 months
      var monthly={};
      for(var i=0;i<rows.length;i++){
        var r=rows[i];
        var key=r.dt?r.dt.getFullYear()+'-'+String(r.dt.getMonth()+1).padStart(2,'0'):'unknown-'+i;
        monthly[key]=(monthly[key]||0)+r.kwh;
      }
      var keys=Object.keys(monthly).sort();
      var last12=keys.slice(-12);
      var monthlyArr=last12.map(function(k){return Math.round(monthly[k]*10)/10;});
      // Pad to 12 if fewer months
      while(monthlyArr.length<12)monthlyArr.unshift(0);

      var annualKwh=monthlyArr.reduce(function(a,b){return a+b;},0);
      var avgMonthlyKwh=annualKwh/12;
      var rateCents=parseFloat((_id('ca-bill-rate-cents')||{value:'41'}).value)||41;
      var ratePerKwh=rateCents/100;
      var avgMonthlyBill=avgMonthlyKwh*ratePerKwh;

      // Show rate row
      var rateRow=_id('bill-rate-row');if(rateRow)rateRow.style.display='block';

      // Store CSV data globally for recalc
      window._csvMonthlyArr=monthlyArr;
      window._csvAnnualKwh=annualKwh;
      window._csvAvgMonthlyKwh=avgMonthlyKwh;

      renderBillResults({
        avg_monthly_bill:avgMonthlyBill.toFixed(2),
        annual_kwh:Math.round(annualKwh),
        monthly_kwh:Math.round(avgMonthlyKwh),
        rate_per_kwh:ratePerKwh.toFixed(4),
        source:'csv',
        monthly_array:monthlyArr
      });
      setBillStatus('✓ CSV parsed — '+last12.length+' months found','#15803d');
      setTimeout(function(){setBillStatus('');},3000);
    }catch(err){setBillStatus('✗ Parse error: '+err.message,'#dc2626');}
  };
  reader.readAsText(file);
  input.value='';
}

function recalcCSVBill(){
  if(!window._csvMonthlyArr)return;
  var rateCents=parseFloat((_id('ca-bill-rate-cents')||{value:'41'}).value)||41;
  var ratePerKwh=rateCents/100;
  var avgMonthlyBill=window._csvAvgMonthlyKwh*ratePerKwh;
  if(_id('ca-bill-avg'))_id('ca-bill-avg').value=avgMonthlyBill.toFixed(2);
  if(_id('ca-bill-rate'))_id('ca-bill-rate').value=ratePerKwh.toFixed(4);
  if(_id('bill-disp-avg'))_id('bill-disp-avg').textContent='$'+avgMonthlyBill.toFixed(2);
  if(_id('bill-disp-rate'))_id('bill-disp-rate').textContent='$'+ratePerKwh.toFixed(4);
  if(_id('bill-edit-avg'))_id('bill-edit-avg').value=avgMonthlyBill.toFixed(2);
  if(_id('bill-edit-rate'))_id('bill-edit-rate').value=ratePerKwh.toFixed(4);
}

function toggleBillMonthly(){
  var detail=_id('bill-monthly-detail');
  var btn=_id('bill-monthly-wrap')&&_id('bill-monthly-wrap').querySelector('div');
  if(!detail)return;
  if(detail.style.display==='none'||!detail.style.display){
    detail.style.display='block';
    if(btn)btn.textContent='▼ Monthly Breakdown';
  }else{
    detail.style.display='none';
    if(btn)btn.textContent='▶ Monthly Breakdown';
  }
}

function toggleBillEdit(){
  var fields=_id('bill-edit-fields');
  var btn=_id('btn-bill-edit');
  if(!fields)return;
  var open=fields.style.display==='block';
  fields.style.display=open?'none':'block';
  if(btn)btn.textContent=open?'✏ Edit':'✏ Done';
}

function applyBillEdit(){
  var avg=parseFloat((_id('bill-edit-avg')||{value:0}).value)||0;
  var annual=parseFloat((_id('bill-edit-annual')||{value:0}).value)||0;
  var monthly=parseFloat((_id('bill-edit-monthly')||{value:0}).value)||0;
  var rate=parseFloat((_id('bill-edit-rate')||{value:0}).value)||0;
  if(_id('ca-bill-avg'))_id('ca-bill-avg').value=avg;
  if(_id('ca-bill-annual-kwh'))_id('ca-bill-annual-kwh').value=annual;
  if(_id('ca-bill-rate'))_id('ca-bill-rate').value=rate;
  if(_id('ca-bill-source'))_id('ca-bill-source').value='manual';
  if(_id('bill-disp-avg'))_id('bill-disp-avg').textContent=avg?'$'+avg.toFixed(2):'—';
  if(_id('bill-disp-annual'))_id('bill-disp-annual').textContent=annual?Math.round(annual).toLocaleString()+' kWh':'—';
  if(_id('bill-disp-monthly'))_id('bill-disp-monthly').textContent=monthly?Math.round(monthly).toLocaleString()+' kWh':'—';
  if(_id('bill-disp-rate'))_id('bill-disp-rate').textContent=rate?'$'+rate.toFixed(4):'—';
}

function clearBillData(){
  ['ca-bill-avg','ca-bill-annual-kwh','ca-bill-rate','ca-bill-monthly-json','ca-bill-source'].forEach(function(id){var el=_id(id);if(el)el.value='';});
  window._csvMonthlyArr=null;window._csvAnnualKwh=0;window._csvAvgMonthlyKwh=0;
  var res=_id('bill-results');if(res)res.style.display='none';
  var rateRow=_id('bill-rate-row');if(rateRow)rateRow.style.display='none';
  var fields=_id('bill-edit-fields');if(fields)fields.style.display='none';
  var btn=_id('btn-bill-edit');if(btn)btn.textContent='✏ Edit';
  setBillStatus('');
  // Reset file inputs
  var pdf=_id('up-bill-pdf');if(pdf)pdf.value='';
  var csv=_id('up-bill-csv');if(csv)csv.value='';
}

function restoreBillDisplay(){
  var avg=(_id('ca-bill-avg')||{value:''}).value;
  var annual=(_id('ca-bill-annual-kwh')||{value:''}).value;
  var rate=(_id('ca-bill-rate')||{value:''}).value;
  var monthlyJson=(_id('ca-bill-monthly-json')||{value:''}).value;
  var source=(_id('ca-bill-source')||{value:''}).value;
  if(!avg&&!annual)return;
  var monthlyArr=null;
  try{if(monthlyJson)monthlyArr=JSON.parse(monthlyJson);}catch(e){}
  var monthly=monthlyArr?monthlyArr.reduce(function(a,b){return a+b;},0)/12:0;
  renderBillResults({
    avg_monthly_bill:avg,annual_kwh:annual,monthly_kwh:Math.round(monthly),
    rate_per_kwh:rate,source:source,monthly_array:monthlyArr
  });
  if(source==='csv'){
    var rateRow=_id('bill-rate-row');if(rateRow)rateRow.style.display='block';
    if(monthlyArr){window._csvMonthlyArr=monthlyArr;window._csvAnnualKwh=parseFloat(annual)||0;window._csvAvgMonthlyKwh=monthly;}
  }
}

function gatherPDFData(){
  var d={};
  // Fully null-safe helpers
  function selTxt(id){var el=_id(id);if(!el)return '';if(!el.options||el.selectedIndex<0)return el.value||'';var o=el.options[el.selectedIndex];return o?o.text:'';}
  function elTxt(id){var el=_id(id);return el?(el.textContent||''):'';}
  function elVal(id){var el=_id(id);return el?(el.value||''):'';}
  function safeMoney(s){return(s&&s!=='')?s:'$0';}

  // System info
  d.sysType=elVal('ca-sys');
  d.auroraLayoutUrl=elVal('ca-aurora-layout-url')||'';
  d.sysDesc=selTxt('ca-sys')||'';
  d.svc=selTxt('ca-svc')||'200A';
  d.jur=elVal('ca-jur')||'';
  d.custName=elVal('ca-cust')||'';
  d.projDesc=elVal('ca-desc')||'';

  // Panel — only exists for non-battonly systems
  d.panel=selTxt('cs-panels')||'';
  d.panelQty=elVal('cq-panels')||'0';
  var panEl=_id('cs-panels');var panId=panEl?(parseInt(panEl.value)||0):0;var panItem=null;
  for(var i=0;i<D.panels.length;i++){if(D.panels[i].id===panId){panItem=D.panels[i];break;}}
  var watts=panItem?(panItem.w*(parseInt(d.panelQty)||0)):0;
  d.watts=watts;d.kw=(watts/1000).toFixed(2);
  d.panelModel=panItem?(panItem.model||''):'';

  // Read row values — all safe with fallback to $0
  d.panelCost=safeMoney(elTxt('cv-panels'));
  d.rackingCost=safeMoney(elTxt('cv-racking'));
  d.optimizerCost=safeMoney(elTxt('cv-optimizer'));
  d.laborCost=safeMoney(elTxt('cv-labor'));
  d.laborDesc=elTxt('lb-desc')||'';
  d.rackingName=elTxt('rk-name')||'';
  // Get model numbers for PDF
  var rkEl=_id('cs-racking');var rkId=rkEl?(parseInt(rkEl.value)||0):0;var rkItem=null;
  for(var ri=0;ri<D.racking.length;ri++){if(D.racking[ri].id===rkId){rkItem=D.racking[ri];break;}}
  d.rackingModel=rkItem?(rkItem.model||''):'';
  d.optName=elTxt('opt-name')||'';
  var optEl=_id('cs-optimizer');var optId=optEl?(parseInt(optEl.value)||0):0;var optItem2=null;
  for(var oi=0;oi<D.optimizers.length;oi++){if(D.optimizers[oi].id===optId){optItem2=D.optimizers[oi];break;}}
  d.optModel=optItem2?(optItem2.model||''):'';

  // Inverter (solar only)
  d.invCost='$0';d.invName='';d.invQty='1';d.invModel='';
  if(d.sysType==='solaronly'){
    d.invName=selTxt('cs-sinv')||'';
    var sinvEl=_id('cs-sinv');var sinvId=sinvEl?(parseInt(sinvEl.value)||0):0;var sinvItem=null;
    for(var si=0;si<D.string_inv.length;si++){if(D.string_inv[si].id===sinvId){sinvItem=D.string_inv[si];break;}}
    d.invModel=sinvItem?(sinvItem.model||''):'';
    d.invQty=elVal('cq-sinv')||'1';
    d.invCost=safeMoney(elTxt('cv-sinv'));
  }

  // Microinverter model for enphase/tesla systems
  if(d.sysType!=='solaronly'){
    var miEl=_id('cs-inverters');var miId=miEl?(parseInt(miEl.value)||0):0;var miItem=null;
    for(var mi=0;mi<D.inverters.length;mi++){if(D.inverters[mi].id===miId){miItem=D.inverters[mi];break;}}
    d.microModel=miItem?(miItem.model||''):'';
    d.microCost=safeMoney(elTxt('cv-inverters'));
    d.microName=miItem?(miItem.d||selTxt('cs-inverters')||''):'';
  }else{d.microModel='';d.microName='';d.microCost='$0';}

  // Battery — tesla or battonly
  d.battPkg='';d.battCost='$0';d.battLabor='$0';d.battLaborDesc='';d.battSpecs='';
  if(d.sysType==='tesla'||d.sysType==='battonly'){
    d.battPkg=selTxt('cs-tpkg')||'';
    d.battCost=safeMoney(elTxt('cv-tpkg'));
    d.battLabor=safeMoney(elTxt('cv-tlabor'));
    d.battLaborDesc=elTxt('tlab-name')||'';
    d.battSpecs=elTxt('tpkg-info')||'';
    // Build battery parts breakdown for PDF
    d.battParts=[];
    var tpkgEl2=_id('cs-tpkg');var tpkgId2=tpkgEl2?(parseInt(tpkgEl2.value)||0):0;var tpkg2=null;
    for(var ti=0;ti<D.tesla_pkgs.length;ti++){if(D.tesla_pkgs[ti].id===tpkgId2){tpkg2=D.tesla_pkgs[ti];break;}}
    d.battQty=tpkg2?tpkg2.batt:0;
    if(tpkg2){
      var g=D.comp;
      if(tpkg2.pw3>0)d.battParts.push({qty:tpkg2.pw3,desc:g.tesla_pw3.sku||g.tesla_pw3.d,model:g.tesla_pw3.model||''});
      if(tpkg2.exp>0){
        d.battParts.push({qty:tpkg2.exp,desc:g.tesla_exp_batt.sku||g.tesla_exp_batt.d,model:g.tesla_exp_batt.model||''});
        d.battParts.push({qty:tpkg2.exp,desc:g.tesla_exp_harness.sku||g.tesla_exp_harness.d,model:g.tesla_exp_harness.model||''});
        d.battParts.push({qty:tpkg2.exp,desc:g.tesla_exp_wall.sku||g.tesla_exp_wall.d,model:g.tesla_exp_wall.model||''});
      }
      if(tpkg2.gw>0)d.battParts.push({qty:tpkg2.gw,desc:g.tesla_gw.sku||g.tesla_gw.d,model:g.tesla_gw.model||''});
      if(tpkg2.sm>0){
        d.battParts.push({qty:tpkg2.sm,desc:g.tesla_bsw.sku||g.tesla_bsw.d,model:g.tesla_bsw.model||''});
        d.battParts.push({qty:tpkg2.sm,desc:g.tesla_rem.sku||g.tesla_rem.d,model:g.tesla_rem.model||''});
      }
    }
    // Stacking kit info for PDF
    d.stackChecked=false;d.stackQty=0;
    var stackCbPdf=_id('cb-tstack');if(stackCbPdf&&stackCbPdf.checked){d.stackChecked=true;d.stackQty=Math.floor((tpkg2?tpkg2.batt:0)/2);d.stackCost=safeMoney(elTxt('cv-tstack'));}
    // RSD info for PDF
    d.rsdChecked=false;
    var rsdCbPdf=_id('cb-trsd');if(rsdCbPdf&&rsdCbPdf.checked){d.rsdChecked=true;d.rsdCost=safeMoney(elTxt('cv-trsd'));}
  }
  if(d.sysType==='enphase'){
    var e5pEl2=_id('cs-e5ppkg');var e5pId2=e5pEl2?(parseInt(e5pEl2.value)||0):0;var e5pItem2=null;
    for(var i=0;i<D.enphase_5p_pkgs.length;i++){if(D.enphase_5p_pkgs[i].id===e5pId2){e5pItem2=D.enphase_5p_pkgs[i];break;}}
    d.battPkg=e5pItem2?e5pItem2.d:'';
    d.battCost=safeMoney(elTxt('cv-e5ppkg'));
    d.battLabor=safeMoney(elTxt('cv-e5plabor'));
    d.battLaborDesc=elTxt('e5plab-name')||'';
    d.battSpecs=elTxt('e5ppkg-info')||'';
    d.battQty=e5pItem2?e5pItem2.batt:0;
    d.battParts=[];
    if(e5pItem2){
      var g=D.comp;
      d.battParts.push({qty:e5pItem2.batt,desc:g.enph_bat5p.sku,model:g.enph_bat5p.model});
      d.battParts.push({qty:1,desc:g.enph_ctrl3m.sku,model:g.enph_ctrl3m.model});
      var comb2=(e5pItem2.comb==='c5c')?g.enph_comb5c:g.enph_comb5;
      d.battParts.push({qty:1,desc:comb2.sku,model:comb2.model});
      if(g.enph_ctrl_cable&&g.enph_ctrl_cable.c>0)d.battParts.push({qty:1,desc:g.enph_ctrl_cable.sku,model:g.enph_ctrl_cable.model});
      if(g.enph_comms_kit&&g.enph_comms_kit.c>0)d.battParts.push({qty:1,desc:g.enph_comms_kit.sku,model:g.enph_comms_kit.model});
    }
  }
  if(d.sysType==='franklin'){
    var fwhEl2=_id('cs-fwhpkg');var fwhVal2=fwhEl2?fwhEl2.value:'';var fwhItem2=null;
    if(fwhVal2){var fp2=fwhVal2.split('-');var ft2=fp2[0];var fi2=parseInt(fp2[1])||0;var fa2=(ft2==='aps')?D.franklin_aps_pkgs:D.franklin_ap2_pkgs;for(var i=0;i<fa2.length;i++){if(fa2[i].id===fi2){fwhItem2=fa2[i];break;}}}
    d.battPkg=fwhItem2?fwhItem2.d:'';
    d.battCost=safeMoney(elTxt('cv-fwhpkg'));
    d.battLabor=safeMoney(elTxt('cv-fwhlabor'));
    d.battLaborDesc=elTxt('fwhlab-name')||'';
    d.battSpecs=elTxt('fwhpkg-info')||'';
    d.battQty=fwhItem2?fwhItem2.batt:0;
    d.battParts=[];
    if(fwhItem2){
      var g=D.comp;var isTps=fwhVal2.startsWith('aps');
      var bat2=isTps?g.fwh_aps:g.fwh_ap2;
      d.battParts.push({qty:fwhItem2.batt,desc:bat2.sku,model:bat2.model});
      var bkeys2=['fwh_agate','fwh_mac','fwh_ct200','fwh_apbox','fwh_lugkit','fwh_mainrelay','fwh_eqb'];
      for(var i=0;i<bkeys2.length;i++){var bc2=g[bkeys2[i]];if(bc2)d.battParts.push({qty:1,desc:bc2.sku,model:bc2.model});}
      var ahubCb2=_id('cb-fwh-ahub');if(ahubCb2&&ahubCb2.checked)d.battParts.push({qty:1,desc:g.fwh_ahub.sku,model:g.fwh_ahub.model});
      var scCb2=_id('cb-fwh-sc');if(scCb2&&scCb2.checked)d.battParts.push({qty:1,desc:g.fwh_smartcirc.sku,model:g.fwh_smartcirc.model});
      var gmCb2=_id('cb-fwh-gen');if(gmCb2&&gmCb2.checked)d.battParts.push({qty:1,desc:g.fwh_genmod.sku,model:g.fwh_genmod.model});
    }
  }

  // Project costs
  d.permitCost=safeMoney(elTxt('cv-permits'));
  d.permitName=selTxt('cs-permits')||'';
  d.ssCost=safeMoney(elTxt('cv-sitesurvey'));
  d.nemCost=safeMoney(elTxt('cv-xnem'));
  d.nemName=selTxt('cs-xnem')||'';
  d.faviCost=safeMoney(elTxt('cv-favi'));
  d.officeCost=safeMoney(elTxt('cv-office'));

  // Add-ons — iterate activeAddons array instead of querying non-existent IDs
  d.addons=[];
  for(var ai=0;ai<activeAddons.length;ai++){
    var akey=activeAddons[ai];
    var costTxt=elTxt('cv-'+akey);
    if(costTxt&&costTxt!=='$0'&&costTxt!==''){
      var aLabel=akey;
      for(var aj=0;aj<ADDON_CATALOG.length;aj++){if(ADDON_CATALOG[aj].key===akey){aLabel=ADDON_CATALOG[aj].label;break;}}
      d.addons.push({name:aLabel,cost:costTxt});
    }
  }

  // Totals from stat cards
  d.jobCost=safeMoney(elTxt('sb-jc'));
  d.costPW=elTxt('sb-wc')||'$0';
  d.retailPW=elTxt('sb-wr')||'$0';
  d.margin=safeMoney(elTxt('sb-mg'));
  var mgRaw=_id('sb-mg');d.marginDollar='';d.marginPct='';if(mgRaw){var mgParts=mgRaw.innerHTML.split('<div');d.marginDollar=mgParts[0].trim();var pctMatch=mgRaw.textContent.match(/[\d.]+%/);d.marginPct=pctMatch?pctMatch[0]:'';}
  d.subtotal=safeMoney(elTxt('cv-sub'));

  // Sale & deposit — correct ID is ca-si not ca-sp
  d.sale=elVal('ca-si')||'0';d.saleFmt=fm(parseFloat(d.sale)||0);
  d.deposit=elVal('ca-di')||'0';d.depositFmt=fm(parseFloat(d.deposit)||0);
  d.balance=fm((parseFloat(d.sale)||0)-(parseFloat(d.deposit)||0));

  // Financing — read from the add-on row cs-fin (not ca-fin)
  d.finName='';d.finFee='0%';d.finTotal=d.saleFmt;d.monthlyPay='';d.finTermMo='';
  d.commName='';d.commAmt='$0';d.commBreakdown=[];
  var commSelEl=_id('cs-salesperson');
  if(commSelEl&&commSelEl.value){
    var commId=parseInt(commSelEl.value)||0;
    var commSpIt=null;
    for(var i=0;i<D.salesteam.length;i++){if(D.salesteam[i].id===commId){commSpIt=D.salesteam[i];d.commName=D.salesteam[i].d;d.commAmt=safeMoney(elTxt('cv-commission'));break;}}
    if(commSpIt){
      var cKw=d.watts/1000;
      var cSolar=cKw>0?commSpIt.rate*cKw:0;
      if(cSolar>0)d.commBreakdown.push({lbl:'Solar: '+cKw.toFixed(1)+' kW \u00D7 $'+commSpIt.rate+'/kW',amt:fm(cSolar)});
      // Battery bonus only if battery actually selected
      var cBattSel=false;
      var cTpkg=_id('cs-tpkg');if(cTpkg&&parseInt(cTpkg.value)>0)cBattSel=true;
      if(cBattSel&&commSpIt.battBonus>0)d.commBreakdown.push({lbl:'Battery Bonus',amt:'+'+fm(commSpIt.battBonus)});
      // Generator bonus only if generator actually selected
      for(var cai=0;cai<activeAddons.length;cai++){if(activeAddons[cai]==='generators'){var cGenSel=_id('cs-generators');if(cGenSel&&parseInt(cGenSel.value)>0&&commSpIt.genBonus>0)d.commBreakdown.push({lbl:'Generator Bonus',amt:'+'+fm(commSpIt.genBonus)});break;}}
    }
  }
  var totalFinRate=0;var pdfFinItem=null;var pdfSacItem=null;
  var finSelEl=_id('cs-fin');
  if(finSelEl){
    var finId=parseInt(finSelEl.value)||0;
    if(finId){for(var i=0;i<D.financing.length;i++){if(D.financing[i].id===finId){d.finName=D.financing[i].d;totalFinRate+=D.financing[i].c;pdfFinItem=D.financing[i];break;}}}
  }
  var sacSelEl=_id('cs-sac');
  if(sacSelEl){
    var sacId=parseInt(sacSelEl.value)||0;
    if(sacId){for(var i=0;i<D.samecash.length;i++){if(D.samecash[i].id===sacId){d.finName=(d.finName?d.finName+' + ':'')+D.samecash[i].d;totalFinRate+=D.samecash[i].c;pdfSacItem=D.samecash[i];break;}}}
  }
  if(totalFinRate>0){d.finFee=(totalFinRate*100).toFixed(1)+'%';var saleNum2=parseFloat(d.sale)||0;d.finFeeDollar=fm(saleNum2*totalFinRate);d.finTotal=fm(saleNum2*(1+totalFinRate));}else{d.finFeeDollar='$0';}
  var pdfFinTotNum=parseFloat((d.finTotal||'0').replace(/[$,]/g,''))||0;
  if(pdfFinItem&&pdfFinItem.f1>0){d.monthlyPay=fm(pdfFinTotNum*pdfFinItem.f1)+'/mo';d.finTermMo=pdfFinItem.term+' months';}
  else if(pdfSacItem&&pdfSacItem.f1>0){d.monthlyPay=fm(pdfFinTotNum*pdfSacItem.f1)+'/mo';d.finTermMo=pdfSacItem.term+' months';}

  // Fed credit
  var fed=D.cfg.fed||0;
  var fedPct=fed*100;d.fedPct=fedPct.toFixed(0)+'%';
  var saleNum=parseFloat(d.sale)||0;
  var finTotalNum=parseFloat((d.finTotal||'0').replace(/[$,]/g,''))||saleNum;
  var depNum=parseFloat(d.deposit)||0;
  d.cashCredit=fm(saleNum*fed);d.finCredit=fm(finTotalNum*fed);
  d.cashNet=fm(saleNum-depNum-(saleNum*fed));
  d.finNet=fm(finTotalNum-depNum-(finTotalNum*fed));

  // Date — auto mode stamps today; custom mode uses field value (may be blank if "Leave blank" checked)
  var today=new Date();
  var dateEl=_id('ca-date');
  var rawDate=dateEl?dateEl.value:'';
  if(!rawDate&&!window._dateModeAuto){
    d.date=''; // intentionally blank for post-dating
  }else{
    d.date=rawDate||(((today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear()));
  }
  d.customer=d.custName;
  var addrEl=_id('ca-addr');d.address=addrEl?addrEl.value:'';
  var phoneEl=_id('ca-phone');d.phone=phoneEl?phoneEl.value:'';
  var notesEl=_id('ca-notes');d.notes=notesEl?notesEl.value:'';
  var tsEl2=_id('ca-timestamp');d.timestamp=tsEl2?tsEl2.value:'';
  d.bollardsChecked=false;d.bollardsCost='$0';d.bollardsQty=1;
  var bollCbPdf=_id('cb-bollards');if(bollCbPdf&&bollCbPdf.checked){d.bollardsChecked=true;d.bollardsCost=safeMoney(elTxt('cv-bollards'));var bollQtyPdf=_id('cs-bollards-qty');d.bollardsQty=bollQtyPdf?parseInt(bollQtyPdf.value)||1:1;}
  // Co-buyer
  var coBuyerCbPdf=_id('cb-cobuyer');var coBuyerElPdf=_id('ca-cobuyer');
  d.coBuyerName=(coBuyerCbPdf&&coBuyerCbPdf.checked&&coBuyerElPdf)?coBuyerElPdf.value.trim():'';
  d.smokeDetChecked=false;d.smokeDetCost='$0';
  var smokeCbPdf=_id('cb-smokedet');if(smokeCbPdf&&smokeCbPdf.checked){d.smokeDetChecked=true;d.smokeDetCost=safeMoney(elTxt('cv-smokedet'));}
  d.ccAddon=false;d.ccAddonCost='$0';d.ccAddonFeet=0;
  var ccCb=_id('cb-cc-addon');if(ccCb&&ccCb.checked){d.ccAddon=true;d.ccAddonCost=safeMoney(elTxt('cv-cc-addon'));var ccFtEl=_id('cs-cc-feet');d.ccAddonFeet=ccFtEl?parseInt(ccFtEl.value)||0:0;}
  d.ccStandalone=(d.sysType==='carcharger');d.ccSaCost='$0';d.ccSaContractor='$0';d.ccSaProfit='$0';d.ccSaFeet=0;
  if(d.ccStandalone){d.ccSaContractor=safeMoney(elTxt('cv-cc-sa'));var ccFtSa=_id('cs-cc-feet-sa');d.ccSaFeet=ccFtSa?parseInt(ccFtSa.value)||5:5;d.ccSaProfit=safeMoney(D.cfg.cc_owner_profit||1000);d.ccSaCost=safeMoney(pMoney(d.ccSaContractor)+pMoney(d.ccSaProfit));}
  d.leaseTotal=parseFloat(d.sale)||0;d.leaseTotalFmt=fm(d.leaseTotal);
  var lmEl=_id('ca-lease-monthly');d.leaseMonthly=lmEl?parseFloat(lmEl.value.replace(/[^0-9.]/g,''))||0:0;d.leaseMonthlyFmt=d.leaseMonthly>0?fm(d.leaseMonthly)+'/mo':'';
  d.isLease=false;for(var li=0;li<activeLoans.length;li++){if(activeLoans[li]==='lease')d.isLease=true;}

  return d;
}


// ===== COMMISSION STATEMENT PDF =====
function genCommissionPDF(){
  var d=gatherPDFData();
  if(!d.commName){toast('No salesperson selected');return;}
  
  // Get commission details
  var spEl=_id('cs-salesperson');
  var spId=parseInt(spEl?spEl.value:0)||0;
  var spIt=null;for(var i=0;i<D.salesteam.length;i++){if(D.salesteam[i].id===spId){spIt=D.salesteam[i];break;}}
  if(!spIt){toast('Salesperson not found');return;}
  
  var sysKw=(parseFloat(d.watts)||0)/1000;
  var commTotal=spIt.rate*sysKw;
  
  var w=window.open('','_blank','width=800,height=900');
  var h='<!DOCTYPE html><html><head><title>Commission Statement — '+d.commName+'</title>';
  h+=pdfStyle();
  h+='<style>.comm-card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:12px}';
  h+='.comm-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#64748b;font-weight:700;margin-bottom:4px}';
  h+='.comm-val{font-size:14px;font-weight:600;color:#1a1a2e}';
  h+='.comm-big{font-size:28px;font-weight:800;color:#15803d}';
  h+='.comm-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}';
  h+='.comm-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #e2e8f0}';
  h+='.comm-row:last-child{border-bottom:none}';
  h+='.comm-row .lbl{font-size:12px;color:#64748b}';
  h+='.comm-row .val{font-size:13px;font-weight:600;color:#1a1a2e}';
  h+='</style></head><body>';
  
  // Header
  h+='<div class="hdr"><div class="hdr-left">';
  h+='<img class="hdr-logo" src="'+PELL_LOGO+'">';
  h+='<div><div class="hdr-title">Commission Statement</div><div class="hdr-sub">Pell Solar \u2022 Confidential</div></div>';
  h+='</div><div class="hdr-right"><div class="hdr-date">'+d.date+'</div></div></div>';
  
  h+='<div style="padding:24px 28px">';
  
  // Salesperson & Project Info
  h+='<div class="comm-grid" style="margin-bottom:20px">';
  h+='<div class="comm-card"><div class="comm-label">Salesperson</div><div class="comm-val" style="font-size:20px;font-weight:800;color:var(--navy,#1a1a2e)">'+d.commName+'</div>';
  h+='<div style="margin-top:6px;font-size:12px;color:#64748b">Rate: $'+spIt.rate.toFixed(2)+' per kW</div></div>';
  h+='<div class="comm-card"><div class="comm-label">Customer</div><div class="comm-val">'+d.customer+'</div>';
  h+='<div style="margin-top:4px;font-size:12px;color:#64748b">'+(d.phone||'')+(d.phone&&d.address?' | ':'')+(d.address||'\u2014')+'</div>';
  h+='<div style="margin-top:4px;font-size:12px;color:#64748b">'+d.jur+'</div></div>';
  h+='</div>';
  
  // System Details
  h+='<div class="sec"><div class="sec-title navy">System Details</div>';
  h+='<div class="comm-grid">';
  h+='<div class="comm-row"><span class="lbl">System Type</span><span class="val">'+d.sysDesc+'</span></div>';
  h+='<div class="comm-row"><span class="lbl">System Size</span><span class="val">'+sysKw.toFixed(1)+' kW ('+(d.watts||'0')+'W)</span></div>';
  if(d.panel)h+='<div class="comm-row"><span class="lbl">Panels</span><span class="val">'+d.panel+' \u00D7 '+d.panelQty+'</span></div>';
  if(d.battPkg)h+='<div class="comm-row"><span class="lbl">Battery</span><span class="val">'+d.battPkg+'</span></div>';
  h+='<div class="comm-row"><span class="lbl">Service Panel</span><span class="val">'+d.svc+'</span></div>';
  h+='</div></div>';
  
  // Commission Breakdown
  // Commission Breakdown — only count bonuses when items are actually selected
  var solarComm2=spIt.rate*sysKw;
  var battActual2=false;
  if(d.battPkg&&d.battPkg!==''&&d.battPkg!=='\u2014 Select \u2014'&&d.battCost!=='$0')battActual2=true;
  var battComm2=battActual2?(spIt.battBonus||0):0;
  var genComm2=0;
  for(var ai=0;ai<activeAddons.length;ai++){if(activeAddons[ai]==='generators'){var genSelPdf=_id('cs-generators');if(genSelPdf&&parseInt(genSelPdf.value)>0)genComm2=spIt.genBonus||0;break;}}
  var commTotal2=solarComm2+battComm2+genComm2;
  
  h+='<div class="sec"><div class="sec-title green">Commission Breakdown</div>';
  h+='<div style="padding:8px 0">';
  if(sysKw>0){
    h+='<div class="comm-row"><span class="lbl">Solar: '+sysKw.toFixed(1)+' kW \u00D7 $'+spIt.rate.toFixed(2)+'/kW</span><span class="val">'+fm(solarComm2)+'</span></div>';
  }
  if(battComm2>0){
    h+='<div class="comm-row"><span class="lbl">Battery Bonus</span><span class="val" style="color:#15803d">+'+fm(battComm2)+'</span></div>';
  }
  if(genComm2>0){
    h+='<div class="comm-row"><span class="lbl">Generator Bonus</span><span class="val" style="color:#15803d">+'+fm(genComm2)+'</span></div>';
  }
  h+='<div class="comm-row" style="border-top:2px solid #15803d;border-bottom:none;padding-top:12px;margin-top:8px"><span style="font-size:14px;font-weight:800;color:#15803d">TOTAL COMMISSION</span><span class="comm-big">'+fm(commTotal2)+'</span></div>';
  h+='</div></div>';
  
  // Project Pricing (reference only, no cost details)
  h+='<div class="sec"><div class="sec-title navy">Project Reference</div>';
  h+='<div class="comm-row"><span class="lbl">Sale Price</span><span class="val">'+d.saleFmt+'</span></div>';
  if(d.finName)h+='<div class="comm-row"><span class="lbl">Financing</span><span class="val">'+d.finName+'</span></div>';
  h+='</div>';
  
  // Footer
  h+='<div style="margin-top:30px;padding-top:16px;border-top:1px solid #e2e8f0;text-align:center;color:#94a3b8;font-size:10px">This document is confidential and intended for internal use only. \u00A9 Pell Solar '+new Date().getFullYear()+'</div>';
  
  h+='</div></body></html>';
  w.document.write(h);w.document.close();
  setTimeout(function(){w.print();},400);
}

// ===== SITE SURVEY PDF =====
function genSiteSurveyPDF(){
  try{
  var d=gatherPDFData();
  if(!d){alert('gatherPDFData returned null');return;}
  var h='<!DOCTYPE html><html><head><title>Pell Solar - Site Survey</title>'+pdfStyle()+'</head><body>';

  // Header
  h+='<div class="hdr"><div class="hdr-left">';
  if(typeof PELL_LOGO!=='undefined')h+='<img src="'+PELL_LOGO+'" class="hdr-logo">';
  h+='<div class="hdr-info"><div class="hdr-co">License #949122 &nbsp;|&nbsp; Tesla Certified Installer</div><div class="addr">1326 Monte Vista Ave #7, Upland, CA 91786</div></div></div>';
  h+='<div class="hdr-right"><div class="hdr-title">SITE SURVEY</div><div class="hdr-contact">(866) 646-8499 &nbsp;|&nbsp; (714) 880-4416<br>pellsolar.com</div></div></div>';
  h+='<div class="gold-line"></div><div class="content">';

  // Customer & Project Info
  h+='<div class="sec"><div class="sec-title gold">Customer & Project Information</div>';
  h+='<div class="info-grid">';
  h+='<div><span class="lbl">Customer</span><span class="val" style="font-weight:800">'+d.custName+'</span></div>';
  h+='<div><span class="lbl">Phone</span><span class="val">'+(d.phone||'\u2014')+'</span></div>';
  h+='<div><span class="lbl">Address</span><span class="val" style="font-size:11px">'+(d.address||'\u2014')+'</span></div>';
  h+='<div><span class="lbl">Date</span><span class="val">'+d.date+'</span></div>';
  h+='<div><span class="lbl">System Type</span><span class="val">'+d.sysDesc+'</span></div>';
  h+='<div><span class="lbl">Service Panel</span><span class="val">'+d.svc+'</span></div>';
  h+='<div><span class="lbl">Jurisdiction</span><span class="val">'+d.jur+'</span></div>';
  h+='<div><span class="lbl">Description</span><span class="val" style="font-size:11px">'+d.projDesc+'</span></div>';
  h+='</div></div>';

  // System Specifications
  h+='<div class="sec"><div class="sec-title blue">System Specifications</div>';
  h+='<div class="info-grid">';
  if(d.panel&&d.sysType!=='battonly'){
    h+='<div><span class="lbl">Solar Panels</span><span class="val">'+d.panel+'</span></div>';
    h+='<div><span class="lbl">Panel Count</span><span class="val">'+d.panelQty+' panels</span></div>';
    h+='<div><span class="lbl">System Size</span><span class="val">'+d.kw+' kW ('+d.watts+'W)</span></div>';
  }
  if(d.optName&&d.optName!=='auto')h+='<div><span class="lbl">Optimizer</span><span class="val">'+d.optName+'</span></div>';
  if(d.rackingName&&d.sysType!=='battonly')h+='<div><span class="lbl">Racking</span><span class="val">'+d.rackingName+' \u00D7 '+d.panelQty+'</span></div>';
  if(d.invName)h+='<div><span class="lbl">Inverter</span><span class="val">'+d.invName+' \u00D7 '+(d.invQty||'1')+'</span></div>';
  if(d.microName)h+='<div><span class="lbl">Microinverter</span><span class="val">'+d.microName+' \u00D7 '+d.panelQty+'</span></div>';
  if(d.battPkg){
    h+='<div><span class="lbl">Battery Package</span><span class="val" style="color:#7c3aed;font-weight:700">'+d.battPkg+'</span></div>';
    if(d.battSpecs&&d.battSpecs!=='Select above')h+='<div><span class="lbl">Storage</span><span class="val">'+d.battSpecs+'</span></div>';
  }
  h+='</div></div>';

  // Equipment List (detailed)
  h+='<div class="sec"><div class="sec-title navy">Equipment & Materials</div>';
  h+='<table><thead><tr><th>Item</th><th>Description</th><th>Part #</th><th class="r">Qty</th></tr></thead><tbody>';
  if(d.sysType!=='battonly'){
    if(d.panel)h+='<tr><td>Solar Panels</td><td>'+d.panel+'</td><td class="part">'+d.panelModel+'</td><td class="r">'+d.panelQty+'</td></tr>';
    if(d.rackingName)h+='<tr><td>Racking</td><td>'+d.rackingName+'</td><td class="part">'+d.rackingModel+'</td><td class="r">'+d.panelQty+'</td></tr>';
    if(d.optName&&d.optName!=='auto')h+='<tr><td>Optimizer</td><td>'+d.optName+'</td><td class="part">'+d.optModel+'</td><td class="r">1</td></tr>';
    if(d.invName)h+='<tr><td>Inverter</td><td>'+d.invName+'</td><td class="part">'+(d.invModel||'')+'</td><td class="r">'+(d.invQty||'1')+'</td></tr>';
    if(d.microName)h+='<tr><td>Microinverter</td><td>'+d.microName+'</td><td class="part">'+d.microModel+'</td><td class="r">'+d.panelQty+'</td></tr>';
  }
  if(d.battPkg){
    h+='<tr class="cat-row"><td colspan="4">BATTERY SYSTEM</td></tr>';
    h+='<tr><td>Battery Package</td><td>'+d.battPkg+'</td><td></td><td class="r">1</td></tr>';
    if(d.battParts&&d.battParts.length>0){for(var bp=0;bp<d.battParts.length;bp++){var pt=d.battParts[bp];h+='<tr style="color:#64748b;font-size:10px"><td style="padding-left:24px">'+pt.desc+'</td><td></td><td class="part">'+pt.model+'</td><td class="r">'+pt.qty+'</td></tr>';}}
    if(d.stackChecked)h+='<tr><td>Stacking Kit</td><td>PW3 Expansion Stacking Kit</td><td class="part">'+D.comp.tesla_exp_stack.model+'</td><td class="r">'+d.stackQty+'</td></tr>';
    if(d.rsdChecked)h+='<tr><td>Rapid Shutdown</td><td>MCI/RSD Gen 2</td><td class="part">'+D.comp.tesla_rsd.model+'</td><td class="r">1</td></tr>';
  }
  h+='</tbody></table></div>';

  // Project Scope (what work is being done — no pricing)
  h+='<div class="sec"><div class="sec-title green">Project Scope</div>';
  h+='<div class="scope-box">';
  h+='<div class="scope-cat">Installation</div>';
  if(d.laborDesc&&d.sysType!=='battonly')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Solar Installation: '+d.laborDesc+'</span></div>';
  if(d.battLaborDesc)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Battery Installation: '+d.battLaborDesc+'</span></div>';
  h+='<div class="scope-cat" style="margin-top:8px">Project Administration</div>';
  if(d.permitName)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Permits: '+d.permitName+'</span></div>';
  if(d.nemName)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>NEM: '+d.nemName+'</span></div>';
  if(d.ssCost!=='$0')h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Site Survey: Sol Source</span></div>';
  // Add-ons
  if(d.addons.length>0||d.bollardsChecked||d.smokeDetChecked){
    h+='<div class="scope-cat" style="margin-top:8px">Additional Work</div>';
    for(var ai=0;ai<d.addons.length;ai++){h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>'+d.addons[ai].name+'</span></div>';}
    if(d.bollardsChecked)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Bollards \u2014 Garage Installation</span></div>';
    if(d.smokeDetChecked)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Smoke Detectors \u2014 Garage Installation</span></div>';
    if(d.ccAddon)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Car Charger \u2014 EV Charger ('+d.ccAddonFeet+' ft)</span></div>';
    if(d.ccStandalone)h+='<div class="scope-item"><span class="scope-bullet">&bull;</span><span>Car Charger \u2014 Standalone EV Charger ('+d.ccSaFeet+' ft)</span></div>';
  }
  h+='</div></div>';

  // Aurora Layout Image (if available)
  if(d.auroraLayoutUrl){
    h+='<div class="sec"><div class="sec-title" style="color:#f97316;border-color:#f97316">☀ Aurora Solar Design Layout</div>';
    h+='<div style="text-align:center;padding:8px 0">';
    h+='<img src="'+d.auroraLayoutUrl+'" style="max-width:100%;border-radius:8px;border:1px solid #fed7aa" onerror="this.style.display=\'none\'">';
    h+='</div></div>';
  }

  // Notes
  var notesTxt='';
  if(d.battPkg&&d.battSpecs&&d.battSpecs!=='Select above')notesTxt+=d.battPkg+' | '+d.battSpecs;
  if(d.bollardsChecked)notesTxt+=(notesTxt?' | ':'')+'Bollards: Garage';
  if(d.smokeDetChecked)notesTxt+=(notesTxt?' | ':'')+'Smoke Detectors: Garage';
  if(d.notes)notesTxt+=(notesTxt?'\n':'')+'Notes: '+d.notes;
  h+='<div class="sec"><div class="sec-title navy">Notes</div>';
  h+='<div class="notes-box" style="min-height:80px;white-space:pre-wrap">'+notesTxt+'</div></div>';

  // Footer
  h+='</div><div class="ftr"><span>Pell Solar, Inc. &nbsp;|&nbsp; 1326 Monte Vista Ave #7, Upland, CA 91786 &nbsp;|&nbsp; (866) 646-8499 &nbsp;|&nbsp; pellsolar.com</span><span>'+(d.timestamp||d.date)+'</span></div>';
  h+='</body></html>';

  var w=window.open('','_blank','width=850,height=1100');
  if(!w||w.closed){alert('Popup blocked! Please allow popups for pellsolar.com and try again.');return;}
  w.document.write(h);w.document.close();
  setTimeout(function(){w.print();},500);
  }catch(e){alert('Site Survey PDF Error: '+e.message);}
}

// ===== GENERATE PROPOSAL — solar_pro_2435_v3_22 =====

// Modal HTML — injected into DOM on first open
function ensureProposalModal(){
  if(_id('proposalMo'))return;
  var div=document.createElement('div');
  div.innerHTML='<div class="mo" id="proposalMo"><div class="modal" style="width:520px;max-width:95vw"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px"><div style="font-size:20px;font-weight:800;color:var(--navy)">&#x1F4E4; Generate Proposal</div><span onclick="closeProposalModal()" style="cursor:pointer;font-size:20px;color:var(--tx3)">&#x2715;</span></div><div id="prop-preview" style="background:var(--bg);border-radius:var(--rs);padding:12px 14px;margin-bottom:14px;font-size:13px;line-height:1.7;color:var(--tx)"></div><div style="margin-bottom:14px"><div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--tx3);letter-spacing:.5px;margin-bottom:8px">Proposal Valid For</div><div style="display:flex;gap:8px"><button class="prop-exp-btn" data-days="20" onclick="setPropExpiry(20)" style="flex:1;padding:8px;border:1.5px solid var(--bd);border-radius:var(--rs);background:#fff;color:var(--navy);font-weight:700;font-size:12px;cursor:pointer">20 Days</button><button class="prop-exp-btn" data-days="25" onclick="setPropExpiry(25)" style="flex:1;padding:8px;border:1.5px solid var(--bl);border-radius:var(--rs);background:rgba(43,171,226,.08);color:var(--bl);font-weight:700;font-size:12px;cursor:pointer">25 Days &#x2713;</button><button class="prop-exp-btn" data-days="30" onclick="setPropExpiry(30)" style="flex:1;padding:8px;border:1.5px solid var(--bd);border-radius:var(--rs);background:#fff;color:var(--navy);font-weight:700;font-size:12px;cursor:pointer">30 Days</button></div><div id="prop-expiry-display" style="font-size:11px;color:var(--tx3);margin-top:6px;text-align:center"></div></div><div id="prop-bill-warn" style="display:none;background:#FEF3C7;border:1px solid #F59E0B;border-radius:var(--rs);padding:10px 12px;margin-bottom:12px;font-size:12px;color:#92400E">&#x26A0;&#xFE0F; <b>No utility bill data.</b> Upload a bill or CSV in the &#x26A1; Utility Data section for accurate savings numbers. You can still generate &mdash; the proposal will use placeholder values.</div><div id="prop-output-wrap" style="display:none"><div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--tx3);letter-spacing:.5px;margin-bottom:6px">BID Object &mdash; Copy into proposal HTML</div><textarea id="prop-output" readonly style="width:100%;height:180px;font-family:monospace;font-size:10px;background:#0d1117;color:#e6edf3;border:1px solid #30363d;border-radius:var(--rs);padding:10px;resize:none;line-height:1.5;box-sizing:border-box"></textarea><div style="display:flex;gap:8px;margin-top:8px"><button onclick="copyBIDOutput()" style="flex:1;padding:9px;border:none;border-radius:var(--rs);background:var(--gn);color:#fff;font-weight:700;font-size:12px;cursor:pointer">&#x1F4CB; Copy BID Block</button><button onclick="downloadBIDOutput()" style="flex:1;padding:9px;border:1px solid var(--bd);border-radius:var(--rs);background:#fff;color:var(--navy);font-weight:700;font-size:12px;cursor:pointer">&#x2B07; Download .js</button></div><div id="prop-copy-confirm" style="display:none;text-align:center;color:var(--gn);font-size:12px;font-weight:700;margin-top:6px">&#x2713; Copied to clipboard!</div></div><button onclick="runGenerateProposalBID()" id="btn-gen-bid" style="width:100%;padding:13px;border:none;border-radius:var(--rs);background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;font-weight:700;font-size:13px;cursor:pointer;margin-top:4px;letter-spacing:.5px;box-sizing:border-box">&#x26A1; BUILD BID OBJECT</button></div></div>';
  document.body.appendChild(div.firstChild);
  document.getElementById('proposalMo').addEventListener('click',function(e){if(e.target===this)closeProposalModal();});
}

var _propExpiryDays=25;

function openProposalModal(){
  ensureProposalModal();
  var name=(_id('ca-cust')||{}).value||'';
  if(!name.trim()){toast('Enter customer name first');return;}
  var addr=(_id('ca-addr')||{}).value||'—';
  var sysEl=_id('ca-sys');
  var sys=sysEl&&sysEl.options&&sysEl.selectedIndex>=0?sysEl.options[sysEl.selectedIndex].text:'—';
  var sale=parseFloat((_id('ca-si')||{}).value)||0;
  var prev=_id('prop-preview');
  if(prev)prev.innerHTML='<b>'+escHtml(name)+'</b> &nbsp;&middot;&nbsp; '+escHtml(addr)+'<br>System: '+escHtml(sys)+' &nbsp;&middot;&nbsp; Sale: '+fm(sale);
  var hasBill=!!((_id('ca-bill-avg')||{}).value);
  var warn=_id('prop-bill-warn');if(warn)warn.style.display=hasBill?'none':'block';
  var outWrap=_id('prop-output-wrap');if(outWrap)outWrap.style.display='none';
  var conf=_id('prop-copy-confirm');if(conf)conf.style.display='none';
  setPropExpiry(_propExpiryDays);
  _id('proposalMo').classList.add('show');
}

function closeProposalModal(){
  var mo=_id('proposalMo');if(mo)mo.classList.remove('show');
}

function setPropExpiry(days){
  _propExpiryDays=days;
  var btns=document.querySelectorAll('.prop-exp-btn');
  for(var i=0;i<btns.length;i++){
    var d=parseInt(btns[i].dataset.days);
    var active=(d===days);
    btns[i].style.borderColor=active?'var(--bl)':'var(--bd)';
    btns[i].style.background=active?'rgba(43,171,226,.08)':'#fff';
    btns[i].style.color=active?'var(--bl)':'var(--navy)';
    btns[i].textContent=d+' Days'+(active?' \u2713':'');
  }
  var exp=new Date();exp.setDate(exp.getDate()+days);
  var disp=_id('prop-expiry-display');
  if(disp)disp.textContent='Expires: '+exp.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
}

function runGenerateProposalBID(){
  var btn=_id('btn-gen-bid');
  if(btn){btn.textContent='\u23F3 Building...';btn.disabled=true;}
  try{
    var bid=generateProposalBID();
    var output=_id('prop-output');if(output)output.value=bid;
    var wrap=_id('prop-output-wrap');if(wrap)wrap.style.display='block';
  }catch(e){alert('Error building BID: '+e.message);}
  finally{if(btn){btn.textContent='\u26A1 BUILD BID OBJECT';btn.disabled=false;}}
}

function generateProposalBID(){
  function elVal(id){var el=_id(id);return el?(el.value||''):''}
  function pf(v){return parseFloat(v)||0;}
  function pi(v){return parseInt(v)||0;}

  var custName=elVal('ca-cust').trim();
  if(!custName)throw new Error('Customer name is required');
  var custAddr=elVal('ca-addr').trim();

  var repMap={'Admin':'Josh Pellzer','Josh':'Josh Pellzer','admin':'Josh Pellzer'};
  var rawUser=(currentUser&&currentUser.u)?currentUser.u:'';
  var repName=repMap[rawUser]||rawUser||'Josh Pellzer';

  var rawDate=elVal('ca-date');var custDate='';
  if(rawDate){
    var dp=rawDate.split('-');
    if(dp.length===3){var mo=['January','February','March','April','May','June','July','August','September','October','November','December'];custDate=mo[parseInt(dp[1])-1]+' '+parseInt(dp[2])+', '+dp[0];}
  }
  if(!custDate){var n=new Date();var mo2=['January','February','March','April','May','June','July','August','September','October','November','December'];custDate=mo2[n.getMonth()]+' '+n.getDate()+', '+n.getFullYear();}

  var expDate=new Date();expDate.setDate(expDate.getDate()+_propExpiryDays);
  var expISO=expDate.getFullYear()+'-'+String(expDate.getMonth()+1).padStart(2,'0')+'-'+String(expDate.getDate()).padStart(2,'0')+'T23:59:00';

  var sysTypeRaw=elVal('ca-sys');
  var sysType=(sysTypeRaw==='battonly')?'battery_only':'solar';

  var finType='cash';
  for(var li=0;li<activeLoans.length;li++){
    if(activeLoans[li]==='lease'){finType='lease';break;}
    if(activeLoans[li]==='fin')finType='finance';
    if(activeLoans[li]==='sac'&&finType!=='finance')finType='finance';
  }

  var auroraId=elVal('ca-aurora-id').trim();

  var panelQty=pi(elVal('cq-panels'));
  var panelSel=_id('cs-panels');var panelId=panelSel?pi(panelSel.value):0;
  var panItem=null;for(var i=0;i<D.panels.length;i++){if(D.panels[i].id===panelId){panItem=D.panels[i];break;}}
  var panelW=panItem?panItem.w:0;
  var kwDC=Math.round(panelQty*panelW/1000*100)/100;
  var kwAC=Math.round(kwDC*0.97*100)/100;
  var panelModel=panItem?(panItem.model||panItem.d||''):'';
  var panelPart=panItem?(panItem.model||''):'';

  var invModel='';var invPart='';
  if(sysTypeRaw==='solaronly'){
    var sinvEl=_id('cs-sinv');var sinvId=sinvEl?pi(sinvEl.value):0;var sinvItem=null;
    for(var i=0;i<D.string_inv.length;i++){if(D.string_inv[i].id===sinvId){sinvItem=D.string_inv[i];break;}}
    invModel=sinvItem?(sinvItem.model||sinvItem.d||''):'';invPart=sinvItem?(sinvItem.model||''):'';
  }else{
    var miEl=_id('cs-inverters');var miId=miEl?pi(miEl.value):0;var miItem=null;
    for(var i=0;i<D.inverters.length;i++){if(D.inverters[i].id===miId){miItem=D.inverters[i];break;}}
    invModel=miItem?(miItem.model||miItem.d||''):'';invPart=miItem?(miItem.model||''):'';
  }

  var rkEl=_id('cs-racking');var rkId=rkEl?pi(rkEl.value):0;var rkItem=null;
  for(var i=0;i<D.racking.length;i++){if(D.racking[i].id===rkId){rkItem=D.racking[i];break;}}
  var rackModel=rkItem?(rkItem.model||rkItem.d||''):'';
  var rackPart=rkItem?(rkItem.model||''):'';

  var battModel='';var battPart='';var battQty=0;var battKwh=0;
  if(sysTypeRaw==='tesla'||sysTypeRaw==='battonly'){
    var tpkgEl=_id('cs-tpkg');var tpkgId=tpkgEl?pi(tpkgEl.value):0;var tpkg=null;
    for(var i=0;i<D.tesla_pkgs.length;i++){if(D.tesla_pkgs[i].id===tpkgId){tpkg=D.tesla_pkgs[i];break;}}
    if(tpkg){battQty=tpkg.batt||0;battKwh=tpkg.kwh?Math.round(tpkg.kwh/(battQty||1)*10)/10:13.5;battModel=tpkg.exp>0?'Tesla Powerwall 3 + Expansion':'Tesla Powerwall 3';battPart=D.comp&&D.comp.tesla_pw3?D.comp.tesla_pw3.model:'1707000-XX-Y';}
  }else if(sysTypeRaw==='enphase'){
    var e5pEl=_id('cs-e5ppkg');var e5pId=e5pEl?pi(e5pEl.value):0;var e5pItem=null;
    for(var i=0;i<D.enphase_5p_pkgs.length;i++){if(D.enphase_5p_pkgs[i].id===e5pId){e5pItem=D.enphase_5p_pkgs[i];break;}}
    if(e5pItem){battQty=e5pItem.batt||0;battKwh=5;battModel='Enphase IQ Battery 5P';battPart=D.comp&&D.comp.enph_bat5p?D.comp.enph_bat5p.model:'IQBATTERY-5P-1P-NA-DOM-NFC';}
  }else if(sysTypeRaw==='franklin'){
    var fwhEl=_id('cs-fwhpkg');var fwhVal=fwhEl?fwhEl.value:'';var fwhItem=null;
    if(fwhVal){var fp2=fwhVal.split('-');var fa2=(fp2[0]==='aps')?D.franklin_aps_pkgs:D.franklin_ap2_pkgs;var fi2=pi(fp2[1]);for(var i=0;i<fa2.length;i++){if(fa2[i].id===fi2){fwhItem=fa2[i];break;}}}
    if(fwhItem){battQty=fwhItem.batt||0;battKwh=15;battModel=fwhVal.startsWith('aps')?'Franklin aPower S':'Franklin aPower 2';battPart=battModel==='Franklin aPower S'?'APRS-10K15V1-US':'APR-10K15V2-US';}
  }

  var salePrice=pf(elVal('ca-si'));
  var fedPct=D.cfg?(D.cfg.fed||0):0.30;
  var credit=Math.round(salePrice*fedPct);
  var netPrice=salePrice-credit;

  var monthlyLoan=0;var monthlySac=0;
  var finSelEl=_id('cs-fin');
  if(finSelEl&&pi(finSelEl.value)){
    var finId=pi(finSelEl.value);var finItem=null;
    for(var i=0;i<D.financing.length;i++){if(D.financing[i].id===finId){finItem=D.financing[i];break;}}
    if(finItem&&finItem.f1>0)monthlyLoan=Math.round(salePrice*(1+(finItem.c||0))*finItem.f1);
  }
  var sacSelEl=_id('cs-sac');
  if(sacSelEl&&pi(sacSelEl.value)){
    var sacId=pi(sacSelEl.value);var sacItem=null;
    for(var i=0;i<D.samecash.length;i++){if(D.samecash[i].id===sacId){sacItem=D.samecash[i];break;}}
    if(sacItem&&sacItem.f1>0)monthlySac=Math.round(salePrice*(1+(sacItem.c||0))*sacItem.f1);
  }
  var leaseMonthly=pf(elVal('ca-lease-monthly').replace(/[^0-9.]/g,''));

  var billAvg=pf(elVal('ca-bill-avg'));
  var billKwh=pf(elVal('ca-bill-annual-kwh'));
  var billRate=pf(elVal('ca-bill-rate'));
  var monthlyKwh=[0,0,0,0,0,0,0,0,0,0,0,0];
  var monthlyJson=elVal('ca-bill-monthly-json');
  if(monthlyJson){try{var parsed=JSON.parse(monthlyJson);if(Array.isArray(parsed)&&parsed.length===12)monthlyKwh=parsed.map(function(v){return Math.round(pf(v));});}catch(e){}}
  if(!monthlyJson&&billKwh>0){var seas=[0.82,0.78,0.85,0.90,1.00,1.12,1.20,1.18,1.10,0.95,0.83,0.77];var sSum=seas.reduce(function(a,b){return a+b;},0);monthlyKwh=seas.map(function(s){return Math.round(billKwh*s/sSum);});}

  var annualKwhProduced=Math.round(kwDC*1400);
  var offsetPct=billKwh>0?Math.round(annualKwhProduced/billKwh*100):0;

  var now=new Date();
  var stamp=now.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})+' '+now.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true});

  var L=[];
  L.push('// solar_pro_2435_v3_22 — Generated '+stamp);
  L.push('// Customer: '+custName+'  ·  Rep: '+repName);
  L.push('// Expires: '+expISO.split('T')[0]+' ('+_propExpiryDays+' days)  ·  Aurora: '+(auroraId||'not set'));
  L.push('');
  L.push('const BID = {');
  L.push('  customer: {');
  L.push('    name:    "'+custName.replace(/"/g,'\\"')+'",');
  L.push('    address: "'+custAddr.replace(/"/g,'\\"')+'",');
  L.push('    rep:     "'+repName.replace(/"/g,'\\"')+'",');
  L.push('    date:    "'+custDate+'",');
  L.push('    expiry:  new Date("'+expISO+'")');
  L.push('  },');
  L.push('  financing_type: "'+finType+'",');
  L.push('  system_type:    "'+sysType+'",');
  L.push('  aurora_project_id: "'+auroraId+'",');
  L.push('  system: {');
  L.push('    kw_dc:       '+kwDC+',');
  L.push('    kw_ac:       '+kwAC+',');
  L.push('    panels:      '+panelQty+',');
  L.push('    annual_kwh:  '+annualKwhProduced+',  // SoCal estimate (1400 kWh/kW) — update from Aurora');
  L.push('    offset_pct:  '+offsetPct+',           // estimated — update from Aurora');
  L.push('    panel_model: "'+panelModel.replace(/"/g,'\\"')+'",');
  L.push('    panel_part:  "'+panelPart.replace(/"/g,'\\"')+'",');
  L.push('    inv_model:   "'+invModel.replace(/"/g,'\\"')+'",');
  L.push('    inv_part:    "'+invPart.replace(/"/g,'\\"')+'",');
  L.push('    rack_model:  "'+rackModel.replace(/"/g,'\\"')+'",');
  L.push('    rack_part:   "'+rackPart.replace(/"/g,'\\"')+'",');
  L.push('    batt_model:  "'+battModel.replace(/"/g,'\\"')+'",');
  L.push('    batt_part:   "'+battPart.replace(/"/g,'\\"')+'",');
  L.push('    batt_qty:    '+battQty+',');
  L.push('    batt_kwh:    '+battKwh+',');
  L.push('    monthly_kwh: ['+monthlyKwh.join(',')+']');
  L.push('  },');
  L.push('  pricing: {');
  L.push('    total:         '+Math.round(salePrice)+',');
  L.push('    credit:        '+credit+',');
  L.push('    net:           '+Math.round(netPrice)+',');
  L.push('    monthly_loan:  '+monthlyLoan+',');
  L.push('    monthly_sac:   '+monthlySac+',');
  L.push('    lease_monthly: '+Math.round(leaseMonthly)+',');
  L.push('    lease_esc:     0.99');
  L.push('  },');
  L.push('  bill: {');
  L.push('    avg:  '+(billAvg?billAvg.toFixed(2):'0')+',');
  L.push('    kwh:  '+(billKwh?Math.round(billKwh):'0')+',');
  L.push('    rate: '+(billRate?billRate.toFixed(4):'0'));
  L.push('  },');
  L.push('  esc: 6');
  L.push('};');
  return L.join('\n');
}

function copyBIDOutput(){
  var output=_id('prop-output');if(!output)return;
  output.select();
  try{
    document.execCommand('copy');
    var c=_id('prop-copy-confirm');
    if(c){c.style.display='block';setTimeout(function(){c.style.display='none';},2500);}
  }catch(e){toast('Copy failed — select text manually');}
}

function downloadBIDOutput(){
  var output=_id('prop-output');if(!output||!output.value)return;
  var name=((_id('ca-cust')||{}).value||'proposal').replace(/[^a-zA-Z0-9]/g,'_');
  var filename='BID_'+name+'_'+new Date().toISOString().slice(0,10)+'.js';
  var blob=new Blob([output.value],{type:'text/javascript'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Downloaded — '+filename);
}

// ===== LOGO INIT =====
(function initLogo(){
  function setLogos(){
    if(typeof PELL_LOGO==='undefined')return;
    var ll=document.getElementById('login-logo');
    if(ll)ll.src=PELL_LOGO;
    var nl=document.getElementById('nav-logo');
    if(nl)nl.src=PELL_LOGO;
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',setLogos);
  }else{
    setLogos();
  }
})();


</script>