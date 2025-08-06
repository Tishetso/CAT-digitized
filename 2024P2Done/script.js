function submitAnswers() {
    console.log('Starting submitAnswers()');
    const answers = {
        // Section A: Multiple-choice (Question 1)
        q1_1: 'C',
        q1_2: 'C',
        q1_3: 'D',
        q1_4: 'A', // Marking guidelines allow A/B/C, default to A
        q1_5: 'B',
        q1_6: 'C',
        q1_7: 'A', // Marking guidelines allow A/C, default to A
        q1_8: 'D',
        q1_9: 'D',
        q1_10: 'D',
        // Section A: Matching items (Question 2)
        q2_1: 'R',
        q2_2: 'E',
        q2_3: 'P',
        q2_4: 'C',
        q2_5: 'K',
        q2_6: 'T', // Marking guidelines allow T/G, default to T
        q2_7: 'N',
        q2_8: 'H',
        q2_9: 'A',
        q2_10: 'O',
        // Section A: True/False (Question 3)
        q3_1: { tf: 'true', correction: '' },
        q3_2: { tf: 'false', correction: 'Braille' },
        q3_3: { tf: 'false', correction: 'Secondary' },
        q3_4: { tf: 'true', correction: '' },
        q3_5: { tf: 'false', correction: 'Focus (question)' },
        // Section B: Question 4
        q4_1_1: 'Can easily be lost/stolen',
        q4_1_2: 'Batteries should be replaced often',
        q4_2_explanation: 'Biometric security is using unique biological features to access devices/systems',
        q4_2_example: 'Fingerprint reader/scanner',
        q4_3: 'A power supply is designed to provide continuous power, while a UPS provides backup power during outages',
        q4_4_1: 'Processor (CPU)',
        q4_4_2: 'Memory (RAM)',
        q4_4_3: 'Storage (SSD/HDD)',
        q4_5: '1. Cable/signal not connected properly; 2. Faulty cable/port',
        q4_6: '1. Captions/subtitles for spoken dialog; 2. Visual (flashing) notifications for sounds',
        q4_7_1: 'A single-user system is limited to only one active user, multi-user system allows more than one user at the same time',
        q4_7_2: 'Online gaming',
        q4_8: '1. Adjust screen resolution; 2. Change background',
        q4_9_1: 'Install a patch',
        q4_9_2: '1. Security vulnerabilities; 2. Data loss or corruption',
        q4_10: 'Hidden: The user cannot see the file; Read-only: The user can see the file, but cannot change the file',
        q4_11: 'To reorganise fragmented/scattered data on a computer’s hard disk to improve performance and efficiency',
        // Section B: Question 5
        q5_1: 'Fibre optic cable',
        q5_2: 'A device that allows other wireless devices to connect to a wired/wireless network',
        q5_3: 'Firewalls',
        q5_4: '1. Company too small to justify cost of Intranet; 2. Staff can bring in unauthorised devices and infect the intranet with malware',
        q5_5: 'Integration of technologies in the physical, digital, biological world',
        q5_6: '1. Efficient use of screen space; 2. Faster navigation',
        q5_7: '1. File size/Multiple files open; 2. Bandwidth size',
        q5_8_1: 'The subject line does not indicate the topic of the e-mail',
        q5_8_2: 'High priority: These emails are marked as important by the sender; Flagging: Flagging is a way for you to organise/categorise',
        // Section B: Question 6
        q6_1: '1. Write a report; 2. Create a presentation',
        q6_2: 'Factual information that won’t change',
        q6_3: '1. Use mostly closed questions; 2. Keep questions short',
        q6_4: 'Perform (complex) queries',
        q6_5_1: 'Bibliography',
        q6_5_2: 'Include the image creator/author/photographer name',
        q6_6: '1. The average age for participants of the bike race is 32; 2. More runners than bikers',
        // Section B: Question 7
        q7_1_1: 'Software/program/app that is designed for malicious intent/unwanted/unexpected',
        q7_1_2: '1. File(s) become corrupt; 2. Computer suddenly begins to start or run slowly',
        q7_2: 'Social engineering',
        q7_3_1: 'Using computers in a way that is not harmful to the environment',
        q7_3_2: 'Switch off devices/unplug devices when not in use',
        q7_4_1: 'Click-jacking',
        q7_4_2: '1. Download songs only from well-known websites; 2. Verify that the website URL is correct',
        // Section B: Question 8
        q8_1: 'Styles',
        q8_2_1: '1. Using the ruler; 2. Use tab settings',
        q8_2_2: 'To improve the readability/alignment of text in documents',
        q8_3_1: 'Multilevel list',
        q8_3_2: 'The date is still part of the same paragraph because a line break/soft enter/Shift+Enter was used; A new number will only display for a new paragraph break/Enter',
        q8_4: '<th> Creates a header cell in a table/text that is bold and centred; <td> Creates a cell to add data in a table',
        q8_5_1: 'Used for linking/embedding/inserting images/files/videos as data',
        q8_5_2: '1. Short text; 2. Long text',
        q8_6: '1. LEFT; 2. LEN; 3. FIND',
        // Section C: Question 9
        q9_1: '1. Interactive elements; 2. Saving of printing cost',
        q9_2_1: 'AUP',
        q9_2_2: 'A component in a computer that enables network connection',
        q9_2_3: 'Not enough bandwidth/Network traffic/Congestion',
        q9_3_1: '1. Requires a fast internet connection; 2. Lack of physical face to face contact',
        q9_3_2: 'Eliminate background noises',
        q9_3_3: '1. Deeper insight/clarification and follow up; 2. Non-verbal cues',
        q9_4_1: 'Megapixel',
        q9_4_2: 'To produce an editable soft copy from a scanned document',
        q9_4_3: 'Poor quality scanned image',
        q9_5: '1. Convenient access from any device anywhere; 2. Serves as storage space to backup',
        q9_6_1: '1. Desktop publisher software; 2. Designing software',
        q9_6_2: 'Text wrapping',
        q9_6_3: '<a> href',
        q9_7_1: 'Payments are made by bringing POS and devices/bank card in close contact/tapping allowing them to transfer data wirelessly',
        q9_7_2: '1. Online banking/EFT; 2. Electronic card payments',
        // Section C: Question 10
        q10_1_1: 'Information is processed data that has meaning',
        q10_1_2: '1. Accuracy; 2. Participants can complete the form in a shorter time',
        q10_2_1: 'Online platforms e.g., social media',
        q10_2_2: 'The QR code will provide a link to the website/document/additional information',
        q10_3_1: 'Crowdfunding',
        q10_3_2: 'GoFundMe',
        q10_4_1: '1. Quality of the lens; 2. Quality/size/type of sensor',
        q10_4_2: '1. Faster transfer of images to a computer from a digital camera; 2. Use less energy/power',
        q10_5_1: 'WLAN',
        q10_5_2: '1. Tracking the participants progress/safety during the race; 2. Keep record of participant’s time',
        q10_5_3: 'Radio-frequency signals/radio waves',
        q10_6: 'A self-driving car that can sense its environment and move safely with little or no human input',
        q10_7_1: 'The design of furniture and other devices to make working more comfortable and safer',
        q10_7_2: '1. Stand up and take regular breaks; 2. Sit up straight/Back against the chair',
        q10_8_1: 'Highlight cell: ranking of participants according to events',
        q10_8_2: '1. CONCATENATE; 2. RANDBETWEEN',
        q10_8_3: 'Export'
    };

    const form = document.getElementById('questionForm');
    const results = document.getElementById('results');
    const scoreDisplay = document.getElementById('score');
    const answersDisplay = document.getElementById('answers');
    let totalScore = 0;

    try {
        // Section A: Multiple-choice (Question 1)
        console.log('Processing multiple-choice questions');
        for (let i = 1; i <= 10; i++) {
            const selected = form.querySelector(`input[name="q1_${i}"]:checked`);
            const feedback = document.getElementById(`q1_${i}_feedback`);
            const answer = document.getElementById(`q1_${i}_answer`);
            if (!feedback || !answer) {
                console.error(`Missing elements for q1_${i}`);
                continue;
            }
            if (selected && selected.value === answers[`q1_${i}`]) {
                feedback.textContent = 'Correct';
                feedback.classList.add('correct', 'visible');
                totalScore += 1;
            } else {
                feedback.textContent = selected ? 'Incorrect' : 'Please select an answer';
                feedback.classList.add('incorrect', 'visible');
            }
            answer.classList.add('visible');
        }

        // Section A: Matching items (Question 2)
        console.log('Processing matching items');
        for (let i = 1; i <= 10; i++) {
            const select = form.querySelector(`select[name="q2_${i}"]`);
            const selected = select ? select.value : '';
            const feedback = document.getElementById(`q2_${i}_feedback`);
            const answer = document.getElementById(`q2_${i}_answer`);
            if (!feedback || !answer || !select) {
                console.error(`Missing elements for q2_${i}`);
                continue;
            }
            if (selected && selected === answers[`q2_${i}`]) {
                feedback.textContent = 'Correct';
                feedback.classList.add('correct', 'visible');
                totalScore += 1;
            } else {
                feedback.textContent = selected ? 'Incorrect' : 'Please select an option';
                feedback.classList.add('incorrect', 'visible');
            }
            answer.classList.add('visible');
        }

        // Section A: True/False (Question 3)
        console.log('Processing true/false questions');
        for (let i = 1; i <= 5; i++) {
            const tf = form.querySelector(`input[name="q3_${i}_tf"]:checked`);
            const correctionInput = form.querySelector(`input[name="q3_${i}_correction"]`);
            const correction = correctionInput ? correctionInput.value.trim().toLowerCase() : '';
            const feedback = document.getElementById(`q3_${i}_feedback`);
            const answer = document.getElementById(`q3_${i}_answer`);
            if (!feedback || !answer) {
                console.error(`Missing elements for q3_${i}`);
                continue;
            }
            const correctTf = answers[`q3_${i}`].tf;
            const correctCorrection = answers[`q3_${i}`].correction.toLowerCase();
            if (tf && tf.value === correctTf && (tf.value === 'true' || correction === correctCorrection)) {
                feedback.textContent = 'Correct';
                feedback.classList.add('correct', 'visible');
                totalScore += 1;
            } else {
                feedback.textContent = tf ? 'Incorrect' : 'Please select True or False';
                feedback.classList.add('incorrect', 'visible');
            }
            answer.classList.add('visible');
        }

        // Section B and C: Short-answer questions
        console.log('Processing short-answer questions');
        answersDisplay.innerHTML = '';
        const shortAnswerGroups = [
            // Question 4
            { id: 'q4_1', inputs: ['q4_1_1', 'q4_1_2'], feedback: 'q4_1_feedback', answer: 'q4_1_answer', marks: 2 },
            { id: 'q4_2', inputs: ['q4_2_explanation', 'q4_2_example'], feedback: 'q4_2_feedback', answer: 'q4_2_answer', marks: 2 },
            { id: 'q4_3', inputs: ['q4_3'], feedback: 'q4_3_feedback', answer: 'q4_3_answer', marks: 2 },
            { id: 'q4_4', inputs: ['q4_4_1', 'q4_4_2', 'q4_4_3'], feedback: 'q4_4_feedback', answer: 'q4_4_answer', marks: 3 },
            { id: 'q4_5', inputs: ['q4_5'], feedback: 'q4_5_feedback', answer: 'q4_5_answer', marks: 2 },
            { id: 'q4_6', inputs: ['q4_6'], feedback: 'q4_6_feedback', answer: 'q4_6_answer', marks: 2 },
            { id: 'q4_7_1', inputs: ['q4_7_1'], feedback: 'q4_7_1_feedback', answer: 'q4_7_1_answer', marks: 2 },
            { id: 'q4_7_2', inputs: ['q4_7_2'], feedback: 'q4_7_2_feedback', answer: 'q4_7_2_answer', marks: 1 },
            { id: 'q4_8', inputs: ['q4_8'], feedback: 'q4_8_feedback', answer: 'q4_8_answer', marks: 2 },
            { id: 'q4_9_1', inputs: ['q4_9_1'], feedback: 'q4_9_1_feedback', answer: 'q4_9_1_answer', marks: 1 },
            { id: 'q4_9_2', inputs: ['q4_9_2'], feedback: 'q4_9_2_feedback', answer: 'q4_9_2_answer', marks: 2 },
            { id: 'q4_10', inputs: ['q4_10'], feedback: 'q4_10_feedback', answer: 'q4_10_answer', marks: 2 },
            { id: 'q4_11', inputs: ['q4_11'], feedback: 'q4_11_feedback', answer: 'q4_11_answer', marks: 2 },
            // Question 5
            { id: 'q5_1', inputs: ['q5_1'], feedback: 'q5_1_feedback', answer: 'q5_1_answer', marks: 1 },
            { id: 'q5_2', inputs: ['q5_2'], feedback: 'q5_2_feedback', answer: 'q5_2_answer', marks: 2 },
            { id: 'q5_3', inputs: ['q5_3'], feedback: 'q5_3_feedback', answer: 'q5_3_answer', marks: 1 },
            { id: 'q5_4', inputs: ['q5_4'], feedback: 'q5_4_feedback', answer: 'q5_4_answer', marks: 2 },
            { id: 'q5_5', inputs: ['q5_5'], feedback: 'q5_5_feedback', answer: 'q5_5_answer', marks: 2 },
            { id: 'q5_6', inputs: ['q5_6'], feedback: 'q5_6_feedback', answer: 'q5_6_answer', marks: 2 },
            { id: 'q5_7', inputs: ['q5_7'], feedback: 'q5_7_feedback', answer: 'q5_7_answer', marks: 2 },
            { id: 'q5_8_1', inputs: ['q5_8_1'], feedback: 'q5_8_1_feedback', answer: 'q5_8_1_answer', marks: 1 },
            { id: 'q5_8_2', inputs: ['q5_8_2'], feedback: 'q5_8_2_feedback', answer: 'q5_8_2_answer', marks: 2 },
            // Question 6
            { id: 'q6_1', inputs: ['q6_1'], feedback: 'q6_1_feedback', answer: 'q6_1_answer', marks: 2 },
            { id: 'q6_2', inputs: ['q6_2'], feedback: 'q6_2_feedback', answer: 'q6_2_answer', marks: 1 },
            { id: 'q6_3', inputs: ['q6_3'], feedback: 'q6_3_feedback', answer: 'q6_3_answer', marks: 2 },
            { id: 'q6_4', inputs: ['q6_4'], feedback: 'q6_4_feedback', answer: 'q6_4_answer', marks: 1 },
            { id: 'q6_5_1', inputs: ['q6_5_1'], feedback: 'q6_5_1_feedback', answer: 'q6_5_1_answer', marks: 1 },
            { id: 'q6_5_2', inputs: ['q6_5_2'], feedback: 'q6_5_2_feedback', answer: 'q6_5_2_answer', marks: 1 },
            { id: 'q6_6', inputs: ['q6_6'], feedback: 'q6_6_feedback', answer: 'q6_6_answer', marks: 2 },
            // Question 7
            { id: 'q7_1_1', inputs: ['q7_1_1'], feedback: 'q7_1_1_feedback', answer: 'q7_1_1_answer', marks: 1 },
            { id: 'q7_1_2', inputs: ['q7_1_2'], feedback: 'q7_1_2_feedback', answer: 'q7_1_2_answer', marks: 2 },
            { id: 'q7_2', inputs: ['q7_2'], feedback: 'q7_2_feedback', answer: 'q7_2_answer', marks: 1 },
            { id: 'q7_3_1', inputs: ['q7_3_1'], feedback: 'q7_3_1_feedback', answer: 'q7_3_1_answer', marks: 1 },
            { id: 'q7_3_2', inputs: ['q7_3_2'], feedback: 'q7_3_2_feedback', answer: 'q7_3_2_answer', marks: 1 },
            { id: 'q7_4_1', inputs: ['q7_4_1'], feedback: 'q7_4_1_feedback', answer: 'q7_4_1_answer', marks: 1 },
            { id: 'q7_4_2', inputs: ['q7_4_2'], feedback: 'q7_4_2_feedback', answer: 'q7_4_2_answer', marks: 2 },
            // Question 8
            { id: 'q8_1', inputs: ['q8_1'], feedback: 'q8_1_feedback', answer: 'q8_1_answer', marks: 1 },
            { id: 'q8_2_1', inputs: ['q8_2_1'], feedback: 'q8_2_1_feedback', answer: 'q8_2_1_answer', marks: 2 },
            { id: 'q8_2_2', inputs: ['q8_2_2'], feedback: 'q8_2_2_feedback', answer: 'q8_2_2_answer', marks: 1 },
            { id: 'q8_3_1', inputs: ['q8_3_1'], feedback: 'q8_3_1_feedback', answer: 'q8_3_1_answer', marks: 1 },
            { id: 'q8_3_2', inputs: ['q8_3_2'], feedback: 'q8_3_2_feedback', answer: 'q8_3_2_answer', marks: 2 },
            { id: 'q8_4', inputs: ['q8_4'], feedback: 'q8_4_feedback', answer: 'q8_4_answer', marks: 2 },
            { id: 'q8_5_1', inputs: ['q8_5_1'], feedback: 'q8_5_1_feedback', answer: 'q8_5_1_answer', marks: 1 },
            { id: 'q8_5_2', inputs: ['q8_5_2'], feedback: 'q8_5_2_feedback', answer: 'q8_5_2_answer', marks: 2 },
            { id: 'q8_6', inputs: ['q8_6'], feedback: 'q8_6_feedback', answer: 'q8_6_answer', marks: 3 },
            // Question 9
            { id: 'q9_1', inputs: ['q9_1'], feedback: 'q9_1_feedback', answer: 'q9_1_answer', marks: 2 },
            { id: 'q9_2_1', inputs: ['q9_2_1'], feedback: 'q9_2_1_feedback', answer: 'q9_2_1_answer', marks: 1 },
            { id: 'q9_2_2', inputs: ['q9_2_2'], feedback: 'q9_2_2_feedback', answer: 'q9_2_2_answer', marks: 2 },
            { id: 'q9_2_3', inputs: ['q9_2_3'], feedback: 'q9_2_3_feedback', answer: 'q9_2_3_answer', marks: 2 },
            { id: 'q9_3_1', inputs: ['q9_3_1'], feedback: 'q9_3_1_feedback', answer: 'q9_3_1_answer', marks: 2 },
            { id: 'q9_3_2', inputs: ['q9_3_2'], feedback: 'q9_3_2_feedback', answer: 'q9_3_2_answer', marks: 1 },
            { id: 'q9_3_3', inputs: ['q9_3_3'], feedback: 'q9_3_3_feedback', answer: 'q9_3_3_answer', marks: 2 },
            { id: 'q9_4_1', inputs: ['q9_4_1'], feedback: 'q9_4_1_feedback', answer: 'q9_4_1_answer', marks: 1 },
            { id: 'q9_4_2', inputs: ['q9_4_2'], feedback: 'q9_4_2_feedback', answer: 'q9_4_2_answer', marks: 1 },
            { id: 'q9_4_3', inputs: ['q9_4_3'], feedback: 'q9_4_3_feedback', answer: 'q9_4_3_answer', marks: 2 },
            { id: 'q9_5', inputs: ['q9_5'], feedback: 'q9_5_feedback', answer: 'q9_5_answer', marks: 2 },
            { id: 'q9_6_1', inputs: ['q9_6_1'], feedback: 'q9_6_1_feedback', answer: 'q9_6_1_answer', marks: 2 },
            { id: 'q9_6_2', inputs: ['q9_6_2'], feedback: 'q9_6_2_feedback', answer: 'q9_6_2_answer', marks: 1 },
            { id: 'q9_6_3', inputs: ['q9_6_3'], feedback: 'q9_6_3_feedback', answer: 'q9_6_3_answer', marks: 1 },
            { id: 'q9_7_1', inputs: ['q9_7_1'], feedback: 'q9_7_1_feedback', answer: 'q9_7_1_answer', marks: 2 },
            { id: 'q9_7_2', inputs: ['q9_7_2'], feedback: 'q9_7_2_feedback', answer: 'q9_7_2_answer', marks: 2 },
            // Question 10
            { id: 'q10_1_1', inputs: ['q10_1_1'], feedback: 'q10_1_1_feedback', answer: 'q10_1_1_answer', marks: 1 },
            { id: 'q10_1_2', inputs: ['q10_1_2'], feedback: 'q10_1_2_feedback', answer: 'q10_1_2_answer', marks: 2 },
            { id: 'q10_2_1', inputs: ['q10_2_1'], feedback: 'q10_2_1_feedback', answer: 'q10_2_1_answer', marks: 1 },
            { id: 'q10_2_2', inputs: ['q10_2_2'], feedback: 'q10_2_2_feedback', answer: 'q10_2_2_answer', marks: 1 },
            { id: 'q10_3_1', inputs: ['q10_3_1'], feedback: 'q10_3_1_feedback', answer: 'q10_3_1_answer', marks: 1 },
            { id: 'q10_3_2', inputs: ['q10_3_2'], feedback: 'q10_3_2_feedback', answer: 'q10_3_2_answer', marks: 1 },
            { id: 'q10_4_1', inputs: ['q10_4_1'], feedback: 'q10_4_1_feedback', answer: 'q10_4_1_answer', marks: 2 },
            { id: 'q10_4_2', inputs: ['q10_4_2'], feedback: 'q10_4_2_feedback', answer: 'q10_4_2_answer', marks: 2 },
            { id: 'q10_5_1', inputs: ['q10_5_1'], feedback: 'q10_5_1_feedback', answer: 'q10_5_1_answer', marks: 1 },
            { id: 'q10_5_2', inputs: ['q10_5_2'], feedback: 'q10_5_2_feedback', answer: 'q10_5_2_answer', marks: 2 },
            { id: 'q10_5_3', inputs: ['q10_5_3'], feedback: 'q10_5_3_feedback', answer: 'q10_5_3_answer', marks: 1 },
            { id: 'q10_6', inputs: ['q10_6'], feedback: 'q10_6_feedback', answer: 'q10_6_answer', marks: 1 },
            { id: 'q10_7_1', inputs: ['q10_7_1'], feedback: 'q10_7_1_feedback', answer: 'q10_7_1_answer', marks: 1 },
            { id: 'q10_7_2', inputs: ['q10_7_2'], feedback: 'q10_7_2_feedback', answer: 'q10_7_2_answer', marks: 2 },
            { id: 'q10_8_1', inputs: ['q10_8_1'], feedback: 'q10_8_1_feedback', answer: 'q10_8_1_answer', marks: 1 },
            { id: 'q10_8_2', inputs: ['q10_8_2'], feedback: 'q10_8_2_feedback', answer: 'q10_8_2_answer', marks: 2 },
            { id: 'q10_8_3', inputs: ['q10_8_3'], feedback: 'q10_8_3_feedback', answer: 'q10_8_3_answer', marks: 1 }
        ];

        shortAnswerGroups.forEach(group => {
            try {
                const feedback = document.getElementById(group.feedback);
                const answerDisplay = document.getElementById(group.answer);
                if (!feedback || !answerDisplay) {
                    console.error(`Missing feedback or answer display for ${group.id}`);
                    return;
                }
                // Check if all inputs are non-empty
                let allAnswered = true;
                const userAnswers = group.inputs.map(name => {
                    const input = form.querySelector(`textarea[name="${name}"]`);
                    if (!input) {
                        console.error(`Missing input for ${name}`);
                        allAnswered = false;
                        return '';
                    }
                    return input.value.trim();
                });
                if (allAnswered && userAnswers.every(answer => answer !== '')) {
                    feedback.textContent = 'Answer recorded (manual grading needed)';
                    feedback.classList.add('correct', 'visible');
                    totalScore += group.marks;
                } else {
                    feedback.textContent = 'Please provide answers for all parts';
                    feedback.classList.add('incorrect', 'visible');
                }
                answerDisplay.classList.add('visible');
                // Display correct answers
                const correctAnswers = group.inputs.map(name => `${name}: ${answers[name]}`).join('; ');
                answersDisplay.innerHTML += `<li>${group.id}: ${correctAnswers}</li>`;
            } catch (e) {
                console.error(`Error processing short-answer group ${group.id}:`, e);
            }
        });

        // Display results
        console.log('Displaying results');
        scoreDisplay.textContent = `Total Marks: ${totalScore}/150 (${((totalScore / 150) * 100).toFixed(2)}%)`;
        results.style.display = 'block';
        results.scrollIntoView();
    } catch (e) {
        console.error('Error in submitAnswers:', e);
        alert('An error occurred while processing your answers. Please check the console for details.');
    }
    console.log('submitAnswers() completed');
}