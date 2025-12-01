import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { labs, Equipment } from '../data/labs';

const LabDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const lab = labs.find((l) => l.slug === slug);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  if (!lab) {
    return (
      <div className="pt-20 py-20 text-center">
        <p className="mb-4">Lab not found.</p>
        <Link to="/research" className="link-primary">Back to Research</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/research" className="link-primary mb-6 inline-block">← Back to Research</Link>

        <div className="bg-white rounded-md shadow-md border border-gray-200 overflow-hidden">
          <div className="relative h-64">
            <img src={lab.image} alt={lab.name} className="w-full h-full aspect-video object-cover" />
            <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-md bg-academic-blue/15 text-academic-blue-800">
              {lab.category === 'service' ? 'Service Laboratory' : 'Thematic Research Laboratory'}
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-academic-gray mb-2">{lab.name}</h1>
            <p className="text-academic-gray/80 mb-6">{lab.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="text-sm text-academic-gray/70">Professor In-charge</div>
                <div className="font-semibold text-academic-gray">{lab.profIncharge || '—'}</div>
                {lab.profInchargeEmail && (
                  <a className="text-academic-blue-700 hover:underline" href={`mailto:${lab.profInchargeEmail}`}>
                    {lab.profInchargeEmail}
                  </a>
                )}
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="text-sm text-academic-gray/70">Staff In-charge</div>
                <div className="font-semibold text-academic-gray">{lab.staffIncharge || '—'}</div>
                {lab.staffInchargeEmail && (
                  <a className="text-academic-blue-700 hover:underline" href={`mailto:${lab.staffInchargeEmail}`}>
                    {lab.staffInchargeEmail}
                  </a>
                )}
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="text-sm text-academic-gray/70">Room Number</div>
                <div className="font-semibold text-academic-gray">{lab.roomNo || '—'}</div>
              </div>
            </div>

            {lab.contacts && lab.contacts.length > 0 && (
              <section aria-labelledby="contact-heading" className="mb-8">
                <h2 id="contact-heading" className="text-2xl font-bold text-academic-gray mb-3">Contact Us</h2>
                <div className="section-accent mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {lab.contacts.map((c) => (
                    <div key={`${c.role}-${c.name}`} className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <div className="text-sm text-academic-gray/70">{c.role}</div>
                      <div className="font-semibold text-academic-gray">{c.name}</div>
                      {c.email && (
                        <a href={`mailto:${c.email}`} className="text-academic-blue-700 hover:underline text-sm">{c.email}</a>
                      )}
                      {c.phone && (
                        <div className="text-sm text-academic-gray mt-1">{c.phone}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lab.analyses && lab.analyses.length > 0 && (
              <section aria-labelledby="analyses-heading" className="mb-8">
                <h2 id="analyses-heading" className="text-2xl font-bold text-academic-gray mb-3">Analyses</h2>
                <div className="section-accent mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lab.analyses.map((a) => (
                    <div key={a.category} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                      <h3 className="font-semibold text-academic-gray mb-2">{a.category}</h3>
                      <ul className="list-disc pl-6 space-y-1 text-academic-gray">
                        {a.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lab.gallery && lab.gallery.length > 0 && (
              <section aria-labelledby="gallery-heading" className="mb-8">
                <h2 id="gallery-heading" className="text-2xl font-bold text-academic-gray mb-3">Photo Catalog</h2>
                <div className="section-accent mb-6"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-academic-gray/80">Swipe or use arrows</div>
                    <div className="flex gap-2">
                      <button type="button" className="px-3 py-1 rounded-md border border-gray-200 bg-white text-sm" onClick={() => sliderRef.current && (sliderRef.current.scrollLeft -= 300)}>Prev</button>
                      <button type="button" className="px-3 py-1 rounded-md border border-gray-200 bg-white text-sm" onClick={() => sliderRef.current && (sliderRef.current.scrollLeft += 300)}>Next</button>
                    </div>
                  </div>
                  <div ref={sliderRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
                    {lab.gallery.map((g) => (
                      <figure key={g.caption} className="min-w-[220px] max-w-[240px] bg-white border border-gray-200 rounded-md shadow-sm">
                        <img src={g.src} alt={g.alt} className="w-full h-32 object-cover rounded-t-md" />
                        <figcaption className="p-2 text-sm text-academic-gray font-medium">{g.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section aria-labelledby="equipment-heading">
              <h2 id="equipment-heading" className="text-2xl font-bold text-academic-gray mb-3">Equipment</h2>
              <div className="section-accent mb-6"></div>
              {lab.equipments.length === 0 ? (
                <p className="text-academic-gray/70">Equipment list to be updated.</p>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lab.equipments.map((eq: Equipment) => {
                    const name = typeof eq === 'string' ? eq : eq.name;
                    const usage = typeof eq === 'string' ? undefined : eq.usage;
                    return (
                      <li key={name} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-academic-gray">{name}</h3>
                        </div>
                        {usage && (
                          <p className="mt-2 text-sm text-academic-gray/80 leading-relaxed whitespace-pre-line">{usage}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetailPage;
