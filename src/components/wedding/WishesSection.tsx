import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import OrnamentDivider from './OrnamentDivider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { z } from 'zod';

const wishSchema = z.object({
  name: z.string().trim().min(1, 'Nama wajib diisi').max(100),
  message: z.string().trim().min(1, 'Ucapan wajib diisi').max(500),
});

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const WISHES_PER_PAGE = 5;

const WishesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(wishes.length / WISHES_PER_PAGE);
  const paginatedWishes = wishes.slice(
    (currentPage - 1) * WISHES_PER_PAGE,
    currentPage * WISHES_PER_PAGE
  );

  const fetchWishes = async () => {
    const { data } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);
    if (data) setWishes(data as Wish[]);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = wishSchema.safeParse({ name, message });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from('wishes').insert({
      name: result.data.name,
      message: result.data.message,
    });
    setLoading(false);

    if (error) {
      toast.error('Gagal mengirim ucapan.');
      return;
    }

    toast.success('Ucapan terkirim!');
    setName('');
    setMessage('');
    setCurrentPage(1);
    fetchWishes();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section ref={ref} className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
          Kirim Ucapan
        </p>
        <h2 className="font-script text-4xl text-primary">Wedding Wishes</h2>
        <OrnamentDivider showImage={false} className="mt-4" />
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-4 max-w-sm mx-auto mb-8"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border border-primary/30 px-4 py-3 font-body text-sm text-foreground
            focus:border-primary focus:outline-none transition-colors"
          placeholder="Nama Anda"
          maxLength={100}
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border border-primary/30 px-4 py-3 font-body text-sm text-foreground
            focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Tulis ucapan untuk mempelai..."
          rows={3}
          maxLength={500}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gold-gradient text-primary-foreground font-display text-sm tracking-[0.2em] uppercase
            hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? 'Mengirim...' : (
            <>
              <Send className="w-4 h-4" />
              Kirim Ucapan
            </>
          )}
        </button>
      </motion.form>

      {/* Wishes List */}
      {wishes.length > 0 && (
        <div className="max-w-sm mx-auto">
          <div className="space-y-3 mb-4">
            {paginatedWishes.map((wish, i) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-primary/10 bg-card/30 p-4"
              >
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <p className="font-display text-sm font-semibold text-foreground">{wish.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{formatDate(wish.created_at)}</p>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-1 break-words">{wish.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 font-body text-sm">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-1 mx-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-7 h-7 rounded-sm text-xs transition-colors ${
                      page === currentPage
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default WishesSection;
