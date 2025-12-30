import { TOCItem } from './types';

export type ContentBlock = 
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; content: string; id: string }
  | { type: 'quote'; content: string };

export function processContent(body: string): { toc: TOCItem[]; blocks: ContentBlock[] } {
  const sentences = body.split('. ');
  const blocks: ContentBlock[] = [];
  const toc: TOCItem[] = [];
  
  let currentParagraph: string[] = [];
  let headingCount = 0;

  sentences.forEach((sentence, index) => {
    
    if (index > 0 && index % 6 === 0 && headingCount < 4) {
      if (currentParagraph.length > 0) {
        blocks.push({ type: 'paragraph', content: currentParagraph.join('. ') + '.' });
        currentParagraph = [];
      }

      const headingText = `Section ${headingCount + 1}: ${sentence.slice(0, 20)}...`;
      const id = `section-${headingCount + 1}`;
      
      blocks.push({ type: 'h2', content: headingText, id });
      toc.push({ id, text: headingText, level: 2 });
      headingCount++;
    } 
    // Randomly turn a short sentence into a quote
    else if (index % 8 === 0 && sentence.length < 60) {
       if (currentParagraph.length > 0) {
        blocks.push({ type: 'paragraph', content: currentParagraph.join('. ') + '.' });
        currentParagraph = [];
      }
      blocks.push({ type: 'quote', content: sentence + '.' });
    }
    else {
      currentParagraph.push(sentence);
    }
  });

  if (currentParagraph.length > 0) {
    blocks.push({ type: 'paragraph', content: currentParagraph.join('. ') + '.' });
  }

  return { toc, blocks };
}
