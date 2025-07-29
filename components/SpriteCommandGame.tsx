import React, { useState, useEffect, useRef } from 'react';

const SpriteCommandGame = () => {
  const [inputText, setInputText] = useState('');
  const [currentAction, setCurrentAction] = useState('idle');
  const [message, setMessage] = useState('Enter a command to make the sprite perform an action!');
  const [spritePosition, setSpritePosition] = useState(50);
  const [showArm, setShowArm] = useState(false);
  const [showSayHi, setShowSayHi] = useState(false);
  const [showDog, setShowDog] = useState(false);
  const [dogPosition, setDogPosition] = useState(0);
  const [crazyScale, setCrazyScale] = useState(1);
  const [crazyShake, setCrazyShake] = useState(0);
  const [commandHistory, setCommandHistory] = useState([
    { type: 'system', text: 'Game started! Enter a command to begin.' }
  ]);
  const historyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of history
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const parseCommand = (text: string): string => {
    const lowercaseText = text.toLowerCase().trim();
    
    // Bounce synonyms
    const bounceWords = ['bounce', 'jump', 'hop', 'leap', 'spring', 'bound', 'boing', 'up', 'high'];
    if (bounceWords.some(word => lowercaseText.includes(word))) {
      return 'bounce';
    }
    
    // Dance synonyms  
    const danceWords = ['dance', 'groove', 'wiggle', 'shake', 'boogie', 'party', 'move', 'jiggle', 'twist', 'sway'];
    if (danceWords.some(word => lowercaseText.includes(word))) {
      return 'dance';
    }
    
    // Run synonyms
    const runWords = ['run', 'sprint', 'dash', 'race', 'zoom', 'speed', 'fast', 'quick', 'rush', 'hurry'];
    if (runWords.some(word => lowercaseText.includes(word))) {
      return 'run';
    }
    
    // Sleep synonyms
    const sleepWords = ['sleep', 'rest', 'nap', 'snooze', 'doze', 'slumber', 'tired', 'sleepy', 'zzz', 'bed'];
    if (sleepWords.some(word => lowercaseText.includes(word))) {
      return 'sleep';
    }
    
    // Spin synonyms
    const spinWords = ['spin', 'rotate', 'turn', 'twirl', 'whirl', 'circle', 'round', 'spiral'];
    if (spinWords.some(word => lowercaseText.includes(word))) {
      return 'spin';
    }
    
    // Go crazy synonyms
    const crazyWords = ['crazy', 'wild', 'nuts', 'insane', 'mad', 'freak', 'bonkers', 'mental', 'chaos', 'everything'];
    if (crazyWords.some(word => lowercaseText.includes(word))) {
      return 'go_crazy';
    }
    
    // Bite synonyms
    const biteWords = ['bite', 'chomp', 'munch', 'eat', 'chew', 'gnaw', 'nibble', 'attack', 'snap'];
    if (biteWords.some(word => lowercaseText.includes(word))) {
      return 'bite';
    }
    
    // Scratch synonyms
    const scratchWords = ['scratch', 'claw', 'paw', 'swipe', 'dig', 'scrape', 'rub', 'itch'];
    if (scratchWords.some(word => lowercaseText.includes(word))) {
      return 'scratch';
    }
    
    // Say hi synonyms
    const sayHiWords = ['hi', 'hello', 'hey', 'greet', 'wave', 'salute', 'welcome', 'howdy', 'sup'];
    if (sayHiWords.some(word => lowercaseText.includes(word)) || lowercaseText.includes('say hi')) {
      return 'say_hi';
    }
    
    // Dog synonyms
    const dogWords = ['dog', 'puppy', 'hound', 'canine', 'chase', 'woof', 'bark', 'fetch'];
    if (dogWords.some(word => lowercaseText.includes(word))) {
      return 'dog';
    }
    
    return 'unknown';
  };

  const executeAction = (action: string, originalInput: string) => {
    if (action === 'unknown') {
      setMessage('iz dunno what u talk boot');
      setCommandHistory(prev => [...prev, 
        { type: 'response', text: `iz dunno what u talk boot` }
      ]);
      setTimeout(() => {
        setMessage('Ready for next command!');
      }, 2000);
      return;
    }
    
    setCurrentAction(action);
    
    switch (action) {
      case 'bounce':
        setMessage('🎯 Sprite is bouncing!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🎯 Sprite is bouncing!' }
        ]);
        setTimeout(() => {
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 2000);
        break;
        
      case 'dance':
        setMessage('💃 Sprite is dancing!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '💃 Sprite is dancing!' }
        ]);
        setTimeout(() => {
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 3000);
        break;
        
      case 'run':
        setMessage('🏃 Sprite is running!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🏃 Sprite is running side to side!' }
        ]);
        // Run animation: side to side twice
        setSpritePosition(10);
        setTimeout(() => setSpritePosition(90), 500);
        setTimeout(() => setSpritePosition(10), 1000);
        setTimeout(() => setSpritePosition(90), 1500);
        setTimeout(() => {
          setSpritePosition(50);
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 2000);
        break;
        
      case 'sleep':
        setMessage('😴 Sprite is sleeping...');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '😴 Sprite is sleeping peacefully...' }
        ]);
        setTimeout(() => {
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 4000);
        break;
        
      case 'spin':
        setMessage('🌪️ Sprite is spinning!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🌪️ Sprite is spinning around!' }
        ]);
        setTimeout(() => {
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 3000);
        break;
        
      case 'bite':
        setMessage('🦷 Sprite is biting!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🦷 Sprite is chomping fiercely!' }
        ]);
        setTimeout(() => {
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 2000);
        break;
        
      case 'scratch':
        setMessage('🐾 Sprite is scratching!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🐾 Sprite extends its giant paw!' }
        ]);
        setShowArm(true);
        setTimeout(() => {
          setCurrentAction('idle');
          setShowArm(false);
          setMessage('Ready for next command!');
        }, 3000);
        break;
        
      case 'say_hi':
        setMessage('👋 Sprite says hello!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '👋 Sprite grows HUGE and waves hello!' }
        ]);
        setShowSayHi(true);
        setTimeout(() => {
          setCurrentAction('idle');
          setShowSayHi(false);
          setMessage('Ready for next command!');
        }, 6000);
        break;
        
      case 'go_crazy':
        setMessage('🤪 Sprite is going CRAZY!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🤪 Sprite is going absolutely WILD!' }
        ]);
        
        // Keep action as 'go_crazy' throughout entire sequence
        setCurrentAction('go_crazy');
        
        // Extreme scaling sequence
        let crazyStep = 0;
        const crazyScales = [0.05, 50.0, 0.1, 40.0, 0.2, 60.0, 0.05, 45.0, 0.15, 70.0, 0.1, 55.0];
        
        const crazyInterval = setInterval(() => {
          const scale = crazyScales[crazyStep % crazyScales.length];
          const randomPosition = Math.random() * 80 + 10;
          const shakeAmount = Math.random() * 20 - 10; // Random shake between -10 and +10
          
          console.log(`Crazy step ${crazyStep}: scale=${scale}, position=${randomPosition}, shake=${shakeAmount}`); // Debug log
          
          setCrazyScale(scale);
          setCrazyShake(shakeAmount);
          setSpritePosition(randomPosition);
          
          crazyStep++;
          if (crazyStep >= 12) {
            clearInterval(crazyInterval);
            setCrazyScale(1);
            setCrazyShake(0);
            setSpritePosition(50);
            setCurrentAction('idle');
            setMessage('Ready for next command!');
          }
        }, 600); // Slightly slower to see changes better
        break;
        
      case 'dog':
        setMessage('🐕 A dog appears and chases the cat!');
        setCommandHistory(prev => [...prev, 
          { type: 'response', text: '🐕 Dog chase sequence initiated!' }
        ]);
        
        // Dog chase sequence
        setCurrentAction('dog');
        setShowDog(true);
        setDogPosition(0);
        
        // Step 1: Cat runs to the right, dog chases
        setTimeout(() => {
          setSpritePosition(90); // Cat runs to right edge
          setDogPosition(70); // Dog chases but stays behind
        }, 500);
        
        // Step 2: Cat grows large and scares dog
        setTimeout(() => {
          setCurrentAction('dog_cat_large'); // Cat becomes large
          setMessage('🐱 Cat grows large! Dog gets scared!');
        }, 2000);
        
        // Step 3: Dog runs away scared
        setTimeout(() => {
          setDogPosition(-20); // Dog runs off screen
          setCurrentAction('dog_cat_large'); // Keep cat large a bit longer
        }, 3000);
        
        // Step 4: Return to normal
        setTimeout(() => {
          setShowDog(false);
          setDogPosition(0);
          setSpritePosition(50);
          setCurrentAction('idle');
          setMessage('Ready for next command!');
        }, 4500);
        break;
    }
  };

  const handleSubmit = () => {
    if (inputText.trim() === '') {
      setMessage('Please enter a command!');
      return;
    }
    
    if (currentAction !== 'idle') {
      setMessage('Wait for current action to finish!');
      return;
    }

    // Add user command to history
    setCommandHistory(prev => [...prev, 
      { type: 'user', text: inputText.trim() }
    ]);

    const action = parseCommand(inputText);
    executeAction(action, inputText.trim());
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const getSpriteClass = () => {
    switch (currentAction) {
      case 'bounce':
        return 'sprite bounce';
      case 'dance':
        return 'sprite dance';
      case 'sleep':
        return 'sprite sleep';
      case 'spin':
        return 'sprite spin';
      case 'bite':
        return 'sprite bite';
      case 'scratch':
        return 'sprite scratch';
      case 'say_hi':
        return 'sprite say-hi';
      case 'go_crazy':
        return 'sprite'; // Remove CSS animation class that interferes with scaling
      case 'dog':
        return 'sprite dog-running';
      case 'dog_cat_large':
        return 'sprite dog-cat-large';
      default:
        return 'sprite';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-green-400 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Z3lda
        </h1>
        
        {/* Game Window */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-6 overflow-visible">
          <div className="relative h-[500px] bg-gradient-to-b from-sky-200 to-green-200 rounded-lg border-4 border-gray-300 overflow-visible">
            {/* Ground */}
            <div className="absolute bottom-0 w-full h-16 bg-green-300"></div>
            
            {/* Sprite */}
            <div
              className={getSpriteClass()}
              style={{
                position: 'absolute',
                bottom: currentAction === 'say_hi' ? '150px' : '64px',
                left: `${spritePosition}%`,
                transform: currentAction === 'go_crazy' 
                  ? `translateX(-50%) translateY(${crazyShake}px) scale(${crazyScale}) rotate(${crazyScale * 30}deg)` 
                  : currentAction === 'dog_cat_large'
                  ? 'translateX(-50%) scale(6)'
                  : 'translateX(-50%)',
                transition: currentAction === 'run' ? 'left 0.5s ease-in-out' 
                  : currentAction === 'go_crazy' ? 'all 0.3s ease-out' 
                  : currentAction === 'dog' ? 'left 1.5s ease-out'
                  : 'none',
                zIndex: currentAction === 'go_crazy' || currentAction === 'dog_cat_large' ? 100 : 1
              }}
            >
              🐱
            </div>
            
            {/* Dog sprite (only visible during dog chase) */}
            {showDog && (
              <div
                className="dog-sprite"
                style={{
                  position: 'absolute',
                  bottom: '64px',
                  left: `${dogPosition}%`,
                  transform: 'translateX(-50%) scaleX(-1)',
                  transition: 'left 1s ease-out',
                  zIndex: 50
                }}
              >
                🐕
              </div>
            )}
            
            {/* Oversized Arm/Paw (only visible during scratch) */}
            {showArm && (
              <div
                className="arm-sprite"
                style={{
                  position: 'absolute',
                  bottom: '64px',
                  left: `${spritePosition + 5}%`,
                  transform: 'translateX(-50%)',
                  transition: currentAction === 'run' ? 'left 0.5s ease-in-out' : 'none'
                }}
              >
                🐾
              </div>
            )}
            
            {/* Say Hi Text (only visible during say hi) */}
            {showSayHi && (
              <div
                className="say-hi-text"
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: `${spritePosition}%`,
                  transform: 'translateX(-50%)',
                  transition: currentAction === 'run' ? 'left 0.5s ease-in-out' : 'none'
                }}
              >
                Hi! 👋
              </div>
            )}
            
            {/* Clouds */}
            <div className="absolute top-4 left-8 text-4xl opacity-60">☁️</div>
            <div className="absolute top-8 right-12 text-3xl opacity-60">☁️</div>
            <div className="absolute top-2 left-1/2 text-2xl opacity-60">☁️</div>
          </div>
        </div>

        {/* Command History */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Command History</h3>
          <div ref={historyRef} className="h-32 overflow-y-auto bg-gray-50 rounded-lg p-3 space-y-2">
            {commandHistory.map((entry, index) => (
              <div key={index} className={`flex ${entry.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  entry.type === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : entry.type === 'system'
                    ? 'bg-gray-500 text-white'
                    : 'bg-green-500 text-white'
                }`}>
                  <div className="text-xs opacity-75 mb-1">
                    {entry.type === 'user' ? 'You' : entry.type === 'system' ? 'System' : 'Game'}
                  </div>
                  <div className="text-sm">{entry.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Command Input */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            Enter Command:
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Try: bounce, spin, bite, scratch, say hi, dog, go crazy..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
              disabled={currentAction !== 'idle'}
            />
            <button
              onClick={handleSubmit}
              disabled={currentAction !== 'idle'}
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Execute
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <strong>Available commands:</strong> bounce, dance, run, sleep, spin, bite, scratch, say hi, dog, go crazy
            <br />
            <strong>Tip:</strong> Try "jump high", "twirl around", "chomp", "scratch with paws", "hello there", "dog chase", "go nuts!"
          </div>
        </div>
      </div>

      <style jsx>{`
        .sprite {
          font-size: 3rem;
          display: inline-block;
        }
        
        .arm-sprite {
          font-size: 6rem;
          display: inline-block;
          animation: scratchArmAnimation 0.5s ease-in-out infinite alternate;
        }
        
        .say-hi-text {
          font-size: 4rem;
          font-weight: bold;
          color: #ff6b6b;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          animation: sayHiTextAnimation 1s ease-in-out infinite;
        }
        
        .bounce {
          animation: bounceAnimation 0.5s ease-in-out infinite alternate;
        }
        
        .dance {
          animation: danceAnimation 0.5s ease-in-out infinite alternate;
        }
        
        .sleep {
          animation: sleepAnimation 2s ease-in-out infinite;
          opacity: 0.7;
        }
        
        .spin {
          animation: spinAnimation 0.8s linear infinite;
        }
        
        .bite {
          animation: biteAnimation 0.3s ease-in-out infinite;
        }
        
        .scratch {
          animation: scratchAnimation 0.4s ease-in-out infinite;
        }
        
        .say-hi {
          animation: sayHiAnimation 2s ease-in-out infinite;
        }
        
        .go-crazy {
          animation: goCrazyShakeAnimation 0.1s ease-in-out infinite alternate;
        }
        
        .dog-running {
          animation: dogRunningAnimation 0.3s ease-in-out infinite alternate;
        }
        
        .dog-cat-large {
          animation: catLargeAnimation 0.5s ease-in-out infinite alternate;
        }
        
        .dog-sprite {
          font-size: 3rem;
          display: inline-block;
          animation: dogChaseAnimation 0.2s ease-in-out infinite alternate;
        }
        
        @keyframes bounceAnimation {
          0% { transform: translateY(0px) translateX(-50%); }
          100% { transform: translateY(-40px) translateX(-50%); }
        }
        
        @keyframes danceAnimation {
          0% { transform: translateX(-50%) rotate(-10deg) scale(1); }
          50% { transform: translateX(-50%) rotate(10deg) scale(1.1); }
          100% { transform: translateX(-50%) rotate(-10deg) scale(1); }
        }
        
        @keyframes sleepAnimation {
          0%, 100% { transform: translateX(-50%) rotate(-5deg); }
          50% { transform: translateX(-50%) rotate(5deg); }
        }
        
        @keyframes spinAnimation {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        
        @keyframes biteAnimation {
          0% { transform: translateX(-50%) scale(1) rotate(0deg); }
          50% { transform: translateX(-50%) scale(1.3) rotate(-15deg); }
          100% { transform: translateX(-50%) scale(1) rotate(0deg); }
        }
        
        @keyframes scratchAnimation {
          0% { transform: translateX(-50%) rotate(-5deg) scale(1); }
          50% { transform: translateX(-50%) rotate(5deg) scale(1.1); }
          100% { transform: translateX(-50%) rotate(-5deg) scale(1); }
        }
        
        @keyframes scratchArmAnimation {
          0% { transform: translateX(-50%) rotate(-20deg) scale(1); }
          100% { transform: translateX(-50%) rotate(20deg) scale(1.1); }
        }
        
        @keyframes sayHiAnimation {
          0% { transform: translateX(-50%) scale(8) rotate(-10deg); }
          50% { transform: translateX(-50%) scale(8) rotate(10deg); }
          100% { transform: translateX(-50%) scale(8) rotate(-10deg); }
        }
        
        @keyframes sayHiTextAnimation {
          0% { transform: translateX(-50%) scale(1) rotate(-5deg); }
          50% { transform: translateX(-50%) scale(1.2) rotate(5deg); }
          100% { transform: translateX(-50%) scale(1) rotate(-5deg); }
        }
        
        @keyframes goCrazyShakeAnimation {
          0% { transform: translateY(-2px); }
          100% { transform: translateY(2px); }
        }
        
        @keyframes dogRunningAnimation {
          0% { transform: translateX(-50%) translateY(0px) rotate(-2deg); }
          100% { transform: translateX(-50%) translateY(-5px) rotate(2deg); }
        }
        
        @keyframes catLargeAnimation {
          0% { transform: translateX(-50%) scale(6) rotate(-3deg); }
          100% { transform: translateX(-50%) scale(6) rotate(3deg); }
        }
        
        @keyframes dogChaseAnimation {
          0% { transform: translateX(-50%) translateY(0px) scaleX(-1); }
          100% { transform: translateX(-50%) translateY(-3px) scaleX(-1); }
        }
      `}</style>
    </div>
  );
};

export default SpriteCommandGame; 