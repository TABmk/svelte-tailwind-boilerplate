import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from './$types';

const Text: { [id: string]: string } = {
  0: 'text one',
  1: 'text two',
}

export const GET: RequestHandler = async ({ params }) => {
  const { id } = params;
  let ogText = 'Default';
  if (Object.keys(Text).includes(id)) {
    ogText = Text[id];
  }
  const template = `
    <div tw="bg-gray-50 flex w-full h-full items-center justify-center">
      ${ogText}
    </div>
  `;

  return new ImageResponse(template, {
    height: 630,
    width: 1200,
  });
};
