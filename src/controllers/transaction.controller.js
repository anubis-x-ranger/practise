import { supabase } from "../config/supabase.js";

export const getTransactions = async (req, res) => {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", req.user.id);

  if (error) return res.status(400).json(error);

  res.json(data);
};

export const createTransaction = async (req, res) => {
  const { amount, category, type, description } = req.body;

  const { data, error } = await supabase
    .from("transactions")
    .insert([
      {
        ...req.body,
        user_id: req.user.id,
      },
    ])
    .select();

  if (error) return res.status(400).json(error);

  res.json(data);
};