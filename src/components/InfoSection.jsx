import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Building, Award } from 'lucide-react';

const InfoCard = ({ title, content, icon: Icon, delay, themeColor, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl p-5 sm:p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] scroll-mt-24"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${themeColor.replace('bg-', 'from-').replace('600', '500')} to-transparent opacity-20 rounded-bl-full -mr-6 -mt-6 sm:-mr-8 sm:-mt-8 transition-transform group-hover:scale-110`}></div>

    <div className="relative z-10">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${themeColor.replace('bg-', 'bg-').replace('600', '500')}/20 border border-${themeColor.replace('bg-', '').replace('600', '500')}/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${themeColor.replace('bg-', 'text-').replace('600', '400')}`} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{title}</h3>

      {Array.isArray(content) ? (
        <ul className="space-y-2 sm:space-y-3">
          {content.map((item, idx) => (
            <li key={idx} className="flex items-start text-slate-300">
              <span className={`mr-2 mt-1.5 sm:mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${themeColor}`}></span>
              <span className="text-sm sm:text-base lg:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">{content}</p>
      )}
    </div>
  </motion.div>
);

const InfoSection = ({ content, themeColor }) => {
  return (
    <div className="py-8 sm:py-12 lg:py-20 px-2 sm:px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Overview - Full Width Top */}
        <div className="lg:col-span-3">
          <InfoCard
            id="overview"
            title="Overview"
            content={content.overview}
            icon={Building}
            delay={0.1}
            themeColor={themeColor}
          />
        </div>

        {/* Courses - Left Column */}
        <div className="lg:col-span-1">
          <InfoCard
            id="courses"
            title="Key Courses"
            content={content.courses}
            icon={BookOpen}
            delay={0.2}
            themeColor={themeColor}
          />
        </div>

        {/* Placements - Middle Column */}
        <div className="lg:col-span-1">
          <InfoCard
            id="placements"
            title="Placements"
            content={content.placements}
            icon={Award}
            delay={0.3}
            themeColor={themeColor}
          />
        </div>

        {/* Facilities - Right Column */}
        <div className="lg:col-span-1">
          <InfoCard
            id="facilities"
            title="Facilities"
            content={content.facilities}
            icon={Users}
            delay={0.4}
            themeColor={themeColor}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
