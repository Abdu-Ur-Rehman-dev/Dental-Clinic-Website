import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Phone, Mail, User, MessageSquare, CheckCircle, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    service: 'Teeth Whitening',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const servicesList = [
    'Teeth Whitening',
    'Dental Implants',
    'Smile Makeover',
    'Teeth Alignment',
    'Root Canal Treatment',
    'General Dentistry & Hygiene',
    'AI Consultation Follow-Up'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date) {
      setError('Please fill in all required fields (Name, Phone, Email, Date).');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setBookingSuccess(data);
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C9AA78', '#102A43', '#FAF8F4']
        });
      } else {
        setError(data.error || 'Failed to submit appointment request.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error while booking. Please try calling concierge.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-32 bg-[#102A43] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9AA78]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8C5B5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Concierge Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C9AA78]/30 text-xs font-semibold tracking-widest text-[#C9AA78] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concierge Reservation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#FAF8F4] leading-tight text-balance">
                Request Your Private Consultation
              </h2>

              <p className="text-sm text-[#A8C5B5] font-light leading-relaxed">
                Step into a world of unhurried luxury. Our clinical concierge will contact you within 2 hours to finalize your suite and appointment time.
              </p>
            </div>

            {/* Direct Contact Pillars */}
            <div className="space-y-4 pt-4 border-t border-[#C9AA78]/20">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-[#C9AA78]/20">
                <div className="w-10 h-10 rounded-full bg-[#C9AA78]/15 flex items-center justify-center text-[#C9AA78] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A8C5B5] uppercase font-medium">Concierge Telephone</div>
                  <div className="text-sm font-semibold text-white">+1 (212) 555-0198</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-[#C9AA78]/20">
                <div className="w-10 h-10 rounded-full bg-[#C9AA78]/15 flex items-center justify-center text-[#C9AA78] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A8C5B5] uppercase font-medium">VIP Email Desk</div>
                  <div className="text-sm font-semibold text-white">concierge@auradental.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-[#C9AA78]/20">
                <div className="w-10 h-10 rounded-full bg-[#C9AA78]/15 flex items-center justify-center text-[#C9AA78] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A8C5B5] uppercase font-medium">Operating Hours</div>
                  <div className="text-sm font-semibold text-white">Mon - Fri: 8:30 AM - 6:00 PM | Sat: 9:00 AM - 3:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form / Success Card */}
          <div className="lg:col-span-7 bg-[#102A43] p-6 sm:p-10 rounded-3xl border border-[#C9AA78]/40 shadow-2xl relative">
            
            {bookingSuccess ? (
              <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#C9AA78]/20 border border-[#C9AA78] flex items-center justify-center mx-auto text-[#C9AA78]">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#C9AA78] uppercase tracking-widest">
                    Reservation Request Confirmed
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                    Thank You, {bookingSuccess.appointment.name}
                  </h3>
                  <p className="text-xs text-[#A8C5B5] max-w-md mx-auto font-light leading-relaxed">
                    Your appointment request for <span className="text-[#C9AA78] font-semibold">{bookingSuccess.appointment.service}</span> on <span className="text-white font-semibold">{bookingSuccess.appointment.date}</span> has been securely lodged with our concierge.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-[#C9AA78]/20 max-w-sm mx-auto text-center space-y-1">
                  <span className="text-[10px] text-[#A8C5B5] uppercase">Reference Code</span>
                  <div className="text-xl font-mono font-bold text-[#C9AA78] tracking-widest">
                    {bookingSuccess.referenceCode}
                  </div>
                </div>

                <button
                  onClick={() => setBookingSuccess(null)}
                  className="px-8 py-3 bg-[#C9AA78] hover:bg-white text-[#102A43] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-bold text-[#C9AA78] uppercase tracking-widest mb-2">
                  Interactive Reservation Form
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-900/40 border border-red-500/40 text-red-200 text-xs">
                    {error}
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#C9AA78] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#C9AA78]/30 text-xs font-light text-white placeholder-white/30 focus:outline-none focus:border-[#C9AA78]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#C9AA78] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#C9AA78]/30 text-xs font-light text-white placeholder-white/30 focus:outline-none focus:border-[#C9AA78]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#C9AA78] absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="eleanor@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#C9AA78]/30 text-xs font-light text-white placeholder-white/30 focus:outline-none focus:border-[#C9AA78]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <CalendarIcon className="w-4 h-4 text-[#C9AA78] absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#C9AA78]/30 text-xs font-light text-white focus:outline-none focus:border-[#C9AA78]"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Dropdown & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                      Dental Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#102A43] border border-[#C9AA78]/30 text-xs font-light text-white focus:outline-none focus:border-[#C9AA78]"
                    >
                      {servicesList.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                      Time Slot Preference
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#102A43] border border-[#C9AA78]/30 text-xs font-light text-white focus:outline-none focus:border-[#C9AA78]"
                    >
                      <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 03:30 PM)">Afternoon (12:00 PM - 03:30 PM)</option>
                      <option value="Late Afternoon (03:30 PM - 06:00 PM)">Late Afternoon (03:30 PM - 06:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-[11px] font-medium uppercase text-[#A8C5B5] mb-1">
                    Special Message or Medical Request
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-[#C9AA78] absolute left-3.5 top-3.5" />
                    <textarea
                      rows={3}
                      placeholder="Share any special concerns or medical history..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-[#C9AA78]/30 text-xs font-light text-white placeholder-white/30 focus:outline-none focus:border-[#C9AA78]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#C9AA78] hover:bg-[#FAF8F4] text-[#102A43] rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Lodging Reservation...</span>
                    </>
                  ) : (
                    <>
                      <CalendarIcon className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
