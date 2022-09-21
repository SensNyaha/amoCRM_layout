import { videoTriggersHoverEffect } from "./modules/videoTriggersEffect.js";
import { loadYTVideoThumbnail } from "./modules/loadYTVideoThumbnail.js";
import { bindMask } from './modules/phonemask.js';
import { bindCalculator } from './modules/calculatorButtons.js';
import { bindSendButtons } from './modules/formSendButtons.js'
import { bindingWidgetCards } from './modules/widgetCards.js';
import { widgetsScrollBar } from './modules/widgetsScrollBar.js';
import { thanksGrid, openLetterFully } from './modules/thanksGrid.js';
import { bindAccordeon } from './modules/accordeon.js';
import { bindConfidential } from './modules/confidential.js';
import { bindAnchors } from './modules/anchors.js';
import { openAndFillPopup } from './modules/popups.js';
import { bindProblemButtons } from './modules/problemsButtons.js';

videoTriggersHoverEffect();
loadYTVideoThumbnail();
bindMask();
bindCalculator();
bindSendButtons();
bindingWidgetCards();
widgetsScrollBar();
thanksGrid();
openLetterFully();
bindAccordeon();
bindConfidential();
bindAnchors();
openAndFillPopup();
bindProblemButtons();