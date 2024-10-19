import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Create a context for premium status
const PremiumContext = createContext<{ isPremium: boolean | null }>({ isPremium: null });

// Hook to use the PremiumContext in other components
export const usePremium = () => useContext(PremiumContext);

// Provider component to wrap your app
export const PremiumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const [isPremium, setIsPremium] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from('users')
            .select('premium')
            .eq('id', user.sub) // Assuming user.sub is the Auth0 ID
            .single();

          if (error) {
            console.error('Error fetching premium status:', error);
            return;
          }

          if (data) {
            setIsPremium(data.premium);
          }
        } catch (err) {
          console.error('Error fetching premium status:', err);
        }
      }
    };

    fetchPremiumStatus();
  }, [user]);

  return (
    <PremiumContext.Provider value={{ isPremium }}>
      {children}
    </PremiumContext.Provider>
  );
};
