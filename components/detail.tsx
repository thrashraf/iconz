import React, { useState } from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'
import IconSize from './icon-size'
import IconWidth from './icon-width'
import IconColor from './icon-color'
import ReactDOMServer from 'react-dom/server'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type Props = {}

const Detail = (props: Props) => {
  const [size, setSize] = useState(16);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [color, setColor] = useState('#000000');

  return (
    <aside className="relative hidden w-96 shrink-0 overflow-y-auto border-l border-gray-200 xl:flex xl:flex-col">
      <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
        <div className='flex items-center justify-between'>
          <p>name.svg</p>
          <Button variant={'link'}>
            Reset
          </Button>
        </div>

        <div className={`mt-10 flex h-[250px] w-full items-center justify-center rounded-md border-2 border-gray-200 bg-[url(/dot.svg)]`}>
          <Icons.moon size={size} strokeWidth={strokeWidth} stroke={color} />
        </div>
        <IconSize
          size={size}
          setSize={setSize}
        />
        <IconWidth
          size={strokeWidth}
          setSize={setStrokeWidth}
        />
        <IconColor
          color={color}
          setColor={setColor}
        />
        <SyntaxHighlighter
          language="html"
          wrapLines={true}
          customStyle={{ height: '300px', display: 'block' }}
          wrapLongLines={true}
        >
          {ReactDOMServer.renderToStaticMarkup(<Icons.sun size={size} strokeWidth={strokeWidth} stroke={color} />)}
        </SyntaxHighlighter>
      </div>
      {/* End secondary column */}
    </aside>
  )
}

export default Detail