import Inputmask from "inputmask";

const im = new Inputmask("+7(999) 999-99-99", {});

im.mask(".input-phone");
