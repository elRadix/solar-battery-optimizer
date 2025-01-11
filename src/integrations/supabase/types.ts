export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      battery_data: {
        Row: {
          capacity: number
          charge_rate: number
          created_at: string | null
          cycles: number
          efficiency: number
          id: string
          month: string
          temperature: number
          year: number
        }
        Insert: {
          capacity: number
          charge_rate: number
          created_at?: string | null
          cycles: number
          efficiency: number
          id?: string
          month: string
          temperature: number
          year: number
        }
        Update: {
          capacity?: number
          charge_rate?: number
          created_at?: string | null
          cycles?: number
          efficiency?: number
          id?: string
          month?: string
          temperature?: number
          year?: number
        }
        Relationships: []
      }
      energy_data: {
        Row: {
          consumption: number
          created_at: string | null
          heat_pump: number
          id: string
          month: string
          production: number
          year: number
        }
        Insert: {
          consumption: number
          created_at?: string | null
          heat_pump: number
          id?: string
          month: string
          production: number
          year: number
        }
        Update: {
          consumption?: number
          created_at?: string | null
          heat_pump?: number
          id?: string
          month?: string
          production?: number
          year?: number
        }
        Relationships: []
      }
      house_data: {
        Row: {
          actual_heating_consumption: number | null
          avg_degree_days_month: number | null
          consumption_per_degree_day: number | null
          conversion_factor: number | null
          cooling: number
          cooling_degree_days: number | null
          created_at: string | null
          degree_days: number
          efficiency: number
          epc_label: string | null
          estimated_heating_load: number | null
          grid_injection: number | null
          heat_pump_usage: number
          heating: number
          heating_difference: number | null
          hot_water: number
          id: string
          living_area: number | null
          total_consumption: number
          total_grid_consumption: number | null
          year: number
        }
        Insert: {
          actual_heating_consumption?: number | null
          avg_degree_days_month?: number | null
          consumption_per_degree_day?: number | null
          conversion_factor?: number | null
          cooling: number
          cooling_degree_days?: number | null
          created_at?: string | null
          degree_days: number
          efficiency: number
          epc_label?: string | null
          estimated_heating_load?: number | null
          grid_injection?: number | null
          heat_pump_usage: number
          heating: number
          heating_difference?: number | null
          hot_water: number
          id?: string
          living_area?: number | null
          total_consumption: number
          total_grid_consumption?: number | null
          year: number
        }
        Update: {
          actual_heating_consumption?: number | null
          avg_degree_days_month?: number | null
          consumption_per_degree_day?: number | null
          conversion_factor?: number | null
          cooling?: number
          cooling_degree_days?: number | null
          created_at?: string | null
          degree_days?: number
          efficiency?: number
          epc_label?: string | null
          estimated_heating_load?: number | null
          grid_injection?: number | null
          heat_pump_usage?: number
          heating?: number
          heating_difference?: number | null
          hot_water?: number
          id?: string
          living_area?: number | null
          total_consumption?: number
          total_grid_consumption?: number | null
          year?: number
        }
        Relationships: []
      }
      monthly_consumption: {
        Row: {
          cooling_consumption: number | null
          cooling_degree_days: number | null
          created_at: string | null
          degree_days: number | null
          grid_consumption: number
          grid_injection: number | null
          heat_pump_consumption: number
          heating_consumption: number | null
          hot_water_consumption: number | null
          id: string
          month: string
          year: number
        }
        Insert: {
          cooling_consumption?: number | null
          cooling_degree_days?: number | null
          created_at?: string | null
          degree_days?: number | null
          grid_consumption: number
          grid_injection?: number | null
          heat_pump_consumption: number
          heating_consumption?: number | null
          hot_water_consumption?: number | null
          id?: string
          month: string
          year: number
        }
        Update: {
          cooling_consumption?: number | null
          cooling_degree_days?: number | null
          created_at?: string | null
          degree_days?: number | null
          grid_consumption?: number
          grid_injection?: number | null
          heat_pump_consumption?: number
          heating_consumption?: number | null
          hot_water_consumption?: number | null
          id?: string
          month?: string
          year?: number
        }
        Relationships: []
      }
      system_specs: {
        Row: {
          additional_info: Json | null
          capacity: string | null
          component_type: string
          created_at: string | null
          efficiency: number | null
          id: string
          installation_date: string
          system_cost: number | null
        }
        Insert: {
          additional_info?: Json | null
          capacity?: string | null
          component_type: string
          created_at?: string | null
          efficiency?: number | null
          id?: string
          installation_date: string
          system_cost?: number | null
        }
        Update: {
          additional_info?: Json | null
          capacity?: string | null
          component_type?: string
          created_at?: string | null
          efficiency?: number | null
          id?: string
          installation_date?: string
          system_cost?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
