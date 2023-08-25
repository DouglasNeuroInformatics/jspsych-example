import { initJsPsych } from 'jspsych';
import 'jspsych/css/jspsych.css';

import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

const jsPsych = initJsPsych();

const trial = {
  type: htmlKeyboardResponse,
  stimulus: 'Hello world!'
};

jsPsych.run([trial]);
