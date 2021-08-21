function Device(id, name, serialNo, type) {
  this.id = id;
  this.name = name;
  this.serialNo = serialNo;
  this.type = type;
}

function Premise(id, name, type, devices) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.devices = devices;
}

function Account(id, name, premises) {
  this.id = id;
  this.name = name;
  this.premises = premises;
}

const getAccounts = () => {
  const devices1 = [];
  devices1.push(
    new Device(0, 'Hybrone Nova - 001', 'TRBGNP11Q0185', 'SMART_PANEL'),
  );
  devices1.push(new Device(1, 'HAP Test 16', 'HAP-TEST-16', 'PANEL'));
  devices1.push(
    new Device(
      2,
      'Smartbox-IO-001',
      '44107897021c082a0813',
      'SMARTBOX_IO_MODULE',
    ),
  );
  devices1.push(new Device(3, 'ERDEM YANGIN PANELİ', '', 'FIRE'));
  devices1.push(new Device(4, 'ONAT YANGIN PANELİ', '', 'FIRE'));
  devices1.push(new Device(5, 'KIRAL YANGIN PANELİ', '', 'FIRE'));
  devices1.push(new Device(6, 'onimaskesi', 'FIRE'));

  const devices2 = [];
  devices2.push(new Device(0, 'HAP Test 64', 'HAP-TEST-64', 'PANEL'));
  devices2.push(
    new Device(
      1,
      'Hybrone Gatewat Test',
      '247bd152-4716-4e49-9359-8e59b2a49465',
      'SMARTHUB',
    ),
  );

  const premises1 = [];
  premises1.push(new Premise(0, 'Evim', 'home', devices1));
  premises1.push(new Premise(1, 'Şirket Depo', 'depot', devices2));
  premises1.push(new Premise(2, 'Ofis', 'work_place', []));
  premises1.push(new Premise(3, 'Evim', 'depot', []));

  const premises2 = [];
  premises2.push(new Premise(0, 'Ev2', 'work_place', []));
  premises2.push(new Premise(1, 'Evim', 'home', []));
  premises2.push(new Premise(2, 'Ev', 'home', []));
  premises2.push(new Premise(3, 'Ev (Anadolu Yakası)', 'depot', []));

  const account1 = new Account(0, 'Yeni Müşteri Test', premises1);
  const account2 = new Account(1, 'Hybronemusteri-10', premises2);
  const account3 = new Account(2, 'Onimaskesi', premises1);
  const account4 = new Account(3, 'Erdem', premises2);
  const account5 = new Account(4, 'Onat', premises1);
  const account6 = new Account(5, 'KIRAL', premises2);

  return [account1, account2, account3, account4, account5, account6];
};

export default getAccounts;
