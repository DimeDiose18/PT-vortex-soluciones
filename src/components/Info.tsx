import REASONS from '../utils/reasons.json';
import featuresTypes from '../types/features'


const reasons = REASONS;
const Info = () => {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why choose us?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Choose us to be your companions in the journey of expression and creativity. Together, let's pen stories that resonate! 🖋️🌈
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {reasons.map((reason: featuresTypes) => (
              <div key={reason.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  </div>
                  {reason.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{reason.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export { Info }