(function () {
  // Design dimensions for 16:9 aspect ratio
  const DESIGN_WIDTH = 1920;
  const DESIGN_HEIGHT = 1080;

  // Scaling system class as documented in SCALING_TECHNIQUE.md
  class ScalingSystem {
    constructor() {
      this.baseWidth = DESIGN_WIDTH;
      this.baseHeight = DESIGN_HEIGHT;
      this.init();
    }
    
    updateScaleFactor() {
      // Calculate scale ratios
      const scaleW = window.innerWidth / this.baseWidth;
      const scaleH = window.innerHeight / this.baseHeight;
      
      // Use smaller ratio to ensure fit
      const scale = Math.min(scaleW, scaleH);
      
      // Apply to CSS variable
      document.documentElement.style.setProperty('--scaleFactor', String(scale));
      
      return scale;
    }
    
    init() {
      // Set initial scale
      this.updateScaleFactor();
      
      // Handle resize events
      window.addEventListener('resize', () => {
        this.updateScaleFactor();
      });
    }
  }

  // Initialize scaling system
  const scalingSystem = new ScalingSystem();

  // Render different pages based on index
  function renderPage(idx, handlers, texts, answers, pageState = {}) {
    switch (idx) {
      case 0: {
        const t = texts.page1;
        return React.createElement(
          'div',
          { id: 'page1', className: 'page' },
          React.createElement(
            'div',
            { className: 'start-screen-container' },
            // Header section
            React.createElement(
              'div',
              { className: 'start-screen-header' },
              React.createElement('h1', null, t.title)
            ),
            // Content section
            React.createElement(
              'div',
              { className: 'start-screen-content' },
              React.createElement(
                'div',
                { className: 'content-top' },
                React.createElement('p', null, t.line1),
                React.createElement('p', null, t.line2),
                React.createElement('p', null, t.line3)
              ),
              React.createElement(
                'div',
                { className: 'content-bottom' },
                React.createElement(
                  'button',
                  { className: 'start-button', onClick: handlers.next },
                  t.startButton
                )
              )
            ),
            // Footer section
            React.createElement(
              'div',
              { className: 'start-screen-footer' }
            )
          )
        );
      }
      case 1: {
        const t = texts.page2;
        return React.createElement(
          'div',
          { id: 'page2', className: 'page' },
          React.createElement(
            'div',
            { className: 'question-screen-container' },
            React.createElement(
              'div',
              { className: 'top-bar' },
              React.createElement('p', null, "Guess the answer with the information given.")
            ),
            React.createElement(
              'div',
              { className: 'main-content' },
              React.createElement(
                'div',
                { className: 'question-box' },
                React.createElement('p', { className: 'question-text' }, "Bus A has 40 kids."),
                React.createElement('p', { className: 'question-text' }, "Bus B has 30 kids."),
                React.createElement('h2', { className: 'main-question' }, "Which bus is more crowded?")
              ),
              React.createElement(
                'div',
                { className: 'options-box' },
                React.createElement('p', null, t.options_title),
                React.createElement(
                  'button',
                  { className: 'option-button', onClick: handlers.next },
                  "Bus A"
                ),
                React.createElement(
                  'button',
                  { className: 'option-button', onClick: handlers.next },
                  "Bus B"
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, "Tap the 'bus' button you think is correct."),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 2: {
        const t = texts.page3;
        return React.createElement(
          'div',
          { id: 'page3', className: 'page' },
          React.createElement(
            'div',
            { className: 'info-reveal-container' },
            // Header - 120px height
            React.createElement('h2', { className: 'info-header' }, t.header),
            // Main content - 60% height
            React.createElement(
              'div',
              { className: 'info-main-content' },
              // Left panel - Bus A
              React.createElement(
                'div',
                { className: 'bus-info-panel' },
                React.createElement('img', { src: 'assets/BusA.png', alt: 'Bus A with 36 seats', className: 'bus-image' }),
                React.createElement('p', { className: 'bus-caption-blue' }, t.busA_caption1),
                React.createElement('p', { className: 'bus-caption-yellow-green' }, t.busA_caption2)
              ),
              // Right panel - Bus B
              React.createElement(
                'div',
                { className: 'bus-info-panel' },
                React.createElement('img', { src: 'assets/BusB.png', alt: 'Bus B with 20 seats', className: 'bus-image' }),
                React.createElement('p', { className: 'bus-caption-blue' }, t.busB_caption1),
                React.createElement('p', { className: 'bus-caption-yellow-green' }, t.busB_caption2)
              )
            ),
            // Bottom section - 40% height
            React.createElement(
              'div',
              { className: 'info-bottom-section' },
              React.createElement('p', { className: 'concept-sentence' }, "The more crowded bus is not just about"),
              React.createElement('p', { className: 'concept-sentence' }, "how many kids are in the bus!"),
              React.createElement(
                'button',
                { className: 'next-button', onClick: handlers.next },
                t.nextButton
              )
            )
          )
        );
      }
      case 3: {
        const t = texts.page4;
        const { filledSeatCountA = 0, isAnimatingA = false } = pageState;

        const busAGridCells = [];
        let seatCounterA = 0;
        for (let i = 0; i < 45; i++) {
            const col = i % 5;
            let cellClass = 'grid-cell';
            let cellContent = null;

            if (col === 0 || col === 1 || col === 3 || col === 4) {
                cellClass += ' seat';
                if (seatCounterA < filledSeatCountA) {
                    cellContent = React.createElement('img', { src: 'assets/Girl.png', className: 'student-icon', alt: 'student' });
                }
                seatCounterA++;
            } else {
                cellClass += ' pathway';
            }
            busAGridCells.push(React.createElement('div', { key: i, className: cellClass }, cellContent));
        }

        return React.createElement(
          'div', { id: 'page4', className: 'page' },
            React.createElement('div', { className: 'fill-bus-container' },
                React.createElement('h2', { className: 'fill-bus-header' }, t.header),
                React.createElement('div', { className: 'fill-bus-main-content' },
                    // Bus A Container
                    React.createElement('div', { className: 'bus-container' },
                        React.createElement('div', { className: 'bus-header-section' },
                            React.createElement('div', { className: 'bus-label' }, 'Bus A'),
                            React.createElement('div', { className: 'bus-capacity-text' }, t.busA_chip)
                        ),
                        React.createElement('div', { className: 'bus-image-section' },
                            React.createElement('img', { src: 'assets/BusA.png', alt: 'Bus A', className: 'bus-image-horizontal' }),
                            React.createElement('div', { className: 'bus-grid bus-a-grid' }, ...busAGridCells)
                        )
                    ),
                    // Bus B Container (empty)
                    React.createElement('div', { className: 'bus-container' },
                        React.createElement('div', { className: 'bus-header-section' },
                            React.createElement('div', { className: 'bus-label' }, 'Bus B'),
                            React.createElement('div', { className: 'bus-capacity-text' }, t.busB_chip)
                        ),
                        React.createElement('div', { className: 'bus-image-section' },
                           React.createElement('img', { src: 'assets/BusB.png', alt: 'Bus B', className: 'bus-image-horizontal' })
                        )
                    ),
                    // Options Column
                    React.createElement('div', { className: 'fill-bus-options-column' },
                        React.createElement('p', null, "Options"),
                        React.createElement('button', { 
                            className: 'option-button', 
                            onClick: handlers.fillBusA, 
                            disabled: isAnimatingA 
                        }, t.fillButton)
                    )
                ),
                React.createElement('div', { className: 'bottom-bar' },
                    React.createElement('div', { className: 'nav-arrow left', onClick: handlers.prev }, '◀'),
                    React.createElement('p', null, t.bottomBar),
                    React.createElement('div', { className: 'nav-arrow right', onClick: handlers.next }, '▶')
                )
            )
        );
      }
      case 4: {
        const t = texts.page5;
        return React.createElement(
          'div',
          { id: 'page5', className: 'page' },
          React.createElement(
            'div',
            { className: 'fill-bus-container' },
            React.createElement('h2', { className: 'fill-bus-header' }, t.header),
            React.createElement(
              'div',
              { className: 'panels-container' },
              React.createElement(
                'div',
                { className: 'panel-left' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus A'),
                  ' ' + t.busA_chip
                ),
                React.createElement(
                  'div',
                  { className: 'bus-result-area' },
                  React.createElement('p', { className: 'standing-label' }, t.standingLabel),
                  React.createElement(
                    'div',
                    { className: 'bus-and-roster-row' },
                    React.createElement('img', { className: 'bus-graphic-large', src: 'assets/BusA1.png', alt: 'Filled Bus A' })
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-right' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus B'),
                  ' ' + t.busB_chip
                ),
                React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusB.png', alt: 'Empty Bus B' })
              ),
              React.createElement(
                'div',
                { className: 'action-column' },
                React.createElement(
                  'button',
                  { className: 'fill-bus-button highlight', onClick: handlers.next },
                  t.fillButton
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 5: {
        const t = texts.page6;
        return React.createElement(
          'div',
          { id: 'page6', className: 'page' },
          React.createElement(
            'div',
            { className: 'fill-bus-container' },
            React.createElement('h2', { className: 'fill-bus-header' }, t.header),
            React.createElement(
              'div',
              { className: 'panels-container-final' },
              React.createElement(
                'div',
                { className: 'panel-left final-panel' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus A'),
                  ' ' + t.busA_chip
                ),
                React.createElement(
                  'div',
                  { className: 'bus-result-area' },
                  React.createElement('p', { className: 'standing-label' }, t.busA_standing),
                  React.createElement('img', { className: 'bus-graphic-large', src: 'assets/BusA1.png', alt: 'Filled Bus A' })
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-right final-panel' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus B'),
                  ' ' + t.busB_chip
                ),
                React.createElement(
                  'div',
                  { className: 'bus-result-area' },
                  React.createElement('p', { className: 'standing-label' }, t.busB_standing),
                  React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusB1.png', alt: 'Filled Bus B' })
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 6: {
        const t = texts.page7;
        const answer = answers && answers[6];
        return React.createElement(
          'div',
          { id: 'page7', className: 'page' },
          React.createElement(
            'div',
            { className: 'question-screen-container' },
            React.createElement(
              'div',
              { className: 'top-bar' },
              React.createElement('p', null, t.header)
            ),
            React.createElement(
              'div',
              { className: 'main-content final-question-layout' },
              React.createElement(
                'div',
                { className: 'bus-info-column' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus A'),
                  ' ' + t.busA_chip
                ),
                React.createElement('p', { className: 'standing-label final-question-standing' }, t.busA_standing),
                React.createElement('img', { className: 'bus-graphic-large', src: 'assets/BusA1.png', alt: 'Filled Bus A' })
              ),
              React.createElement(
                'div',
                { className: 'bus-info-column' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus B'),
                  ' ' + t.busB_chip
                ),
                React.createElement('p', { className: 'standing-label final-question-standing' }, t.busB_standing),
                React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusB1.png', alt: 'Filled Bus B' })
              ),
              React.createElement(
                'div',
                { className: 'options-box final-question-options' },
                React.createElement('p', null, t.options_title),
                React.createElement(
                  'button',
                  {
                    className: 'option-button' + (answer && answer.selected === 'A' ? (answer.isCorrect ? ' selected-correct' : ' selected-incorrect') : ''),
                    onClick: () => handlers.selectOption(6, 'A', t.correctOption)
                  },
                  t.option_A
                ),
                React.createElement(
                  'button',
                  {
                    className: 'option-button' + (answer && answer.selected === 'B' ? (answer.isCorrect ? ' selected-correct' : ' selected-incorrect') : ''),
                    onClick: () => handlers.selectOption(6, 'B', t.correctOption)
                  },
                  t.option_B
                ),
                answer
                  ? React.createElement(
                      'div',
                      {
                        className:
                          'feedback-box ' +
                          (answer.isCorrect ? 'feedback-box-correct' : 'feedback-box-incorrect')
                      },
                      answer.isCorrect ? t.feedback_correct : t.feedback_incorrect
                    )
                  : null
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 7: {
        const t = texts.page8;
        return React.createElement(
          'div',
          { id: 'page8', className: 'page' },
          React.createElement(
            'div',
            { className: 'info-reveal-container' },
            React.createElement('h2', { className: 'info-header' }, t.header),
            React.createElement(
              'div',
              { className: 'bus-cards-container' },
              React.createElement(
                'div',
                { className: 'bus-card' },
                React.createElement('img', { src: 'assets/BusC.png', alt: 'Bus C with 45 seats' }),
                React.createElement('p', { className: 'caption-blue' }, t.busC_caption1),
                React.createElement('p', { className: 'caption-yellow-green' }, t.busC_caption2)
              ),
              React.createElement(
                'div',
                { className: 'bus-card' },
                React.createElement('img', { src: 'assets/BusD.png', alt: 'Bus D with 30 seats' }),
                React.createElement('p', { className: 'caption-blue' }, t.busC_caption1),
                React.createElement('p', { className: 'caption-yellow-green' }, t.busC_caption2)
              )
            ),
            React.createElement('p', { className: 'concept-sentence' }, t.concept),
            React.createElement(
              'button',
              { className: 'next-button', onClick: handlers.next },
              t.nextButton
            )
          )
        );
      }
      case 8: {
        const t = texts.page9;
        return React.createElement(
          'div',
          { id: 'page9', className: 'page' },
          React.createElement(
            'div',
            { className: 'fill-bus-container' },
            React.createElement('h2', { className: 'fill-bus-header' }, t.header),
            React.createElement(
              'div',
              { className: 'panels-container' },
              React.createElement(
                'div',
                { className: 'panel-left' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus C'),
                  ' ' + t.busC_chip
                ),
                React.createElement('img', { className: 'bus-graphic-large', src: 'assets/BusC.png', alt: 'Empty Bus C' })
              ),
              React.createElement(
                'div',
                { className: 'panel-right' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus D'),
                  ' ' + t.busD_chip
                ),
                React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusD.png', alt: 'Empty Bus D' })
              ),
              React.createElement(
                'div',
                { className: 'action-column' },
                React.createElement(
                  'button',
                  { className: 'fill-bus-button highlight', onClick: handlers.next },
                  t.fillButton
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 9: {
        const t = texts.page10;
        return React.createElement(
          'div',
          { id: 'page10', className: 'page' },
          React.createElement(
            'div',
            { className: 'fill-bus-container' },
            React.createElement('h2', { className: 'fill-bus-header' }, t.header),
            React.createElement(
              'div',
              { className: 'panels-container' },
              React.createElement(
                'div',
                { className: 'panel-left' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus C'),
                  ' ' + t.busC_chip
                ),
                React.createElement(
                  'div',
                  { className: 'bus-result-area' },
                  React.createElement('p', { className: 'standing-label' }, t.standingLabelC),
                  React.createElement('img', { className: 'bus-graphic-large', src: 'assets/BusC1.png', alt: 'Filled Bus C' })
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-right' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus B'),
                  ' ' + t.busD_chip
                ),
                React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusD.png', alt: 'Empty Bus D' })
              ),
              React.createElement(
                'div',
                { className: 'action-column' },
                React.createElement(
                  'button',
                  { className: 'fill-bus-button highlight', onClick: handlers.next },
                  t.fillButton
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 10: {
        const t = texts.page11;
        return React.createElement(
          'div',
          { id: 'page11', className: 'page' },
          React.createElement(
            'div',
            { className: 'fill-bus-container' },
            React.createElement('h2', { className: 'fill-bus-header' }, t.header),
            React.createElement(
              'div',
              { className: 'panels-container' },
              React.createElement(
                'div',
                { className: 'panel-left' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus C'),
                  ' ' + t.busC_chip
                ),
                React.createElement(
                  'div',
                  { className: 'bus-result-area' },
                  React.createElement('p', { className: 'standing-label' }, t.standingLabelC),
                  React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusD1.png', alt: 'Filled Bus D' })
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-right' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus D'),
                  ' ' + t.busD_chip
                ),
                React.createElement(
                  'div',
                  { className: 'bus-result-area' },
                  React.createElement('p', { className: 'standing-label' }, t.standingLabelD),
                  React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusD1.png', alt: 'Filled Bus D' })
                )
              ),
              React.createElement(
                'div',
                { className: 'action-column' },
                React.createElement(
                  'button',
                  { className: 'fill-bus-button highlight', onClick: handlers.next },
                  t.fillButton
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 11: {
        const t = texts.page12;
        const answer = answers && answers[11];
        return React.createElement(
          'div',
          { id: 'page11', className: 'page' },
          React.createElement(
            'div',
            { className: 'question-screen-container' },
            React.createElement(
              'div',
              { className: 'top-bar' },
              React.createElement('p', null, t.header)
            ),
            React.createElement(
              'div',
              { className: 'main-content final-question-layout' },
              React.createElement(
                'div',
                { className: 'bus-info-column' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus C'),
                  ' ' + t.busC_chip
                ),
                React.createElement('p', { className: 'standing-label final-question-standing' }, t.busC_standing),
                React.createElement('img', { className: 'bus-graphic-large', src: 'assets/BusC1.png', alt: 'Filled Bus C' })
              ),
              React.createElement(
                'div',
                { className: 'bus-info-column' },
                React.createElement(
                  'div',
                  { className: 'panel-header-chip' },
                  React.createElement('span', null, 'Bus B'),
                  ' ' + t.busD_chip
                ),
                React.createElement('p', { className: 'standing-label final-question-standing' }, t.busD_standing),
                React.createElement('img', { className: 'bus-graphic-small', src: 'assets/BusD1.png', alt: 'Filled Bus D' })
              ),
              React.createElement(
                'div',
                { className: 'options-box final-question-options' },
                React.createElement('p', null, t.options_title),
                React.createElement(
                  'button',
                  {
                    className: 'option-button' + (answer && answer.selected === 'C' ? (answer.isCorrect ? ' selected-correct' : ' selected-incorrect') : ''),
                    onClick: () => handlers.selectOption(11, 'C', t.correctOption)
                  },
                  t.option_C
                ),
                React.createElement(
                  'button',
                  {
                    className: 'option-button' + (answer && answer.selected === 'D' ? (answer.isCorrect ? ' selected-correct' : ' selected-incorrect') : ''),
                    onClick: () => handlers.selectOption(11, 'D', t.correctOption)
                  },
                  t.option_D
                ),
                React.createElement(
                  'button',
                  {
                    className: 'option-button' + (answer && answer.selected === 'Equal' ? (answer.isCorrect ? ' selected-correct' : ' selected-incorrect') : ''),
                    onClick: () => handlers.selectOption(11, 'Equal', t.correctOption)
                  },
                  t.option_Equal
                ),
                answer
                  ? React.createElement(
                      'div',
                      {
                        className:
                          'feedback-box ' +
                          (answer.isCorrect ? 'feedback-box-correct' : 'feedback-box-incorrect')
                      },
                      answer.isCorrect ? t.feedback_correct : t.feedback_incorrect
                    )
                  : null
              )
            ),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 12: {
        const t = texts.page13;
        return React.createElement(
          'div',
          { id: 'page13', className: 'page' },
          React.createElement(
            'div',
            { className: 'info-reveal-container' },
            React.createElement('h2', { className: 'info-header' }, t.header),
            React.createElement('p', { className: 'concept-sentence' }, t.feedback_correct),
            React.createElement(
              'div',
              { className: 'bottom-bar' },
              React.createElement(
                'div',
                { className: 'nav-arrow left', onClick: handlers.prev },
                '◀'
              ),
              React.createElement('p', null, t.bottomBar),
              React.createElement(
                'div',
                { className: 'nav-arrow right', onClick: handlers.next },
                '▶'
              )
            )
          )
        );
      }
      case 13: {
        const t = texts.page14;
        return React.createElement(
          'div',
          { id: 'page14', className: 'page' },
          React.createElement(
            'div',
            { className: 'info-reveal-container' },
            React.createElement('h2', { className: 'info-header' }, t.header),
            React.createElement('p', { className: 'summary-line' }, t.summary_line1),
            React.createElement('p', { className: 'summary-line' }, t.summary_line2),
            React.createElement(
              'button',
              { className: 'start-button', onClick: handlers.startOver },
              t.restart_button
            )
          )
        );
      }
      default: {
        return null;
      }
    }
  }

  // Main app component with state management
  function App() {
    const totalPages = 14;
    const [pageIndex, setPageIndex] = React.useState(0);
    const [answers, setAnswers] = React.useState({});
    
    // State for Bus A filling animation
    const [filledSeatCountA, setFilledSeatCountA] = React.useState(0);
    const [isAnimatingA, setIsAnimatingA] = React.useState(false);
    
    // Ref to store animation timer
    const animationTimeoutRef = React.useRef(null);

    // Reset animation state when leaving Page 4
    React.useEffect(() => {
        if (pageIndex !== 3) {
            setFilledSeatCountA(0);
            setIsAnimatingA(false);
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        }
    }, [pageIndex]);

    // Navigation and event handlers
    const nextPage = () => setPageIndex(prev => (prev + 1 >= totalPages ? 0 : prev + 1));
    const prevPage = () => setPageIndex(prev => (prev > 0 ? prev - 1 : 0));
    const startOver = () => setPageIndex(0);

    const handleOptionSelect = (pageIdx, option, correctOption) => {
      setAnswers(prev => ({
        ...prev,
        [pageIdx]: { selected: option, isCorrect: option === correctOption }
      }));
    };
    
    // Animation handler for filling Bus A
// This version yields to the event loop between each update so the
// browser can re-render.  Without the delays, mini‑react batches
// updates and you never see the seats fill.
const handleFillBusA = async () => {
    if (isAnimatingA) return;
    setIsAnimatingA(true);

    const totalSeats    = 36;
    const animationStep = 50;  // ms between each seat

    for (let seat = 1; seat <= totalSeats; seat++) {
        setFilledSeatCountA(seat);
        // wait before updating again so the previous state can be rendered
        await new Promise(resolve => {
            animationTimeoutRef.current = setTimeout(resolve, animationStep);
        });
    }

    // hold the final frame briefly, then move on
    await new Promise(resolve => {
        animationTimeoutRef.current = setTimeout(resolve, 500);
    });

    setIsAnimatingA(false);
    nextPage();
};


    const handlers = {
      next: nextPage,
      prev: prevPage,
      startOver: startOver,
      selectOption: handleOptionSelect,
      fillBusA: handleFillBusA
    };
    
    const pageState = { filledSeatCountA, isAnimatingA };
    const pageElement = renderPage(pageIndex, handlers, AppText, answers, pageState);

    return React.createElement(
      'div', { className: 'responsive-container' },
      React.createElement(
        'div', { className: 'responsive-wrapper' },
        React.createElement('div', { id: 'app-container' }, pageElement)
      )
    );
  }

  // Global utility functions
  window.killAnimation = function () {};
  window.killHighlight = function () {};

  // Initialize app when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (root) {
      ReactDOM.render(App, root);
    }
  });
})();